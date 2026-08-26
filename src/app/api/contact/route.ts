import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map for sliding window rate limit per IP
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const now = Date.now();

    // Clean up expired IP entries periodically to avoid memory growth
    if (rateLimitMap.size > 1000) {
      for (const [key, value] of rateLimitMap.entries()) {
        if (now > value.resetTime) {
          rateLimitMap.delete(key);
        }
      }
    }

    const currentRecord = rateLimitMap.get(ip);

    if (currentRecord) {
      if (now > currentRecord.resetTime) {
        // Window expired, reset counter
        rateLimitMap.set(ip, {
          count: 1,
          resetTime: now + RATE_LIMIT_WINDOW_MS,
        });
      } else if (currentRecord.count >= MAX_REQUESTS_PER_WINDOW) {
        const retryAfterSeconds = Math.ceil((currentRecord.resetTime - now) / 1000);
        return NextResponse.json(
          {
            success: false,
            error: `Rate limit exceeded. You can only send ${MAX_REQUESTS_PER_WINDOW} messages every 10 minutes. Please try again in ${Math.ceil(
              retryAfterSeconds / 60
            )} minutes.`,
          },
          {
            status: 429,
            headers: {
              "Retry-After": retryAfterSeconds.toString(),
            },
          }
        );
      } else {
        currentRecord.count += 1;
      }
    } else {
      rateLimitMap.set(ip, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW_MS,
      });
    }

    // Parse payload
    const body = await req.json();
    const { name, email, budget, message } = body;

    // Server-side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials missing in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is temporarily unconfigured. Please contact directly via email.",
        },
        { status: 500 }
      );
    }

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;">
        <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">New Portfolio Message</h1>
          <p style="color: #e0f2fe; margin: 4px 0 0 0; font-size: 13px;">Raj Puthawala Portfolio Inquiry</p>
        </div>
        <div style="padding: 24px; background-color: #0f172a;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 12px; width: 100px;">Sender Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f8fafc; font-weight: 600; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 12px;">Sender Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #38bdf8; font-weight: 600; font-size: 14px;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 12px;">Est. Budget:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #34d399; font-weight: 600; font-size: 14px;">${budget || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 12px;">Submitted IP:</td>
              <td style="padding: 10px 0; color: #cbd5e1; font-family: monospace; font-size: 12px;">${ip}</td>
            </tr>
          </table>

          <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-top: 10px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #f1f5f9; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="background-color: #020617; padding: 16px; text-align: center; border-top: 1px solid #1e293b;">
          <p style="margin: 0; color: #64748b; font-size: 11px;">This notification was sent automatically from your portfolio website at rajputhawala.vercel.app.</p>
        </div>
      </div>
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"Raj Puthawala Portfolio" <${smtpUser}>`,
      replyTo: email,
      to: smtpUser,
      subject: `New Portfolio Inquiry from ${name} (${budget || "No budget specified"})`,
      text: `New Portfolio Inquiry\n\nName: ${name}\nEmail: ${email}\nBudget: ${budget}\nIP: ${ip}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email via Nodemailer:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
