import nodemailer from 'nodemailer';

export type BookingData = {
  name: string;
  email: string;
  phone: string;
  service: 'Basic' | 'Regular' | 'Premium';
  date: Date;
  time: string;
  vehicle: {
    make: string;
    model: string;
    year: string;
  };
  message?: string;
};

export async function sendBookingEmail(bookingData: BookingData): Promise<boolean> {
  try {
    // For development purposes, we'll use a test account
    // In production, you would use your actual SMTP credentials
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || testAccount.user,
        pass: process.env.EMAIL_PASS || testAccount.pass,
      },
    });

    const { name, email, phone, service, date, time, vehicle, message } = bookingData;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const mailOptions = {
      from: `"Walker's Washing" <${process.env.EMAIL_FROM || 'bookings@walkerswashing.com'}>`,
      to: process.env.EMAIL_TO || 'willfwalker@gmail.com',
      subject: `New Booking: ${service} Detail for ${name}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Service:</strong> ${service} Detail</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${time}</p>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h2>Vehicle Information</h2>
        <p><strong>Make:</strong> ${vehicle.make}</p>
        <p><strong>Model:</strong> ${vehicle.model}</p>
        <p><strong>Year:</strong> ${vehicle.year}</p>
        ${message ? `<h2>Additional Notes</h2><p>${message}</p>` : ''}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // For development, log the test URL to view the email
    if (process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
