import Link from 'next/link';
import { RiCalendarScheduleFill } from 'react-icons/ri';

export default function Home() {
  return (
    <div className='bg-primary'>
      <main>
        <section className='grid lg:grid-cols-2'>
          <div
            className='relative w-full bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: "url('/sideimg.png')" }}
          ></div>
          <div className='flex items-center justify-center bg-primary p-24 pb-0'>
            <div className='flex flex-col'>
              <h1 className='flex flex-col text-center text-textPrimary-dark'>
                <span className='font-lavishly text-5xl'>Welcome to</span>
                <span className='font-extrabold text-7xl'>LUXE</span>
                <span className='font-semibold mt-2'>Thai Spa & Massage</span>
              </h1>

              <h2 className='mt-8 text-center text-textPrimary italic font-semibold text-sm'>
                Experience the Art of Healing Through Traditional Thai Massage
              </h2>

              <p className='mt-4 text-textPrimary font-light text-sm text-center lg:text-left'>
                Nestled in the heart of Las Vegas, LUXE offers an authentic Thai
                spa experience that blends ancient healing techniques with
                modern relaxation. Whether you&apos;re seeking relief from
                stress, muscle tension, or just a peaceful escape, our skilled
                therapists will transport you to a state of pure bliss
              </p>
              <Link
                href='/schedule'
                className='flex items-center mt-16 mb-8 self-center lg:self-end bg-primary-dark text-white p-6 rounded-sm hover:text-textPrimary-dark'
              >
                <p className='block text-xs md:text-lg md:mr-2'>
                  Schedule a Visit Now
                </p>
                <RiCalendarScheduleFill className='hidden md:block' />
              </Link>
            </div>
          </div>
        </section>

        <section className='border-t-[0.5px] border-yellow-500 p-8 mt-8 lg:mt-0'>
          <h1>Next Section</h1>
        </section>
      </main>
    </div>
  );
}
