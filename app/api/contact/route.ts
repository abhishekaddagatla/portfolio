import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Store API key in .env.local

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const response = await resend.emails.send({
      from: "contact@abhishekaddagatla.me", // Use a verified domain from Resend
      to: "abhi.add0503@gmail.com", // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error sending email." },
      { status: 500 }
    );
  }
}
