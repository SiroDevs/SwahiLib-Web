import { InputHTMLAttributes } from 'react';
import Link from 'next/link';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  showForgotPassword?: boolean;
}

export function PasswordInput({ 
  label, 
  id, 
  error,
  showForgotPassword = true,
  className = "",
  ...props 
}: PasswordInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {showForgotPassword && (
          <Link
            href="/forgot-password"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Forgot password?
          </Link>
        )}
      </div>
      <input
        id={id}
        type="password"
        className={`
          block w-full rounded-lg border border-gray-300 px-4 py-3 
          placeholder-gray-400 shadow-sm focus:border-black 
          focus:ring-black focus:outline-none transition-colors
          ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}