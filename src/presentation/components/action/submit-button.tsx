import { ButtonHTMLAttributes } from 'react';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function SubmitButton({ 
  loading = false, 
  loadingText = "Loading...",
  children,
  className = "",
  ...props 
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`
        group relative flex h-12 w-full items-center justify-center 
        rounded-lg bg-black text-white shadow-sm hover:bg-gray-800 
        focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed 
        transition-all duration-200
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          <span className="ml-2">{loadingText}</span>
        </div>
      ) : (
        <span className="flex items-center">
          {children}
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5-5 5M6 12h12"
            />
          </svg>
        </span>
      )}
    </button>
  );
}