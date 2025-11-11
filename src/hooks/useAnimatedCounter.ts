import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export const useAnimatedCounter = (
  ref: React.RefObject<HTMLElement>,
  end: number,
  duration: number = 2000
) => {
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(startValue + (end - startValue) * easeOutProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return count;
};

