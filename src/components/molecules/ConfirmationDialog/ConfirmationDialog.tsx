import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import clsx from 'clsx';

export interface ConfirmationDialogProps {
  /**
   * Add props here
   */
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  handleDismiss: () => void;
  heading: string;
  body: string;
  confirmText: string;
  dismissText: string;
}

const ConfirmationDialog = ({
  open,
  handleClose,
  handleConfirm,
  handleDismiss,
  heading,
  body,
  confirmText,
  dismissText,
}: ConfirmationDialogProps) => (
  <ModalOrDrawer
    className="w-full sm:w-[31.25rem] md:w-[28.125rem] lg:w-[40.75rem]"
    open={open}
    onClose={handleClose}
    type="primary"
  >
    <div className="mb-4 flex flex-col items-center justify-center space-y-4">
      <Heading
        className={clsx(
          'text-center',
          'text-[1.938rem] sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl'
        )}
      >
        {heading}
      </Heading>
      <p
        className={clsx(
          'text-center',
          'text-lg leading-[1.875rem] text-text-accent md:text-base lg:text-xl'
        )}
      >
        {body}
      </p>
      <div
        className={clsx(
          'flex w-full flex-col items-center pt-2 sm:flex-row sm:justify-end sm:space-x-3 sm:pt-4 lg:pt-7'
        )}
      >
        <Button
          sizeClassName="w-full my-5 md:my-0 md:w-auto md:min-w-[11rem]"
          onClick={handleDismiss}
          suppressIntroAnimation
        >
          {dismissText}
        </Button>
        <Button
          sizeClassName="w-full md:w-auto md:min-w-[11rem]"
          intent="secondary"
          onClick={handleConfirm}
          suppressIntroAnimation
        >
          {confirmText}
        </Button>
      </div>
    </div>
  </ModalOrDrawer>
);

export default ConfirmationDialog;
