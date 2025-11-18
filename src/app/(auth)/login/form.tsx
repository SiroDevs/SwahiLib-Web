"use client";

import { useState } from "react";
import { signInUser } from "@/infrastucture/services/auth.service";
import { SubmitButton } from "@/presentation/components/action/submit-button";
import { ErrorAlert } from "@/presentation/components/general/error-alert";
import { InputField, PasswordInput } from "@/presentation/components/inputs";
import { useAuthStore } from "@/infrastucture/state/auth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setLoginState } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signInUser({ email: email, password: password });
      if (result.error) {
        setError(result.error.message);
      } else {
        await setLoginState(result.data.user);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
        <div className="flex flex-col items-center justify-center space-y-2 border-b border-gray-200 bg-white px-6 py-8 text-center sm:px-8">
          <div className="rounded-full bg-black p-2">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Sign In</h3>
          <p className="text-sm text-gray-500 max-w-xs">
            Use your email and password to proceed
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-5 bg-white px-6 py-8 sm:px-8"
        >
          {error && <ErrorAlert message={error} />}

          <InputField
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PasswordInput
            label="Password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <SubmitButton loading={loading} loadingText="Signing in ...">
            Sign in
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
