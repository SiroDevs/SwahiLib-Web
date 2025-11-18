import { checkAuth } from "@/infrastucture/supabase/auth";
import AuthLayoutClient from "@/presentation/components/clients/auth-layout";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await checkAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return <AuthLayoutClient>{children}</AuthLayoutClient>;
}
