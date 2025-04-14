import { redirect } from 'next/navigation';

import { createClient } from '@/app/lib/supabase/server';
import { signOut } from './actons';
export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/sign-in');
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <form>
        <button formAction={signOut}>Sign Out</button>
      </form>
    </>
  );
}
