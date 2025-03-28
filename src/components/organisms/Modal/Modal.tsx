import {
  Dialog,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React, { Fragment } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'secondary';
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  className = '',
  type = 'secondary',
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
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
              onClick={onClose}
              className="fixed inset-0 bg-surface-primary opacity-75 transition-opacity"
            />
          </TransitionChild>

          {/* Trick to center the modal contents */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as={Fragment}
            enter="ease-out-back duration-400"
            enterFrom="opacity-0 -translate-y-12"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-12"
          >
            <div
              className={clsx(
                'inline-block transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:align-middle',
                type === 'primary'
                  ? 'bg-surface-primary dark:bg-surface-secondary'
                  : 'bg-surface-secondary',
                'w-full p-8 sm:my-8 sm:p-10 md:p-10 lg:p-12',
                className
              )}
            >
              <div className="absolute right-0 top-0 pr-4 pt-4">
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
              {title && (
                <DialogTitle
                  as="h3"
                  className="sr-only text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </DialogTitle>
              )}
              <div className="mt-2">{children}</div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
