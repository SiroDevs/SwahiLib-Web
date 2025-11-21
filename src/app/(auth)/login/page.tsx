import { checkAuth } from "@/infrastucture/supabase/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "./form";

export default async function LoginPage() {
  const isAuthenticated = await checkAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}