import Link from 'next/link';
import FlipCard from '../ui/flip-card';

const cards = [
  {
    image: 'lt1.png',
    title: 'LUXE Signature Combo Massage',
    description:
      'Combines Eastern stretching techniques with Western Swedish massage, including back walking, deep-tissue work, and tailored body stretching. It helps relieve tension, improve flexibility, and promote deep relaxation for a refreshed and revitalized experience.',
    href: 'luxecombo',
    position: 'top-16 -left-4',
    align: 'justify-self-center md:justify-self-end lg:justify-self-end',
  },
  {
    image: 'lt2.png',
    title: 'Swedish Massage',
    description:
      'Muscle manipulation and warm oils to relieve pain, release tension, and promote relaxation through effleurage techniques that soothe aching muscles.',
    href: 'swedish',
    position: 'top-24 -right-12',
    align: 'justify-self-center md:justify-self-start lg:justify-self-center',
  },
  {
    image: 'lt3.png',
    title: 'Deep Tissue Massage',
    description:
      'Firm pressure and slow strokes to target deep layers of muscles and connective tissue, helping to release chronic tension, reduce pain, and improve mobility.',
    href: 'deeptissue',
    position: 'top-16 left-12',
    align: 'justify-self-center md:justify-self-end lg:justify-self-start',
  },
  {
    image: 'lt4.png',
    title: 'Hot Stone Massage',
    description:
      'Smooth, heated stones placed on the body and combined with gentle massage techniques to relieve muscle tension, improve circulation, and promote deep relaxation.',
    href: 'hotstone',
    position: '-top-16 -left-12',
    align: 'justify-self-center md:justify-self-start lg:justify-self-end',
  },
  {
    image: 'lt5.png',
    title: 'Traditional Thai Massage',
    description:
      'Acupressure, deep stretching, and rhythmic compression to enhance flexibility, relieve tension, and restore energy flow. Performed on a mat without oils, this ancient technique uses guided yoga-like movements and targeted pressure points to promote circulation, mobility, and deep relaxation while balancing the body’s natural energy.',
    href: 'thai',
    position: '-top-16 -left-12',
    align: 'justify-self-center md:justify-self-end lg:justify-self-center',
  },
  {
    image: 'lt6.png',
    title: 'Body Scrub / LUXE Combo',
    description:
      'A rejuvenating blend of our Signature Thai Combination Massage and an exfoliating body scrub. Using a mix of sugar, salt, and essential oils, your therapist will gently exfoliate your skin, followed by a refreshing shower, leaving you feeling revitalized and silky smooth.',
    href: 'bodyscrubcombo',
    position: '-bottom-16 -right-12',
    align: 'justify-self-center md:justify-self-start lg:justify-self-start',
  },
];

const Services = () => {
  return (
    <section className='border-t-[0.5px] border-yellow-500 p-8 mt-8 lg:mt-0 bg-primary dark:bg-primary-dark'>
      <h2 className='font-lavishly text-6xl text-center text-textPrimary-dark mt-4'>
        Our Services
      </h2>
      <p className='mt-4 text-textPrimary font-light text-sm text-center'>
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
                posTopLeft={card.position}
                cardAlign={card.align}
              />
            );
          })}
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
