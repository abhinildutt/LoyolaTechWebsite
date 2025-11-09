import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0.1,
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options.threshold, options.root, options.rootMargin]);

  return isIntersecting;
};

