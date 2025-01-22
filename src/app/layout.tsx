import tempData from '@/app/data/temp-data.json';
import Header from '@/components/organisms/Header';
import Sidebar from '@/components/organisms/Sidebar';
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx('antialiased', GeneralSans.variable)}>
      <body className="surface-primary relative flex min-h-screen flex-col">
        {/* Header */}
        <Header />
        <div className="after:surface-secondary absolute inset-0 -z-10 flex grow after:absolute after:inset-y-0 after:right-0 after:w-1/2" />
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-1 lg:flex-row">
          {/* Sidebar on desktop only */}
          <div className="hidden w-2/5 max-w-[43.75rem] md:block md:w-1/3">
            <Sidebar {...tempData.sidebar} />
          </div>
          {/* Content */}
          <main className="flex flex-1 flex-col overflow-x-hidden lg:min-w-0">
            <div className="surface-secondary grow p-6 md:p-10">
              <div className="mx-auto max-w-6xl">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
