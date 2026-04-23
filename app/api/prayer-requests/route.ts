import { NextRequest, NextResponse } from 'next/server';

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

    console.log('Prayer Request Received:', {
      name,
      email: email || 'No email provided',
      prayer,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification to Freshfirerevivalministriesinc@gmail.com
    // TODO: Save to database
    // For now, we're just logging and returning success

    return NextResponse.json(
      {
        success: true,
        message: 'Prayer request received. Our prayer team will intercede for you.',
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
