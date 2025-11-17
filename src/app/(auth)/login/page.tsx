import { checkAuth } from '@/infrastucture/supabase/auth';
import { LoginForm } from '@/presentation/components/auth/login-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const isAuthenticated = await checkAuth();
  
  if (isAuthenticated) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LoginForm />
    </div>
  );
}