import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export default function Carousel({
  items,
  renderItem,
  itemWidth,
  gap = 16,
  loop = true,
  autoplay = false,
  autoplayMs = 3000,
  ariaLabel = 'carousel',
  className = '',
}) {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const cardCount = items.length;

  const totalWidth = useMemo(
    () => cardCount * (itemWidth + gap) - gap,
    [cardCount, itemWidth, gap]
  );

  useEffect(() => {
    if (!autoplay) return;

    let controls = setInterval(() => {
      next();
    }, Math.max(autoplayMs, 1200));

    const node = containerRef.current;
    const stop = () => {
      clearInterval(controls);
      controls = null;
    };
    const start = () => {
      if (!controls) {
        controls = setInterval(() => {
          next();
        }, Math.max(autoplayMs, 1200));
      }
    };

    // Pause and resume
    node?.addEventListener('mouseenter', stop);
    node?.addEventListener('mouseleave', start);

    return () => {
      clearInterval(controls);
      node?.removeEventListener('mouseenter', stop);
      node?.removeEventListener('mouseleave', start);
    };
  }, [autoplay, autoplayMs]);
}
