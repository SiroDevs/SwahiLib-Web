import { redirect } from 'next/navigation';
import { supabase } from '@/infrastucture/supabase/client';

export async function POST() {  
  await supabase.auth.signOut();
  
  redirect('/');
}