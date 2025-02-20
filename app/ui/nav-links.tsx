'use client';

import { PiFlowerLotusBold } from 'react-icons/pi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { name: 'Services', href: '/services', icon: PiFlowerLotusBold },
  { name: 'About', href: '/about', icon: PiFlowerLotusBold },
  { name: 'Contact', href: '/contact', icon: PiFlowerLotusBold },
  { name: 'Testimonials', href: '/testimonials', icon: PiFlowerLotusBold },
  { name: 'Gift Cards', href: '/gift-cards', icon: PiFlowerLotusBold },
  { name: 'Schedule', href: '/schedule', icon: PiFlowerLotusBold },
];

export default function NavLinks() {
  const pathname = usePathname();

  const [theme, setTheme] = useState(true);

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <>
      <div className='w-full flex items-center justify-evenly py-4'>
        <div className='flex flex-col items-center justify-center hover:text-amber-500 hover:cursor-pointer'>
          <GiHamburgerMenu />
          <p className='block'>More</p>
        </div>

        <Link href='/'>
          <Image
            src='/luxelogo_gold.png'
            width={305}
            height={189}
            className='block w-56'
            alt='LUXE Logo'
          />
        </Link>

        <div
          className='flex flex-col items-center justify-center hover:text-amber-500 hover:cursor-pointer'
          onClick={handleThemeChange}
        >
          <MdDarkMode />
          <p className='block'>Mode</p>
        </div>
      </div>

      <div className='w-full flex justify-center border-t-[0.5px] border-b-[0.5px] border-yellow-500 p-4 sticky top-0'>
        <nav className='w-3/4 flex justify-between'>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx('flex items-center hover:text-amber-500', {
                  'bg-amber-50 text-amber-500': pathname === link.href,
                })}
              >
                <LinkIcon />
                <p className='block ml-2'>{link.name}</p>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
