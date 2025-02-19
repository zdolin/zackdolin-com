'use client';
import { EASE_OUT_QUART } from '@/constants/easing';
import { motion } from 'framer-motion';

export interface DesktopSidebarProps {
  children: React.ReactNode;
}

const DesktopSidebar = ({ children }: DesktopSidebarProps) => (
  <motion.div
    className="surface-primary hidden md:block md:w-1/3 xl:p-12"
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    transition={{
      duration: 0.75,
      ease: EASE_OUT_QUART,
    }}
  >
    <div className="sticky left-0 top-0 w-full max-w-[43.75rem]">
      {children}
    </div>
  </motion.div>
);

export default DesktopSidebar;
