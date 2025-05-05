import { NextRequest, NextResponse } from 'next/server';
import { BookingData, sendBookingEmail } from '@/utils/email';

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'date', 'time', 'vehicle'];
    for (const field of requiredFields) {
      if (!bookingData[field as keyof BookingData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate vehicle information
    const vehicleFields = ['make', 'model', 'year'];
    for (const field of vehicleFields) {
      if (!bookingData.vehicle[field as keyof typeof bookingData.vehicle]) {
        return NextResponse.json(
          { error: `Missing required vehicle field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Send email notification
    const emailSent = await sendBookingEmail(bookingData);
    
    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    // In a real application, you would also save the booking to a database here
    
    return NextResponse.json(
      { success: true, message: 'Booking received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
