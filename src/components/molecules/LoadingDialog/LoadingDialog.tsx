import Heading from '@/components/atoms/Heading';
import Spinner from '@/components/atoms/Spinner';
import Modal from '@/components/organisms/Modal';
import clsx from 'clsx';

interface LoadingDialogProps {
  open: boolean;
  heading: string;
  message: string;
}

const LoadingDialog = ({ open, heading, message }: LoadingDialogProps) => {
  return (
    <Modal
      className="w-full animate-float self-center sm:w-[31.25rem] md:w-[28.125rem] lg:w-[40.75rem]"
      open={open}
      onClose={() => {}}
      type="primary"
      showCloseButton={false}
    >
      <div
        className={clsx(
          'flex flex-col space-x-7 sm:flex-row md:pb-0 lg:space-x-9',
          'space-y-6 sm:space-y-0',
          'py-4 pb-6 pt-4 md:pb-8'
        )}
      >
        <Spinner
          className={clsx(
            'self-center sm:-mt-2',
            'h-[2.75rem] w-[2.75rem] sm:h-[2.625rem] sm:w-[2.625rem] md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14'
          )}
        />
        <div className="!mx-0 flex flex-col space-y-2 sm:!mx-auto sm:space-y-3">
          <Heading
            className={clsx(
              'text-center sm:text-left',
              'text-[1.5rem] sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl'
            )}
          >
            {heading}
          </Heading>
          <p
            className={clsx(
              'text-center sm:text-left',
              'text-lg leading-[1.875rem] text-text-accent md:text-base lg:text-xl'
            )}
          >
            {message}
            <span className="inline-flex">
              <span className="animate-ellipsis [animation-delay:0s]">.</span>
              <span className="animate-ellipsis [animation-delay:0.2s]">.</span>
              <span className="animate-ellipsis [animation-delay:0.4s]">.</span>
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoadingDialog;
