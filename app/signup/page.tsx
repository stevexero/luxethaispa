import { Suspense } from 'react';
import SignupForm from '@/app/ui/signup-form';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center mt-10 md:mt-16'>
      <Suspense>
        <SignupForm />
      </Suspense>
    </main>
  );
}
