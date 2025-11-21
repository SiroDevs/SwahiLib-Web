import { redirect } from 'next/navigation';
import { supabase } from '@/infrastucture/supabase/client';
import { useAuthStore } from '@/infrastucture/state/auth';

export async function POST() { 
  // const { logoutUser } = useAuthStore(); 
  await supabase.auth.signOut();
  // await logoutUser();
  redirect('/');
}