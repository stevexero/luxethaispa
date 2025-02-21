export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-primary dark:bg-primary-dark'>
      {/* <div
       className='min-h-screen bg-cover bg-center bg-white'
       style={{ backgroundImage: "url('/img1.jpg')" }}
     > */}
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='text-textPrimary dark:text-textPrimary-dark'>
          LUXE Thai Spa site coming soon
        </h1>
      </main>
    </div>
  );
}
