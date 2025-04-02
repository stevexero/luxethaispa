'use client';

import { useState } from 'react';
import ServiceSelection from '../components/schedule/ServiceSelection';
import TimeSlotSelection from '../components/schedule/TimeSlotSelection';
import BookingSummary from '../components/schedule/BookingSummary';

export type Service = {
  id: string;
  title: string;
  duration: number;
  price: number;
  image: string;
};

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export default function SchedulePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(
    null
  );
  const [step, setStep] = useState<'service' | 'time' | 'summary'>('service');

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep('time');
  };

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setStep('summary');
  };

  const handleBack = () => {
    if (step === 'time') {
      setStep('service');
    } else if (step === 'summary') {
      setStep('time');
    }
  };

  return (
    <div className='min-h-screen bg-primary dark:bg-primary-dark py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-center text-textPrimary dark:text-textPrimary-dark mb-8'>
          Schedule Your Appointment
        </h1>

        <div className='bg-white dark:bg-secondary-dark rounded-lg shadow-lg p-6'>
          {step === 'service' && (
            <ServiceSelection onSelect={handleServiceSelect} />
          )}

          {step === 'time' && selectedService && (
            <TimeSlotSelection
              service={selectedService}
              onSelect={handleTimeSelect}
              onBack={handleBack}
            />
          )}

          {step === 'summary' && selectedService && selectedTimeSlot && (
            <BookingSummary
              service={selectedService}
              timeSlot={selectedTimeSlot}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
