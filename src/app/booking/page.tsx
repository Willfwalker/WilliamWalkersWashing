'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { services } from '@/utils/services';
import { BookingData } from '@/utils/email';

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  service: 'Basic' | 'Regular' | 'Premium';
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  message: string;
};

export default function BookingPage() {
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  // Set default service from URL parameter if available
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const foundService = services.find(s => s.id === serviceParam);
      if (foundService) {
        setValue('service', foundService.name as 'Basic' | 'Regular' | 'Premium');
      }
    }
  }, [searchParams, setValue]);

  // Available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for your appointment');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const bookingData: BookingData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        date: selectedDate,
        time: selectedTime,
        vehicle: {
          make: data.vehicleMake,
          model: data.vehicleModel,
          year: data.vehicleYear,
        },
        message: data.message,
      };

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setSelectedDate(null);
        setSelectedTime('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {submitStatus === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Booking Successful!</h2>
            <p className="text-green-700 mb-4">
              Thank you for booking with Walker's Washing. We have received your appointment request and will send you a confirmation email shortly.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-700">
                  There was an error submitting your booking. Please try again or contact us directly.
                </p>
              </div>
            )}

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Package *
                  </label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name} (${service.price.toFixed(2)})
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Appointment Details</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    filterDate={(date) => date.getDay() !== 0} // Exclude Sundays
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholderText="Select a date"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Vehicle Information</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">
                    Make *
                  </label>
                  <input
                    type="text"
                    id="vehicleMake"
                    {...register('vehicleMake', { required: 'Vehicle make is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Toyota"
                  />
                  {errors.vehicleMake && (
                    <p className="mt-1 text-sm text-red-600">{errors.vehicleMake.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    {...register('vehicleModel', { required: 'Vehicle model is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Camry"
                  />
                  {errors.vehicleModel && (
                    <p className="mt-1 text-sm text-red-600">{errors.vehicleModel.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700">
                    Year *
                  </label>
                  <input
                    type="text"
                    id="vehicleYear"
                    {...register('vehicleYear', { required: 'Vehicle year is required' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., 2020"
                  />
                  {errors.vehicleYear && (
                    <p className="mt-1 text-sm text-red-600">{errors.vehicleYear.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Information</h2>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Special Requests or Notes
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Any special requests or additional information about your vehicle..."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
