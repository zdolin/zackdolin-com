import Drawer from '@/components/organisms/Drawer';
import Modal from '@/components/organisms/Modal';
import { Fragment, useEffect, useState } from 'react';

type ModalOrDrawerProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'secondary';
};

const ModalOrDrawer: React.FC<ModalOrDrawerProps> = ({
  open,
  onClose,
  title,
  children,
  className = '',
  type = 'secondary',
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <Fragment>
      {isMobile ? (
        <Drawer open={open} onClose={onClose} title={title} type={type}>
          {children}
        </Drawer>
      ) : (
        <Modal
          open={open}
          onClose={onClose}
          title={title}
          className={className}
          type={type}
        >
          {children}
        </Modal>
      )}
    </Fragment>
  );
};

export default ModalOrDrawer;
