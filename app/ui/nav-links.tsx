'use client';

import { PiFlowerLotusBold } from 'react-icons/pi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

const linksLeft = [
  { name: 'Services', href: '/services', icon: PiFlowerLotusBold },
  { name: 'About', href: '/about', icon: PiFlowerLotusBold },
  { name: 'Contact', href: '/contact', icon: PiFlowerLotusBold },
];

const linksRight = [
  { name: 'Testimonials', href: '/testimonials', icon: PiFlowerLotusBold },
  { name: 'Gift Cards', href: '/gift-cards', icon: PiFlowerLotusBold },
  { name: 'Schedule', href: '/schedule', icon: PiFlowerLotusBold },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className='w-full flex'>
      {linksLeft.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex flex-col grow items-center justify-center gap-2 rounded-md p-3 font-medium hover:bg-amber-50 hover:text-amber-500',
              {
                'bg-amber-50 text-amber-500': pathname === link.href,
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='block'>{link.name}</p>
          </Link>
        );
      })}

      <Link href='/'>
        <Image
          src='/luxelogo_gold.png'
          width={305}
          height={189}
          className='block'
          alt='LUXE Logo'
        />
      </Link>

      {linksRight.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex flex-col grow items-center justify-center gap-2 rounded-md p-3 font-medium hover:bg-amber-50 hover:text-amber-500',
              {
                'bg-amber-50 text-amber-500': pathname === link.href,
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
