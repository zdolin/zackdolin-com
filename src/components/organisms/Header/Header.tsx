'use client';

import ZLogo from '@/assets/images/z-logo.svg';
import Button from '@/components/atoms/Button/Button';
import DarkModeToggle from '@/components/atoms/DarkModeToggle';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#' },
  { name: 'Skills', href: '#' },
  { name: 'Resume', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Testimonials', href: '#' },
];

type HeaderProps = {
  className?: string;
};

export default function Header({ className = '' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className={clsx('surface-primary z-50 shadow-custom', className)}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-screen-2xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Zack Dolin</span>
            <ZLogo className="absolute top-0 my-3 h-[3.75rem] w-auto" alt="" />
          </a>
        </div>
        <div className="hidden gap-x-6 md:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-primary text-sm font-normal lg:text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-3 md:min-w-64 md:gap-x-4 lg:min-w-72">
          <Button>Contact me</Button>
          <DarkModeToggle />
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-primary -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <Button>Contact me</Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary -m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal text-black hover:bg-gray-50 dark:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal text-black hover:bg-gray-50 dark:text-white"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
