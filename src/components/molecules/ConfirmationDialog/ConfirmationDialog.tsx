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
  handleAccept: () => void;
  handleReject: () => void;
  heading: string;
  body: string;
  acceptText: string;
  rejectText: string;
}

const ConfirmationDialog = ({
  open,
  handleClose,
  handleAccept,
  handleReject,
  heading,
  body,
  acceptText,
  rejectText,
}: ConfirmationDialogProps) => (
  <ModalOrDrawer
    className="w-full sm:w-[31.25rem] md:w-[28.125rem] lg:w-[40.75rem]"
    open={open}
    onClose={handleClose}
    type="primary"
  >
    <div className="flex flex-col items-center justify-center space-y-4">
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
          sizeClassName="w-full sm:w-auto my-5 sm:my-0"
          onClick={handleReject}
          suppressIntroAnimation
        >
          {rejectText}
        </Button>
        <Button
          sizeClassName="w-full sm:w-auto"
          intent="secondary"
          onClick={handleAccept}
          suppressIntroAnimation
        >
          {acceptText}
        </Button>
      </div>
    </div>
  </ModalOrDrawer>
);

export default ConfirmationDialog;
