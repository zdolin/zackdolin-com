import DesktopSidebar from '@/components/organisms/DesktopSidebar';
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
    <html
      lang="en"
      className={clsx(
        'antialiased',
        'sm:scroll-smooth',
        GeneralSans.variable,
        'dark'
      )}
    >
      <head>
        {/* Theme detection script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1];
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="surface-secondary relative flex min-h-screen flex-col">
        {/* Header */}
        <Header />
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-1 lg:flex-row">
          {/* Sidebar on desktop only */}
          <DesktopSidebar>
            <Sidebar />
          </DesktopSidebar>

          {/* Content */}
          <main className="flex flex-1 flex-col overflow-x-hidden lg:min-w-0">
            <div className="surface-secondary grow">
              <div className="mx-auto max-w-6xl">
                <Sidebar className="md:hidden" hideNavigation={true} />
                <div className="px-4 py-6 sm:px-6">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
