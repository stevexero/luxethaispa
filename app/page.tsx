'use client';

// import GiftCards from './sections/giftcards';
import Hero from './sections/hero';
// import Schedule from './sections/schedule';
import Services from './sections/services';
// import Testimonials from './sections/testimonials';
import Contact from './sections/contact';

export default function Home() {
  return (
    <div className='bg-primary'>
      <main>
        <Hero />
        <Services />
        <Contact />
        {/* <Testimonials /> */}
        {/* <GiftCards /> */}
        {/* <Schedule /> */}
      </main>
    </div>
  );
}
