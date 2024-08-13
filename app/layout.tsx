import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import ThemeWrapper from './lib/provider/theme';
import localFont from 'next/font/local';

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
      <body className={`${iranSans.className} container mx-auto `}>
        <ThemeWrapper>
          <main className="mt-[4.52rem]">{children}</main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
