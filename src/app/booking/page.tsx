import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: "Booking | Walker's Washing",
  description: "Book your car detailing appointment with Walker's Washing. Choose from our Basic, Regular, and Premium packages.",
};

export default function BookingPage() {

  return (
    <>
      {/* Header */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Book Your Detailing Appointment
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Fill out the form below to schedule your car detailing service.
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Suspense fallback={<div className="text-center py-12">Loading booking form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </>
  );
}
