import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import ThemeWrapper from './lib/provider/theme';
import localFont from 'next/font/local';
import Header from './components/shared/header';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from './components/shared/footer';
// const robotoSlab = Roboto_Slab({
//   subsets: ['latin'],
//   weight: ['400'],
// });

export const metadata: Metadata = {
  title: '',
  description: ' ',
};

const iranSans = localFont({ src: '../public/fonts/iranSans.woff2' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSans.className}`}>
        <Header />
        <main className="mt-[4.52rem] container mx-auto p-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
