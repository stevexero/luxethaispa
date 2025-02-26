import Link from 'next/link';
import FlipCard from '../ui/flip-card';

const cards = [
  {
    image: 'a1.png',
    title: 'LUXE Signature Combo Massage',
    description:
      'Combines Eastern stretching techniques with Western Swedish massage, including back walking, deep-tissue work, and tailored body stretching. It helps relieve tension, improve flexibility, and promote deep relaxation for a refreshed and revitalized experience.',
    href: 'luxecombo',
    align: 'justify-self-center md:justify-self-end lg:justify-self-end',
    pricing60: '80',
    pricing90: '120',
    pricing120: '160',
  },
  {
    image: 'a5.png',
    title: 'Swedish Massage',
    description:
      'Muscle manipulation and warm oils to relieve pain, release tension, and promote relaxation through effleurage techniques that soothe aching muscles.',
    href: 'swedish',
    align: 'justify-self-center md:justify-self-start lg:justify-self-center',
    pricing60: '80',
    pricing90: '120',
    pricing120: '160',
  },
  {
    image: 'a3.png',
    title: 'Deep Tissue Massage',
    description:
      'Firm pressure and slow strokes to target deep layers of muscles and connective tissue, helping to release chronic tension, reduce pain, and improve mobility.',
    href: 'deeptissue',
    align: 'justify-self-center md:justify-self-end lg:justify-self-start',
    pricing60: '80',
    pricing90: '120',
    pricing120: '160',
  },
  {
    image: 'a4.png',
    title: 'Hot Stone Massage',
    description:
      'Smooth, heated stones placed on the body and combined with gentle massage techniques to relieve muscle tension, improve circulation, and promote deep relaxation.',
    href: 'hotstone',
    align: 'justify-self-center md:justify-self-start lg:justify-self-end',
    pricing60: '90',
    pricing90: '130',
    pricing120: '180',
  },
  {
    image: 'a9.png',
    title: 'Traditional Thai Massage',
    description:
      'A blend of acupressure, deep stretching, and rhythmic compression to enhance flexibility, relieve tension, and restore energy flow. Performed on a mat without oils, it uses guided movements and pressure points to improve circulation and mobility.',
    href: 'thai',
    align: 'justify-self-center md:justify-self-end lg:justify-self-center',
    pricing60: '90',
    pricing90: '130',
    pricing120: '180',
  },
  {
    image: 'a7.png',
    title: 'Couple Massage',
    description:
      'Designed to enhance relaxation and connection, this side-by-side massage blends Thai techniques, acupressure, and soothing strokes to relieve tension, improve circulation, and promote deep relaxation.',
    href: 'couples',
    align: 'justify-self-center md:justify-self-start lg:justify-self-start',
    pricing60: '160',
    pricing90: '240',
    pricing120: '320',
  },
  {
    image: 'a8.png',
    title: 'LUXE Four Hands Massage',
    description:
      'Designed for ultimate relaxation, this synchronized massage features two skilled therapists working in harmony to deliver a seamless blend of Thai techniques, deep pressure, and rhythmic movements.',
    href: 'fourhands',
    align: 'justify-self-center md:justify-self-end lg:justify-self-end',
    pricing60: '160',
    pricing90: '240',
    pricing120: '320',
  },
  {
    image: 'a2.png',
    title: 'Body Scrub',
    description:
      '* $80 / 30 MINUTES.  A rejuvenating mix of Thai massage and full-body exfoliation with sugar, salt, and essential oils. Your therapist gently polishes your skin, followed by a refreshing shower, leaving you smooth, refreshed, and revitalized.',
    href: 'bodyscrubcombo',
    align: 'justify-self-center md:justify-self-start lg:justify-self-center',
    pricing60: 'n/a',
    pricing90: 'n/a',
    pricing120: 'n/a',
  },
];

const Services = () => {
  return (
    <section className='border-t-[0.5px] border-yellow-500 p-8 mt-8 lg:mt-0 bg-primary dark:bg-primary-dark'>
      <h2 className='font-lavishly text-6xl text-center text-textPrimary-dark mt-4'>
        Our Services
      </h2>
      <p className='mt-4 text-textPrimary dark:text-textPrimary-dark font-light text-sm text-center'>
        Hover over the cards to learn more about our services
      </p>
      <div className='w-full flex items-center justify-center mt-4'>
        <div className='w-full xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0'>
          {cards.map((card) => {
            return (
              <FlipCard
                key={card.href}
                bgImg={card.image}
                cardTitle={card.title}
                cardDesc={card.description}
                linkTo={card.href}
                cardAlign={card.align}
                pricing60={card.pricing60}
                pricing90={card.pricing90}
                pricing120={card.pricing120}
              />
            );
          })}
        </div>
      </div>
      <h3 className='font-lavishly text-6xl text-center text-textPrimary-dark mt-12'>
        Packages
      </h3>
      <div className='mt-12 w-full flex flex-col items-center justify-center'>
        {/* LUXE LUXURY */}
        <div
          className='w-full md:w-3/4 2xl:w-1/2 rounded-lg p-8 bg-no-repeat bg-cover bg-center shadow-2xl shadow-primary-dark'
          style={{ backgroundImage: "url('/goldbg.png')" }}
        >
          <h4 className='font-bold text-primary-dark text-4xl text-center drop-shadow-[0_1.2px_0.5px_rgba(255,255,255,1)]'>
            LUXE <span className='font-lavishly text-5xl'>luxury</span>
          </h4>
          <p className='font-bold text-lg text-primary-dark text-center drop-shadow-[0_0.5px_0.25px_rgba(255,255,255,1)] mt-4'>
            30 minute body scrub. 60 minute massage and hot stones. 30 minutes
            basic facial.
          </p>
          <p className='font-bold text-xl text-primary-dark text-center drop-shadow-[0_1px_0.25px_rgba(255,255,255,1)] mt-4'>
            $200 / 2 hours
          </p>
          <div className='w-full flex items-center justify-center mt-8'>
            <button className='bg-primary-dark px-8 py-4 text-white rounded-md shadow-2xl shadow-textPrimary hover:scale-105 transition-all duration-200'>
              Schedule Now
            </button>
          </div>
        </div>
        {/* LUXE FABULOUS */}
        <div
          className='w-full md:w-3/4 2xl:w-1/2 rounded-lg p-8 bg-no-repeat bg-cover bg-center shadow-2xl shadow-primary-dark mt-12'
          style={{ backgroundImage: "url('/goldbg.png')" }}
        >
          <h4 className='font-bold text-primary-dark text-4xl text-center drop-shadow-[0_1.2px_0.5px_rgba(255,255,255,1)]'>
            LUXE <span className='font-lavishly text-5xl'>fabulous</span>
          </h4>
          <p className='font-bold text-lg text-primary-dark text-center drop-shadow-[0_0.5px_0.25px_rgba(255,255,255,1)] mt-4'>
            60 minute massage and hot stones. 60 minutes basic facial.
          </p>
          <p className='font-bold text-xl text-primary-dark text-center drop-shadow-[0_1px_0.25px_rgba(255,255,255,1)] mt-4'>
            $160 / 2 hours
          </p>
          <div className='w-full flex items-center justify-center mt-8'>
            <button className='bg-primary-dark px-8 py-4 text-white rounded-md shadow-2xl shadow-textPrimary hover:scale-105 transition-all duration-200'>
              Schedule Now
            </button>
          </div>
        </div>
        {/* LUXE REJUVENATE */}
        <div
          className='w-full md:w-3/4 2xl:w-1/2 rounded-lg p-8 bg-no-repeat bg-cover bg-center shadow-2xl shadow-primary-dark mt-12'
          style={{ backgroundImage: "url('/goldbg.png')" }}
        >
          <h4 className='font-bold text-primary-dark text-4xl text-center drop-shadow-[0_1.2px_0.5px_rgba(255,255,255,1)]'>
            LUXE <span className='font-lavishly text-5xl'>rejuvenate</span>
          </h4>
          <p className='font-bold text-lg text-primary-dark text-center drop-shadow-[0_0.5px_0.25px_rgba(255,255,255,1)] mt-4'>
            30 minute body scrub. 60 or 90 minute Massage and hot stones.
          </p>
          <p className='font-bold text-xl text-primary-dark text-center drop-shadow-[0_1px_0.25px_rgba(255,255,255,1)] mt-4'>
            $160 / 90 minutes
          </p>
          <p className='font-bold text-xl text-primary-dark text-center drop-shadow-[0_1px_0.25px_rgba(255,255,255,1)]'>
            $190 / 120 minutes
          </p>
          <div className='w-full flex items-center justify-center mt-8'>
            <button className='bg-primary-dark px-8 py-4 text-white rounded-md shadow-2xl shadow-textPrimary hover:scale-105 transition-all duration-200'>
              Schedule Now
            </button>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <Link href='/services' className='text-center'>
          <p className='block text-lg mr-2 font-bold underline text-textPrimary-dark'>
            View our full list of services
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Services;
