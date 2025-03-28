'use client';

import { useActionState } from 'react';
// import { useSearchParams } from 'next/navigation';
import {
  HiAtSymbol,
  HiKey,
  HiExclamationCircle,
  HiArrowRight,
  HiUser,
} from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { Button } from './button';
import { registerUser, signInWithGoogle } from '@/app/lib/actions';

export default function SignupForm() {
  //   const searchParams = useSearchParams();
  //   const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    registerUser,
    undefined
  );

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='max-w-96'>
        <h1 className={`mb-3 text-2xl`}>Sign up for an account.</h1>
        {/* Google Signup Button */}
        <form action={signInWithGoogle}>
          <Button
            className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 border border-gray-300'
            type='submit'
          >
            <FcGoogle className='h-5 w-5' />
            Continue with Google
          </Button>
        </form>

        {/* Divider */}
        <div className='relative my-4'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='bg-white px-2 text-gray-500'>or</span>
          </div>
        </div>

        {/* Email Form */}
        <form action={formAction}>
          <div className='w-full'>
            <div>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='firstname'
              >
                First Name
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='firstname'
                  type='name'
                  name='firstname'
                  placeholder='Enter your first name'
                  required
                />
                <HiUser className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
            </div>

            <div>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='lastname'
              >
                Last Name
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='lastname'
                  type='name'
                  name='lastname'
                  placeholder='Enter your last name'
                  required
                />
                <HiUser className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
            </div>

            <div>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='email'
              >
                Email
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  required
                />
                <HiAtSymbol className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
            </div>
            <div className='mt-4'>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='password'
              >
                Password
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Enter password'
                  required
                  minLength={6}
                />
                <HiKey className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
            </div>

            <div className='mt-4'>
              <label
                className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                htmlFor='password'
              >
                Verify Password
              </label>
              <div className='relative'>
                <input
                  className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                  id='password2'
                  type='password'
                  name='password2'
                  placeholder='Verify password'
                  required
                  minLength={6}
                />
                <HiKey className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
            </div>
          </div>
          {/* <input type='hidden' name='redirectTo' value={callbackUrl} /> */}
          <Button
            className='w-full px-4 py-3'
            aria-disabled={isPending}
            disabled={isPending}
          >
            Sign up <HiArrowRight className='ml-auto h-5 w-5 text-gray-50' />
          </Button>
          <div className='flex h-8 items-end space-x-1'>
            {errorMessage && (
              <>
                <HiExclamationCircle className='h-5 w-5 text-red-500' />
                <p className='text-sm text-red-500'>{errorMessage}</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
