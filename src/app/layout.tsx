import { getEvents } from '@/data';
import '@/styles/tailwind.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type React from 'react';
import { ApplicationLayout } from './application-layout';

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
  let events = await getEvents();

  return (
    <html
      lang="en"
      className={clsx(
        'text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950',
        GeneralSans.variable
      )}
    >
      <body>
        <ApplicationLayout events={events}>{children}</ApplicationLayout>
      </body>
    </html>
  );
}
