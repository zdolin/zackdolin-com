'use client';

import ZLogo from '@/assets/images/z-logo.svg';
import Button from '@/components/atoms/Button/Button';
import DarkModeToggle from '@/components/atoms/DarkModeToggle';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

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
        className="mx-auto flex max-w-screen-2xl items-center justify-between gap-x-6 px-6 lg:px-8"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Zack Dolin</span>
            <ZLogo className="absolute top-0 my-3 h-[3.75rem] w-auto" alt="" />
          </a>
        </div>
        <div className="hidden md:flex lg:mr-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={clsx(
                'text-primary text-sm font-normal lg:text-lg',
                'px-3 py-6 lg:px-5 xl:px-6'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex min-h-10 flex-1 items-center justify-end gap-x-3 md:min-w-64 md:gap-x-4 lg:min-w-72">
          <Button className="hidden md:flex">Contact me</Button>
          {!mobileMenuOpen && <DarkModeToggle />}
        </div>
        <div className="relative z-50 flex py-6 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-primary -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-8 w-8" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 md:hidden"
          onClose={setMobileMenuOpen}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex justify-end">
            <TransitionChild
              as={Fragment}
              enter="transition ease-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="surface-primary fixed bottom-0 right-0 top-16 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flow-root">
                  <div className="-my-2">
                    <div className="divide-y divide-black/20 py-6 dark:divide-blue-900">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            '-mx-3 block px-4 py-6 text-lg font-normal',
                            'text-black dark:text-white'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <Button className="my-2 border-none">Contact me</Button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
