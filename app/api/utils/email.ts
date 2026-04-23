import { Resend } from 'resend';

const ADMIN_EMAIL = "Freshfirerevivalministriesinc@gmail.com";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

interface EmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(params: EmailParams) {
  try {
    const resendClient = getResend();

    const response = await resendClient.emails.send({
      from: `Arise Ministry <noreply@arise.ministry>`,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
    });

    if (response.error) {
      console.error("Email send error:", response.error);
      return { success: false, error: response.error };
    }

    const messageId = response.data?.id || `msg-${Date.now()}`;
    return { success: true, messageId };
  } catch (error) {
    console.error("Email send error:", error);
    // Don't throw - allow request to continue even if email fails
    return { success: false, error: String(error) };
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
