
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "hundredbit.official@gmail.com";

export async function POST(request: Request) {
  try {
    // Check environment configuration
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM;

    if (!apiKey || !fromEmail) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Read form data
    const data = await request.json();

    // Honeypot spam protection
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // Extract fields
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const company = String(data.company ?? "").trim();
    const service = String(data.service ?? "").trim();
    const budget = String(data.budget ?? "").trim();
    const timeline = String(data.timeline ?? "").trim();
    const message = String(data.message ?? "").trim();

    // Validate required fields
    if (!name || !email || !service || message.length < 10) {
      return NextResponse.json(
        { error: "Please check the required fields." },
        { status: 400 }
      );
    }

    // Validate email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Prevent excessively large submissions
    if (
      name.length > 120 ||
      email.length > 160 ||
      phone.length > 30 ||
      company.length > 160 ||
      service.length > 80 ||
      budget.length > 60 ||
      timeline.length > 60 ||
      message.length > 4000
    ) {
      return NextResponse.json(
        { error: "Some fields are too long." },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data: result, error } = await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Project Enquiry - ${service}`,

      text: `
NEW PROJECT ENQUIRY
==============================

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Service Required: ${service}
Project Budget: ${budget || "Not specified"}
Project Timeline: ${timeline || "Not specified"}

PROJECT DESCRIPTION
------------------------------
${message}

==============================
Sent from the Hundred Bit website.
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry. Please try again." },
        { status: 502 }
      );
    }

    console.log("Project enquiry sent:", result?.id);

    return NextResponse.json({
      ok: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
