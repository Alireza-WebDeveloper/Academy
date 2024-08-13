'use client';
import * as Icons from 'react-icons/md';
import { useRouter } from 'next/navigation';
type ErrorProps = {
  error: Error;
  reset(): void;
};

const Error = ({ error, reset }: ErrorProps) => {
  const router = useRouter();
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="p-3  animate-bounce text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <Icons.MdError />
          </span>
          <h1 className="mt-3 text-center text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            something went wrong error
          </h1>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                router.push('/');
              }}
              className="flex items-center justify-center w-[100%] px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg space-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 capitalize mt-3"
            >
              <Icons.MdRefresh />
              <span>try</span>
            </button>
            <button
              onClick={() => {
                router.push('/');
              }}
              className="flex items-center justify-center mt-3 w-[100%] px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg space-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 capitalize"
            >
              <Icons.MdHomeFilled />
              <span>back to home</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
