'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface MotionWrapperProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight';
  duration?: number;
  delay?: number;
  triggerOnce?: boolean; // chỉ chạy 1 lần khi scroll vào
}

const variantsMap: Record<string, Variants> = {
  fadeUp: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 20, y: 0 }, visible: { opacity: 1, x: 0, y: -20 } },
};

export default function MotionWrapper({
  children,
  animation = 'fadeUp',
  duration = 0.8,
  delay = 0,
  triggerOnce = true,
}: MotionWrapperProps) {
  const variant = variantsMap[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce }}
      variants={variant}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
