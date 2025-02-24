'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarScheduleFill, RiArrowDropRightLine } from 'react-icons/ri';

interface FlipCardInterface {
  bgImg: string;
  cardTitle: string;
  cardDesc: string;
  linkTo: string;
  cardAlign: string;
  pricing60: string;
  pricing90: string;
  pricing120: string;
}

const FlipCard: React.FC<FlipCardInterface> = ({
  bgImg,
  cardTitle,
  cardDesc,
  linkTo,
  cardAlign,
  pricing60,
  pricing90,
  pricing120,
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
            <h2 className='text-lg font-bold gold-text-no-anim'>{cardTitle}</h2>
          </div>
        </div>
        {/* BACK */}
        <div className='absolute inset-0 flex flex-col items-center shadow-lg rounded-xl border border-textPrimary-dark bg-primary-dark dark:bg-primary [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden dark:shadow-lg'>
          {/* CARD TITLE */}
          <div className='w-full p-4 text-center'>
            <h3 className='gold-text-no-anim font-bold mt-2 text-md'>
              {cardTitle}
            </h3>
          </div>
          {/* CARD PRICING */}
          <div className='w-full flex flex-col border-y border-y-textPrimary-dark gold-text-no-anim text-xs font-bold'>
            <div className='grid grid-cols-2 place-items-center'>
              <div className='text-center'>60 mins</div>
              <div>${pricing60}</div>
            </div>
            <div className='grid grid-cols-2 place-items-center'>
              <div className='text-center'>90 mins</div>
              <div>${pricing90}</div>
            </div>
            <div className='grid grid-cols-2 place-items-center'>
              <div className='text-center'>120 mins</div>
              <div>${pricing120}</div>
            </div>
          </div>
          {/* CARD DESCRIPTION */}
          <div className='px-8 text-justify overflow-y-scroll'>
            <p className='light-gold-text-no-anim mt-4 text-sm font-semibold'>
              {cardDesc}
            </p>
          </div>
          {/* CARD LINKS */}
          <div className='flex flex-col items-center mt-auto pb-4'>
            <Link
              href='/schedule'
              className='relative flex items-center self-center gold-button py-4 px-8 rounded-xl shadow-xl overflow-hidden text-white'
            >
              <p className='block text-lg mr-2'>Book Now</p>
              <RiCalendarScheduleFill />
            </Link>

            <Link
              href={`/massages/${linkTo}`}
              className='flex items-center self-center text-textPrimary-dark hover:opacity-75 transition-all duration-200 mt-4'
            >
              <p className='block text-sm mr-2'>Learn More</p>
              <RiArrowDropRightLine />
            </Link>
          </div>
          {/* BG IMG */}
          <Image
            src='/lotusbg.png'
            width={190}
            height={254}
            className='absolute opacity-5 scale-150 -z-10 top-32'
            alt='lotus bg'
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
