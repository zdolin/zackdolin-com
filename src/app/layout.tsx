import Header from '@/components/organisms/Header';
import '@/styles/tailwind.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s - Catalyst',
    default: 'Catalyst',
  },
  description: '',
};

const GeneralSans = localFont({
  src: [
    {
      path: './assets/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-general-sans',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950',
        GeneralSans.variable
      )}
    >
      <body className="flex min-h-screen flex-col">
        {/* Header */}
        <Header />

        <div className="flex w-full flex-1 lg:flex-row lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
          {/* Sidebar on desktop only */}
          <div className="hidden w-64 bg-[#f9f9f9] p-10 lg:block dark:bg-zinc-900">Sidebar Content Desktop</div>

          {/* Content */}
          <main className="flex flex-1 flex-col lg:min-w-0">
            <div className="grow p-6 lg:bg-[#DDECF5] lg:p-10 dark:lg:bg-zinc-900">
              <div className="mx-auto max-w-6xl">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
