import { sendEmail } from "@/app/api/utils/email";

const ADMIN_EMAIL = "Freshfirerevivalministriesinc@gmail.com";

interface EventInquiry {
  name: string;
  email: string;
  organization?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  details?: string;
}

export async function POST(request: Request) {
  try {
    const body: EventInquiry = await request.json();

    if (!body.name || !body.email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const inquiryId = `inquiry-${Date.now()}`;

    // Send email to admin
    const adminEmailContent = {
      to: ADMIN_EMAIL,
      subject: `New Event Inquiry from ${body.name}`,
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Organization:</strong> ${body.organization || "Not provided"}</p>
        <p><strong>Event Type:</strong> ${body.eventType || "Not specified"}</p>
        <p><strong>Event Date:</strong> ${body.eventDate || "Not specified"}</p>
        <p><strong>Location:</strong> ${body.location || "Not provided"}</p>
        <p><strong>Details:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 10px;">
          ${body.details || "No additional details"}
        </p>
        <p><small>Inquiry ID: ${inquiryId}</small></p>
      `,
      text: `Event Inquiry from ${body.name}\n\nEmail: ${body.email}\nOrganization: ${body.organization}\nEvent Date: ${body.eventDate}\nLocation: ${body.location}\n\nDetails:\n${body.details}`,
    };

    // Send confirmation email to requester
    const confirmationEmailContent = {
      to: body.email,
      subject: "Your Event Inquiry to Fresh Fire Revival Ministries",
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Dear ${body.name},</p>
        <p>We have received your event inquiry and will review it shortly. Our team will contact you within 5-7 business days to discuss availability and next steps.</p>
        <p>Inquiry Details:</p>
        <ul>
          <li><strong>Organization:</strong> ${body.organization || "Not provided"}</li>
          <li><strong>Event Type:</strong> ${body.eventType || "Not specified"}</li>
          <li><strong>Event Date:</strong> ${body.eventDate || "Not specified"}</li>
          <li><strong>Location:</strong> ${body.location || "Not provided"}</li>
        </ul>
        <p>In the meantime, feel free to reach out if you have any questions.</p>
        <p>Blessings,<br/>The Fresh Fire Revival Ministries Team</p>
      `,
      text: `Thank you for your interest in booking Ariadni for your event. We will be in touch shortly.`,
    };

    await sendEmail(adminEmailContent);
    await sendEmail(confirmationEmailContent);

    return Response.json(
      { success: true, inquiryId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Event inquiry error:", error);
    return Response.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
