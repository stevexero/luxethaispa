import About from './sections/about';
import Contact from './sections/contact';
import GiftCards from './sections/giftcards';
import Hero from './sections/hero';
import Schedule from './sections/schedule';
import Services from './sections/services';
import Testimonials from './sections/testimonials';

export default function Home() {
  return (
    <div className='bg-primary'>
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Testimonials />
        <GiftCards />
        <Schedule />
      </main>
    </div>
  );
}
