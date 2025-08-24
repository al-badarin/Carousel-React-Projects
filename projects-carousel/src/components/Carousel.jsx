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
}
