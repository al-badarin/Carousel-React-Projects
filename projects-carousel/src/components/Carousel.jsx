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

  function clamp(i) {
    if (loop) return (i + cardCount) % cardCount;
    return Math.max(0, Math.min(cardCount - 1, i));
  }

  function scrollTo(i) {
    const target = -i * (itemWidth + gap);
    animate(x, target, { type: 'spring', stiffness: 260, damping: 30 });
    setIndex(clamp(i));
  }

  function next() {
    scrollTo(index + 1);
  }
  function prev() {
    scrollTo(index - 1);
  }

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  // Wheel (trackpads)
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (e.deltaX > 0) next();
        else prev();
      }
    };
    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [index]);
}
