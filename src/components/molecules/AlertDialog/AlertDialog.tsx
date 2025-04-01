import Heading from '@/components/atoms/Heading';
import Modal from '@/components/organisms/Modal';
import clsx from 'clsx';

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  heading?: string;
  description?: string;
}

const AlertDialog = ({
  open,
  onClose,
  heading,
  description,
}: AlertDialogProps) => {
  return (
    <Modal
      className="w-full self-center sm:w-[31.25rem] md:w-[28.125rem] lg:w-[40rem]"
      open={open}
      onClose={onClose}
    >
      <div className="mb-4 flex flex-col items-center justify-center space-y-4">
        <Heading className="text-center text-text-primary lg:mb-2">
          {heading}
        </Heading>
        <p
          className={clsx(
            'text-center text-lg leading-[1.875rem] text-text-accent md:text-base lg:text-xl'
          )}
        >
          {description}
        </p>
      </div>
    </Modal>
  );
};

export default AlertDialog;
