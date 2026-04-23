// Email utility for sending notifications
// Currently logs to console, ready for email provider integration (Resend, SendGrid, Nodemailer, etc)

const ADMIN_EMAIL = "Freshfirerevivalministriesinc@gmail.com";

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(params: EmailParams) {
  try {
    // TODO: Replace with actual email provider
    // Options:
    // 1. Resend (https://resend.com) - Modern email for developers
    // 2. SendGrid (https://sendgrid.com) - Industry standard
    // 3. Nodemailer (https://nodemailer.com) - Self-hosted SMTP
    // 4. AWS SES, Mailgun, etc.

    console.log("📧 Email would be sent:");
    console.log(`To: ${params.to}`);
    console.log(`Subject: ${params.subject}`);
    console.log(`Body: ${params.html}`);

    // For now, log to console instead of actually sending
    // This allows you to see what would be sent
    return { success: true, messageId: `msg-${Date.now()}` };
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
}

export function getPrayerRequestEmailContent(
  name: string,
  email: string,
  prayer: string
) {
  return {
    to: ADMIN_EMAIL,
    subject: `New Prayer Request from ${name}`,
    html: `
      <h2>New Prayer Request Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Prayer Request:</strong></p>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 10px;">
        ${prayer}
      </p>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `,
    text: `New Prayer Request from ${name}\n\nRequest:\n${prayer}`,
  };
}

export function getDonationEmailContent(
  method: string,
  amount: string,
  name?: string,
  email?: string
) {
  return {
    to: ADMIN_EMAIL,
    subject: `New Donation Received - ${method}`,
    html: `
      <h2>New Donation Received</h2>
      <p><strong>Method:</strong> ${method}</p>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Donor Name:</strong> ${name || "Anonymous"}</p>
      <p><strong>Donor Email:</strong> ${email || "Not provided"}</p>
      <p><small>Received at: ${new Date().toLocaleString()}</small></p>
      <p>Thank you for supporting Arise Ministry!</p>
    `,
    text: `New Donation: ${amount} via ${method}`,
  };
}

export function getDonationConfirmationEmail(
  name: string,
  email: string,
  amount: string
) {
  return {
    to: email,
    subject: "Thank you for your donation to Arise Ministry",
    html: `
      <h2>Thank you for your generosity!</h2>
      <p>Dear ${name},</p>
      <p>We have received your donation of <strong>${amount}</strong> to Arise Ministry.</p>
      <p>Your gift will help us reach more people with the Gospel through worship, preaching, and ministry.</p>
      <p>We will keep you updated on how your donation is making a difference.</p>
      <p>In Christ,<br/>The Arise Ministry Team</p>
    `,
    text: `Thank you for your donation of ${amount} to Arise Ministry.`,
  };
}
