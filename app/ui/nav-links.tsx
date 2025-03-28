'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { PiFlowerLotusBold } from 'react-icons/pi';
import {
  RiInfoCardFill,
  RiMailAddFill,
  RiChatHeartFill,
  RiGiftFill,
  RiCalendarScheduleFill,
  RiMoonFill,
  RiSunFill,
  RiMenu3Fill,
  RiCloseFill,
} from 'react-icons/ri';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { useThemeStore } from './store';

const links = [
  { name: 'Services', href: '/services', icon: PiFlowerLotusBold },
  { name: 'About', href: '/about', icon: RiInfoCardFill },
  { name: 'Contact', href: '/contact', icon: RiMailAddFill },
  { name: 'Testimonials', href: '/testimonials', icon: RiChatHeartFill },
  { name: 'Gift Cards', href: '/gift-cards', icon: RiGiftFill },
  { name: 'Schedule', href: '/schedule', icon: RiCalendarScheduleFill },
];

export default function NavLinks() {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith('/dashboard');

  const { theme, toggleTheme } = useThemeStore();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = () => {
    toggleTheme();
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile */}
      {!isAuthRoute ? (
        <>
          <div className='w-full flex md:hidden items-center justify-between p-4 bg-primary dark:bg-primary-dark'>
            <Link href='/'>
              <Image
                src='/luxelogo_gold.png'
                width={305}
                height={189}
                className='block w-32'
                alt='LUXE Logo'
              />
            </Link>

            <div
              className='flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500 hover:dark:text-amber-500 hover:cursor-pointer'
              onClick={handleMenuToggle}
            >
              <RiMenu3Fill size={'1.4rem'} />
            </div>
          </div>

          <div className='w-full flex md:hidden justify-center border-t-[0.5px] border-b-[0.5px] border-yellow-500 p-4 sticky top-0 bg-secondary dark:bg-secondary-dark z-10'>
            <nav className='w-full lg:w-3/4 flex justify-center'>
              <Link
                href='/schedule'
                className={clsx(
                  'flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500 hover:dark:text-amber-500',
                  {
                    'bg-amber-50 text-amber-500': pathname === '/schedule',
                  }
                )}
              >
                <RiCalendarScheduleFill />
                <p className='block ml-2'>Schedule</p>
              </Link>
            </nav>
          </div>
        </>
      ) : (
        <>
          <div>Auth</div>
        </>
      )}

      {/* Tablet & Desktop */}
      {!isAuthRoute ? (
        <>
          <div className='w-full hidden md:flex items-center justify-evenly py-4 bg-primary dark:bg-primary-dark'>
            <Link href='/'>
              <Image
                src='/luxelogo_gold2.png'
                width={305}
                height={189}
                className='block w-56'
                alt='LUXE Logo'
              />
            </Link>
          </div>

          <div className='w-full hidden md:flex justify-center border-t-[0.5px] border-b-[0.5px] border-yellow-500 p-4 sticky top-0 bg-secondary dark:bg-secondary-dark z-10'>
            <nav className='w-full lg:w-3/4 flex justify-between'>
              {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500 hover:dark:text-amber-500',
                      {
                        'bg-amber-50 text-amber-500': pathname === link.href,
                      }
                    )}
                  >
                    <LinkIcon />
                    <p className='block ml-2'>{link.name}</p>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Menu Pop Up */}
          <>
            {menuOpen ? (
              <div className='w-full h-full fixed top-0 left-0 bg-primary dark:bg-primary-dark'>
                <div className='w-full flex md:hidden items-center justify-between p-4 border-b-[0.5px] border-yellow-500'>
                  <Image
                    src='/luxelogo_gold.png'
                    width={305}
                    height={189}
                    className='block w-32'
                    alt='LUXE Logo'
                  />

                  <div
                    className='flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500 hover:dark:text-amber-500 hover:cursor-pointer'
                    onClick={handleMenuToggle}
                  >
                    <RiCloseFill size={'1.4rem'} />
                  </div>
                </div>

                <div className='w-full flex flex-col items-center'>
                  <nav>
                    {links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={clsx(
                            'flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500 hover:dark:text-amber-500 mt-8',
                            {
                              'bg-amber-50 text-amber-500':
                                pathname === link.href,
                            }
                          )}
                        >
                          <LinkIcon />
                          <p className='block ml-2'>{link.name}</p>
                        </Link>
                      );
                    })}
                    <div
                      className='flex items-center text-textPrimary dark:text-textPrimary-dark hover:text-amber-500 hover:dark:text-amber-500 hover:cursor-pointer mt-8'
                      onClick={handleThemeChange}
                    >
                      {theme === 'dark' ? <RiMoonFill /> : <RiSunFill />}
                      <p className='block ml-2'>Mode</p>
                    </div>
                  </nav>
                </div>
              </div>
            ) : null}
          </>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
