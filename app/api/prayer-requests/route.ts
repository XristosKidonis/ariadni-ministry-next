import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getPrayerRequestEmailContent } from '../utils/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, prayer } = data;

    if (!name || !prayer) {
      return NextResponse.json(
        { error: 'Name and prayer request are required' },
        { status: 400 }
      );
    }

    // Send notification email to admin
    try {
      const emailContent = getPrayerRequestEmailContent(name, email, prayer);
      await sendEmail(emailContent);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails - just log it
    }

    // TODO: Save to database (Firebase, Supabase, etc)

    return NextResponse.json(
      {
        success: true,
        message: 'Prayer request received. Our prayer team will intercede for you.',
        requestId: `PR-${Date.now()}`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Prayer request error:', error);
    return NextResponse.json(
      { error: 'Failed to submit prayer request' },
      { status: 500 }
    );
  }
}
