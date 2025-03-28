import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center mt-10 md:mt-16'>
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
