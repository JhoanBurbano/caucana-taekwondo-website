import { useRef } from 'react';
import { useInView } from 'motion/react';

interface UseIntersectionObserverOptions {
  once?: boolean;
  amount?: number;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const ref = useRef(null);
  const { once = true, amount = 0.3 } = options;
  const isInView = useInView(ref, { once, amount });

  return { ref, isInView };
}

