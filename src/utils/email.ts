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
    let transporter: nodemailer.Transporter;
    let isEtherealAccount = false;

    // Check if we have email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not found. Using test account.');
      // For development purposes, we'll use a test account
      const testAccount = await nodemailer.createTestAccount();

      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      console.log('Using Ethereal test account:', testAccount.user);
      isEtherealAccount = true;
    } else {
      // Use configured email settings
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      console.log('Using configured email settings:', process.env.EMAIL_HOST);
    }

    return await sendWithTransporter(transporter, bookingData, isEtherealAccount);
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

async function sendWithTransporter(
  transporter: nodemailer.Transporter,
  bookingData: BookingData,
  isEtherealAccount: boolean = false
): Promise<boolean> {
  try {
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
      text: `
        New Booking Request

        Service: ${service} Detail
        Date: ${formattedDate}
        Time: ${time}

        Customer Information
        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Vehicle Information
        Make: ${vehicle.make}
        Model: ${vehicle.model}
        Year: ${vehicle.year}
        ${message ? `\nAdditional Notes\n${message}` : ''}
      `,
    };

    console.log('Sending email to:', mailOptions.to);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // For development, log the test URL to view the email if using Ethereal
    if (info.messageId && isEtherealAccount) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
