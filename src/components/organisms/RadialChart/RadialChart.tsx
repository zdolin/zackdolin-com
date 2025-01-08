import { animate, motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

type RadialChartProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
};

const RadialChart = ({
  percentage,
  size = 150,
  strokeWidth = 4,
  duration = 1.3,
}: RadialChartProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    controls.start({
      strokeDashoffset: circumference - (percentage / 100) * circumference,
      transition: { duration, ease: 'easeInOut' },
    });

    const controlsNumber = animate(0, percentage, {
      duration,
      ease: 'easeInOut',
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });

    return () => {
      controlsNumber.stop();
    };
  }, [percentage, circumference, duration, controls]);

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
          style={{
            transform: `rotate(-90deg)`,
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <div
        style={{
          fontFamily: 'var(--font-general-sans)',
          position: 'absolute',
          fontSize: size / 5,
          fontWeight: '600',
          color: fullConfig.theme.colors.sky['600'],
        }}
      >
        {displayValue}%
      </div>
    </div>
  );
};

export default RadialChart;
