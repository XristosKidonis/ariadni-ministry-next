import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getDonationEmailContent, getDonationConfirmationEmail } from '../utils/email';
import { saveDonation } from '../utils/firebase';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { method, amount, email, name } = data;

    if (!method || !amount) {
      return NextResponse.json(
        { error: 'Payment method and amount are required' },
        { status: 400 }
      );
    }

    const donationId = `DONATION-${Date.now()}`;
    const timestamp = new Date().toISOString();

    // Send notification email to admin
    try {
      const adminEmail = getDonationEmailContent(method, amount, name, email);
      await sendEmail(adminEmail);
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
    }

    // Send confirmation email to donor if email provided
    if (email) {
      try {
        const donorEmail = getDonationConfirmationEmail(name || 'Friend', email, amount);
        await sendEmail(donorEmail);
      } catch (emailError) {
        console.error('Failed to send donor confirmation:', emailError);
      }
    }

    // Save to Firebase
    try {
      await saveDonation({
        method,
        amount,
        email,
        name,
        donationId,
        timestamp,
      });
    } catch (firebaseError) {
      console.error('Failed to save to Firebase:', firebaseError);
      // Don't fail the request if Firebase fails
    }

    // TODO: Process payment through PayPal, Stripe, or your payment processor

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your generous donation!',
        donationId,
        timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Donation error:', error);
    return NextResponse.json(
      { error: 'Failed to process donation' },
      { status: 500 }
    );
  }
}
