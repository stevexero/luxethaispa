'use client';

import { useState } from 'react';
import { Service, TimeSlot } from '../../schedule/page';
import { RiArrowLeftLine } from 'react-icons/ri';

// Generate time slots for the next 7 days
const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();

  for (let day = 0; day < 7; day++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + day);

    // Generate slots from 9 AM to 5 PM
    for (let hour = 9; hour < 17; hour++) {
      for (const minute of [0, 30]) {
        const time = new Date(currentDate);
        time.setHours(hour, minute, 0, 0);

        // Skip if the time is in the past
        if (time < new Date()) continue;

        slots.push({
          id: time.toISOString(),
          time: time.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          }),
          available: Math.random() > 0.3, // Randomly mark some slots as unavailable
        });
      }
    }
  }

  return slots;
};

interface TimeSlotSelectionProps {
  service: Service;
  onSelect: (timeSlot: TimeSlot) => void;
  onBack: () => void;
}

export default function TimeSlotSelection({
  service,
  onSelect,
  onBack,
}: TimeSlotSelectionProps) {
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const handleTimeSlotClick = (timeSlot: TimeSlot) => {
    if (!timeSlot.available) return;
    setSelectedTimeSlot(timeSlot.id);
    onSelect(timeSlot);
  };

  return (
    <div>
      <div className='flex items-center mb-6'>
        <button
          onClick={onBack}
          className='flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500'
        >
          <RiArrowLeftLine className='mr-2' />
          Back to Services
        </button>
      </div>

      <div className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2 text-textPrimary dark:text-textPrimary-dark'>
          Select a Time
        </h2>
        <p className='text-textPrimary dark:text-textPrimary-dark'>
          {service.title} - {service.duration} minutes
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => handleTimeSlotClick(slot)}
            className={`p-4 rounded-lg text-center transition-colors ${
              !slot.available
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                : selectedTimeSlot === slot.id
                ? 'bg-amber-500 text-white'
                : 'bg-white dark:bg-secondary text-textPrimary dark:text-textPrimary-dark hover:bg-amber-100 dark:hover:bg-amber-900'
            }`}
            disabled={!slot.available}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}
