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

  return (
    <div
      className={`relative ${className}`}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2" aria-hidden>
          {items.map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-opacity ${
                i === index ? 'opacity-100' : 'opacity-40'
              }`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="rounded-xl px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="rounded-xl px-3 py-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10"
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <motion.ul
          className="flex"
          style={{ x, gap: `${gap}px`, touchAction: 'pan-y' }}
          drag="x"
          dragConstraints={{
            left: -(totalWidth - (itemWidth + gap)),
            right: 0,
          }}
          dragElastic={0.1}
          onDragEnd={(e, info) => {
            // snap based on velocity
            const direction = info.velocity.x < 0 ? 1 : -1;
            const delta = Math.round(info.offset.x / (itemWidth + gap));
            const newIndex = clamp(index - delta + direction);
            scrollTo(newIndex);
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
