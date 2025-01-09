import { animate, motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

type RadialChartProps = {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
};

const RadialChart = ({
  percentage,
  label,
  size = 120,
  strokeWidth = 4,
  duration = 1.2,
  delay = 0,
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
    <div className="flex w-full flex-col items-center">
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
            stroke={fullConfig.theme.colors.gray['300']}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            className="origin-center -rotate-90"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={fullConfig.theme.colors.sky['600']}
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
