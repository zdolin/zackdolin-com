'use client';

import clsx from 'clsx';
import { animate, motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

type RadialChartProps = {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

const RadialChart = ({
  percentage,
  label,
  size = 110,
  strokeWidth = 4,
  duration = 1.2,
  delay = 0,
  className = '',
}: RadialChartProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    controls.start({
      strokeDashoffset: circumference - (percentage / 100) * circumference,
      transition: { duration, ease: 'easeInOut', delay },
    });

    const controlsNumber = animate(0, percentage, {
      duration,
      ease: 'easeInOut',
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });

    return () => {
      controlsNumber.stop();
    };
  }, [percentage, circumference, duration, controls, delay]);

  return (
    <div className={clsx('flex w-full flex-col items-center', className)}>
      <div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-gray-300 dark:stroke-gray-800"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            className="origin-center -rotate-90 stroke-sky-600"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={controls}
          />
        </svg>
        <div
          className="absolute font-semibold text-sky-600"
          style={{
            fontSize: size / 5,
          }}
        >
          {displayValue}%
        </div>
      </div>
      <p className="text-primary mt-4 text-base font-medium md:text-lg 2xl:text-2xl">
        {label}
      </p>
    </div>
  );
};

export default RadialChart;
