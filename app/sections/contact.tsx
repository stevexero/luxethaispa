import Link from 'next/link';
import Map from '../ui/map';
import {
  PiAddressBookTabsFill,
  PiPhoneCallFill,
  PiEnvelopeBold,
  PiFacebookLogoFill,
  PiClockFill,
} from 'react-icons/pi';

const Contact = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row items-start justify-center mt-12 border-t border-b border-t-textPrimary-dark border-b-textPrimary-dark'>
      <div className='w-full md:w-1/2 relative p-4 md:p-0'>
        <Map lat={36.113919} lng={-115.20711} zoom={16} />
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center p-4'>
        <h4 className='text-5xl text-textPrimary-dark'>
          <span className='font-lavishly'>Contact</span>{' '}
          <span className='font-bold gold-text'>LUXE</span>
        </h4>

        <div className='flex flex-col items-start mt-12'>
          <div className='text-lg font-semibold text-primary-dark flex items-start justify-start'>
            <div>
              <PiClockFill size={'2rem'} />
            </div>
            <div className='ml-4'>
              <p>Open 7 Days a Week</p>
              <p>9am - 9pm</p>
            </div>
          </div>

          <Link
            href='https://www.google.com/maps/place/LUXE+Thai+Spa+%26+Massage/@36.1142044,-115.2074814,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c76badc49c29:0x80d85f8bac1f9a9f!8m2!3d36.1142044!4d-115.2074814!16s%2Fg%2F11s1sm8d2j?entry=tts&g_ep=EgoyMDI1MDIwOS4wIPu8ASoASAFQAw%3D%3D'
            target='_blank'
            className='mt-4 text-lg font-semibold text-primary-dark flex items-start justify-start'
          >
            <div>
              <PiAddressBookTabsFill size={'2rem'} />
            </div>
            <div className='ml-4'>
              <p>4170 S Decatur Blvd a4</p>
              <p>Las Vegas, NV 89103</p>
            </div>
          </Link>

          <Link
            href='tel:+17029295441'
            target='_blank'
            className='mt-4 text-lg font-semibold text-primary-dark flex items-start justify-start'
          >
            <div>
              <PiPhoneCallFill size={'2rem'} />
            </div>
            <div className='ml-4'>
              <p>(702) 929 5441</p>
            </div>
          </Link>

          <Link
            href='mailto:luxe.thaispalasvegas@gmail.com'
            target='_blank'
            className='mt-4 text-lg font-semibold text-primary-dark flex items-start justify-start'
          >
            <div>
              <PiEnvelopeBold size={'2rem'} />
            </div>
            <div className='ml-4'>
              <p>luxe.thaispalasvegas@gmail.com</p>
            </div>
          </Link>

          <Link
            href='https://www.facebook.com/people/LUXE-Thai-Spa-Massage/61558669147180/'
            target='_blank'
            className='mt-4 text-lg font-semibold text-primary-dark flex items-start justify-start'
          >
            <div>
              <PiFacebookLogoFill size={'2rem'} />
            </div>
            <div className='ml-4'>
              <p>Facebook</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
