'use client';

import { useEffect, useState } from 'react';

interface NumberJumpProps {
  from: number;
  to: number;
  speed?: number; // tổng thời gian chạy animation (ms)
}

export default function NumberJump({ from, to, speed = 800 }: NumberJumpProps) {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    const range = to - from;
    if (range === 0) return;

    const stepTime = 16; // khoảng 60fps
    const steps = Math.ceil(speed / stepTime);
    const increment = range / steps;

    let currentValue = from;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      currentValue += increment;
      if ((increment > 0 && currentValue >= to) || (increment < 0 && currentValue <= to) || stepCount >= steps) {
        setCurrent(to);
        clearInterval(interval);
      } else {
        setCurrent(Math.round(currentValue));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [from, to, speed]);

  return <span>{current}</span>;
}
