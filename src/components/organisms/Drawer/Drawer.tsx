import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React, { Fragment } from 'react';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
        {/* Background overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-surface-primary opacity-75"
            onClick={onClose}
          />
        </TransitionChild>

        {/* Drawer container */}
        <div className="fixed inset-x-0 bottom-0 flex justify-center">
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-out-quint duration-500"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <div
              className={clsx(
                'w-full max-w-lg rounded-t-lg bg-surface-secondary shadow-xl',
                'px-8 pb-8 pt-4 sm:px-10 sm:pb-10 sm:pt-6'
              )}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="group rounded-md text-icon-button-default hover:text-icon-button-hover focus:outline-none"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon
                    className="h-7 w-7 duration-300 ease-out-quart group-hover:scale-125"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-4">{children}</div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
