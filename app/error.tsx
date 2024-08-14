'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset(): void;
};

const Error = ({ error, reset }: ErrorProps) => {
  const router = useRouter();

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-flex p-4 bg-red-100 text-red-500 rounded-full animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 4v1m0 10h.01M5.5 8l-.5 7h14l-.5-7H5.5z"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-800 dark:text-white">
          یک خطا رخ داده است
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          مشکلی در اجرای صفحه وجود دارد. لطفاً دوباره تلاش کنید یا به صفحه اصلی
          بازگردید.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={reset}
            className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V8a1 1 0 11-2 0V5a1 1 0 112 0v1.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 6.586z"
                clipRule="evenodd"
              />
            </svg>
            تلاش مجدد
          </button>
          <button
            onClick={() => router.push('/')}
            className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M13 5v6m0 4h6m-6 0a4 4 0 01-4 4 4 4 0 01-4-4h4m0 0v-4"
              />
            </svg>
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;
