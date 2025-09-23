"use client"

// components/TypingText.tsx
import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // typing speed in ms
}

export default function TypingText({ text, speed = 50 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="text-sm md:text-base text-gray-400 my-4">
      <h5 className="inline">{displayText}</h5>
      <span className="animate-blink">|</span>
      <style jsx>{`
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
