import { Suspense } from 'react';

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Suspense fallback={<p>Loading...</p>}>
          <h1>Hi</h1>
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<p>Loading...</p>}>
          <h2>Hi</h2>
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <h3>Hi</h3>
        </Suspense>
      </div>
    </main>
  );
}
