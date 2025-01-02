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
      <body>
        <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
          {/* Sidebar on desktop only */}
          <div className="fixed inset-y-0 left-0 w-64 p-10 max-lg:hidden">Testing</div>

          {/* Content */}
          <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2">
            <div className="grow p-6 lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
              <div className="mx-auto max-w-6xl">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
