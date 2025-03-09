import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: "hello@zackdolin.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.8; max-width: 700px; margin: auto; padding: 25px; border: 1px solid #ccc; border-radius: 10px; background: #f9f9f9; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);">
                <h2 style="color: #222; text-align: center; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
                <p style="font-size: 18px; color: #444;"><strong>Name:</strong> ${name}</p>
                <p style="font-size: 18px; color: #444;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                <p style="font-size: 18px; color: #444;"><strong>Message:</strong></p>
                <blockquote style="border-left: 5px solid #007bff; padding-left: 15px; margin-left: 0; color: #555; font-size: 16px; background: #fff; padding: 15px; border-radius: 5px;">
                    ${message}
                </blockquote>
                <hr style="border: 0; height: 1px; background: #ddd; margin: 25px 0;" />
                <p style="font-size: 14px; color: #777; text-align: center;">This email was sent from the contact form on your website.</p>
            </div>
        `,
    });

    return NextResponse.json({ success: true, response });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
