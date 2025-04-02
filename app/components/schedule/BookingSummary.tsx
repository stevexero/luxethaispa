'use client';

import { useState } from 'react';
import { Service, TimeSlot } from '../../schedule/page';
import { RiArrowLeftLine } from 'react-icons/ri';

interface BookingSummaryProps {
  service: Service;
  timeSlot: TimeSlot;
  onBack: () => void;
}

export default function BookingSummary({
  service,
  timeSlot,
  onBack,
}: BookingSummaryProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setBookingComplete(true);
    setIsSubmitting(false);
  };

  if (bookingComplete) {
    return (
      <div className='text-center py-8'>
        <h2 className='text-2xl font-semibold mb-4 text-textPrimary dark:text-textPrimary-dark'>
          Booking Confirmed!
        </h2>
        <p className='text-textPrimary dark:text-textPrimary-dark mb-6'>
          Thank you for booking with LUXE Thai Spa. We look forward to seeing
          you!
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className='bg-gradient-to-br from-green-950 via-emerald-800 to-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity'
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className='flex items-center mb-6'>
        <button
          onClick={onBack}
          className='flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500'
        >
          <RiArrowLeftLine className='mr-2' />
          Back to Time Selection
        </button>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4 text-textPrimary dark:text-textPrimary-dark'>
          Booking Summary
        </h2>

        <div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-6'>
          <div className='mb-4'>
            <h3 className='font-semibold text-textPrimary dark:text-textPrimary-dark'>
              Service
            </h3>
            <p className='text-textPrimary dark:text-textPrimary-dark'>
              {service.title}
            </p>
          </div>

          <div className='mb-4'>
            <h3 className='font-semibold text-textPrimary dark:text-textPrimary-dark'>
              Date & Time
            </h3>
            <p className='text-textPrimary dark:text-textPrimary-dark'>
              {timeSlot.time}
            </p>
          </div>

          <div className='mb-4'>
            <h3 className='font-semibold text-textPrimary dark:text-textPrimary-dark'>
              Duration
            </h3>
            <p className='text-textPrimary dark:text-textPrimary-dark'>
              {service.duration} minutes
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-textPrimary dark:text-textPrimary-dark'>
              Price
            </h3>
            <p className='text-textPrimary dark:text-textPrimary-dark'>
              ${service.price}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleConfirmBooking}
        disabled={isSubmitting}
        className='w-full bg-gradient-to-br from-green-950 via-emerald-800 to-black text-white py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50'
      >
        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
      </button>
    </div>
  );
}
