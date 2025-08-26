import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

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
    let controls = setInterval(() => next(), Math.max(autoplayMs, 1200));
    const node = containerRef.current;
    const stop = () => {
      clearInterval(controls);
      controls = null;
    };
    const start = () => {
      if (!controls)
        controls = setInterval(() => next(), Math.max(autoplayMs, 1200));
    };
    node?.addEventListener('mouseenter', stop);
    node?.addEventListener('mouseleave', start);
    return () => {
      clearInterval(controls);
      node?.removeEventListener('mouseenter', stop);
      node?.removeEventListener('mouseleave', start);
    };
  }, [autoplay, autoplayMs]);

  function clamp(i) {
    return loop
      ? (i + cardCount) % cardCount
      : Math.max(0, Math.min(cardCount - 1, i));
  }
  function scrollTo(i) {
    animate(x, -i * (itemWidth + gap), {
      type: 'spring',
      stiffness: 260,
      damping: 30,
    });
    setIndex(clamp(i));
  }
  function next() {
    scrollTo(index + 1);
  }
  function prev() {
    scrollTo(index - 1);
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        e.deltaX > 0 ? next() : prev();
      }
    };
    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [index]);

  return (
    <div
      className={`relative ${className}`}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        {/* Pagination Dots */}
        <div className="flex items-center gap-3" aria-hidden>
          {items.map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out ${
                i === index
                  ? 'bg-indigo-500 scale-125' // Active dot with a larger size
                  : 'bg-neutral-600/60 hover:bg-neutral-400'
              }`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Previous and Next Buttons */}
        {/* Previous and Next Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            aria-label="Next"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Track */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.ul
          className="flex list-none"
          style={{ x, gap: `${gap}px`, touchAction: 'pan-y' }}
          drag="x"
          dragConstraints={{
            left: -(totalWidth - (itemWidth + gap)),
            right: 0,
          }}
          dragElastic={0.1}
          onDragEnd={(e, info) => {
            const direction = info.velocity.x < 0 ? 1 : -1;
            const delta = Math.round(info.offset.x / (itemWidth + gap));
            scrollTo(clamp(index - delta + direction));
          }}
          role="group"
          aria-roledescription="carousel track"
        >
          {items.map((item, i) => (
            <li
              key={i}
              className="shrink-0"
              style={{ width: itemWidth }}
              aria-label={`Slide ${i + 1} of ${items.length}`}
            >
              {renderItem(item, i)}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
