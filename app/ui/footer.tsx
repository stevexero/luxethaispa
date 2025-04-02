import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='p-12 grid grid-cols-3 bg-gradient-to-br from-green-950 via-emerald-800 to-black'>
      <div>
        <Link href='/'>
          <Image
            src='/luxelogo_gold2.png'
            width={305}
            height={189}
            className='block w-32'
            alt='LUXE Logo'
          />
        </Link>
      </div>

      <div></div>
      <div className='flex flex-col gap-2 text-yellow-100 text-xs font-bold'>
        <Link href='/'>
          <p>Home</p>
        </Link>
        <Link href='/about'>
          <p>About</p>
        </Link>
        <Link href='/services'>
          <p>Services</p>
        </Link>
        <Link href='/contact'>
          <p>Contact</p>
        </Link>
        <Link href='/schedule'>
          <p>Schedule</p>
        </Link>
        <Link href='/login'>
          <p>Admin</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
