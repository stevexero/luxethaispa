'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarScheduleFill, RiArrowDropRightLine } from 'react-icons/ri';

interface FlipCardInterface {
  bgImg: string;
  cardTitle: string;
  cardDesc: string;
  linkTo: string;
  posTopLeft: string;
  cardAlign: string;
}

const FlipCard: React.FC<FlipCardInterface> = ({
  bgImg,
  cardTitle,
  cardDesc,
  linkTo,
  posTopLeft,
  cardAlign,
}) => {
  return (
    <div
      className={`group [perspective:1000px] w-[310px] h-[444px] cursor-pointer ${cardAlign} mt-0 lg:mt-8`}
    >
      <div className='relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        {/* Front */}
        <div
          className='absolute inset-0 flex flex-col items-center justify-end text-center rounded-xl border border-textPrimary-dark [backface-visibility:hidden] bg-no-repeat bg-cover bg-center dark:shadow-lg'
          style={{ backgroundImage: `url('/${bgImg}')` }}
        >
          <div className='w-full h-16 bg-primary-dark border-t border-t-textPrimary-dark rounded-b-xl flex items-center justify-center'>
            <h2 className='text-lg font-bold text-textPrimary-dark'>
              {cardTitle}
            </h2>
          </div>
        </div>
        {/* Back */}
        <div className='absolute inset-0 flex flex-col items-center justify-between text-center shadow-lg rounded-xl border border-textPrimary-dark bg-primary-dark dark:bg-primary [transform:rotateY(180deg)] [backface-visibility:hidden] p-4 overflow-hidden dark:shadow-lg'>
          <h3 className='text-white dark:text-primary-dark text-justify font-bold mt-2'>
            {cardTitle}
          </h3>
          <p className='text-white dark:text-primary-dark text-justify text-sm mt-4'>
            {cardDesc}
          </p>
          <div className='flex flex-col items-center'>
            <Link
              href='/schedule'
              className='flex items-center mt-16 mb-8 self-center bg-textPrimary-dark dark:bg-primary-dark text-primary-dark dark:text-white py-4 px-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-200'
            >
              <p className='block text-lg mr-2'>Book Now</p>
              <RiCalendarScheduleFill />
            </Link>

            <Link
              href={`/massages/${linkTo}`}
              className='flex items-center self-center text-textPrimary-dark hover:opacity-75 transition-all duration-200'
            >
              <p className='block text-sm mr-2'>Learn More</p>
              <RiArrowDropRightLine />
            </Link>
          </div>
          <Image
            src='/lotusbg.png'
            width={190}
            height={254}
            className={`absolute ${posTopLeft} opacity-10 scale-150 -z-10`}
            alt='lotus bg'
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
