import Heading from '@/components/atoms/Heading';
import Modal from '@/components/organisms/Modal';
import clsx from 'clsx';

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const AlertDialog = ({
  open,
  onClose,
  title = 'Hmm, there was an error.',
  description = 'Occassionally, the AI will fail to generate a theme. If this happens, try again in a minute or two.',
}: AlertDialogProps) => {
  return (
    <Modal
      className="w-full self-center sm:w-[31.25rem] md:w-[28.125rem] lg:w-[40rem]"
      open={open}
      onClose={onClose}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <Heading className="text-center text-text-primary lg:mb-2">
          {title}
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
