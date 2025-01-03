import Header from '@/components/organisms/Header';
import '@/styles/tailwind.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s - Zack Dolin',
    default: 'Zack Dolin',
  },
  description: '',
};

const GeneralSans = localFont({
  src: [
    {
      path: '../assets/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-general-sans',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx('antialiased', GeneralSans.variable)}>
      <body className="surface-primary flex min-h-screen flex-col">
        {/* Header */}
        <Header />
        <div className="after:surface-secondary absolute inset-0 -z-10 after:absolute after:inset-y-0 after:right-0 after:w-1/2" />
        <div className="z-10 mx-auto flex w-full flex-1 xl:container lg:flex-row">
          {/* Sidebar on desktop only */}
          <div className="surface-primary hidden w-2/5 max-w-[43.75rem] p-10 md:block lg:w-1/3">
            Sidebar Content Desktop
          </div>
          {/* Content */}
          <main className="flex flex-1 flex-col lg:min-w-0">
            <div className="surface-secondary grow p-6 md:p-10">
              <div className="mx-auto max-w-6xl">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
