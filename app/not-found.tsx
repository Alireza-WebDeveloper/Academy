'use client';
import LinkContainer from './components/shared/ui/link-container';

const NotFound = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
        <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          اوه! صفحه‌ای که به دنبال آن هستید، پیدا نشد.
        </p>
        <p className="text-gray-600 mt-2">
          ممکن است آدرس صفحه را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.
        </p>
        <LinkContainer
          href="/"
          className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          بازگشت به صفحه اصلی
        </LinkContainer>
      </div>
    </div>
  );
};

export default NotFound;
