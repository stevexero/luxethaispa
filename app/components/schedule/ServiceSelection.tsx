'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Service } from '../../schedule/page';

const services: Service[] = [
  {
    id: 'signature-combo',
    title: 'LUXE Signature Combo Massage',
    duration: 60,
    price: 80,
    image: 'a1.png',
  },
  {
    id: 'swedish',
    title: 'Swedish Massage',
    duration: 60,
    price: 80,
    image: 'b_swedish2.png',
  },
  {
    id: 'deep-tissue',
    title: 'Deep Tissue Massage',
    duration: 60,
    price: 90,
    image: 'b_deep_tissue.png',
  },
  {
    id: 'hot-stone',
    title: 'Hot Stone Massage',
    duration: 60,
    price: 90,
    image: 'c_stones.png',
  },
  {
    id: 'thai',
    title: 'Traditional Thai Massage',
    duration: 60,
    price: 90,
    image: 'b_traditional_thai.png',
  },
  {
    id: 'couples',
    title: 'Couple Massage',
    duration: 60,
    price: 160,
    image: 'b_couples.png',
  },
  {
    id: 'four-hands',
    title: 'LUXE Four Hands Massage',
    duration: 60,
    price: 160,
    image: 'c_four_hands.png',
  },
  {
    id: 'body-scrub',
    title: 'Body Scrub + LUXE Signature Massage',
    duration: 60,
    price: 110,
    image: 'c_body_scrub.png',
  },
  {
    id: 'basic-facial',
    title: 'Basic Facial',
    duration: 30,
    price: 60,
    image: 'c_basic_facial.png',
  },
];

interface ServiceSelectionProps {
  onSelect: (service: Service) => void;
}

export default function ServiceSelection({ onSelect }: ServiceSelectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service.id);
    onSelect(service);
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-6 text-textPrimary dark:text-textPrimary-dark'>
        Select a Service
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              selectedService === service.id ? 'ring-2 ring-amber-500' : ''
            }`}
            onClick={() => handleServiceClick(service)}
          >
            <div className='aspect-w-16 aspect-h-9 relative'>
              <Image
                src={`/${service.image}`}
                alt={service.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='p-4 bg-gradient-to-br from-green-950 via-emerald-800 to-black'>
              <h3 className='text-lg font-semibold text-white mb-2'>
                {service.title}
              </h3>
              <div className='flex justify-between items-center text-white'>
                <span>{service.duration} minutes</span>
                <span>${service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
