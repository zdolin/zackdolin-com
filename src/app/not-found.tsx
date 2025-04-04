'use client';

import Heading from '@/components/atoms/Heading';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center px-8 md:min-h-[60vh] md:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1, type: 'spring', stiffness: 100 }}
        className="mb-8"
      >
        <ExclamationTriangleIcon className="h-24 w-24 text-text-accent" />
      </motion.div>
      <Heading className="mb-4 text-center">404 - Page Not Found</Heading>
      <p className="max-w-[28rem] text-center text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Please check the URL or return to the homepage.
      </p>
    </div>
  );
}
