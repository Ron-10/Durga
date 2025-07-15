import { useState } from 'react';
import { useSpring } from 'framer-motion';

/**
 * useFloatingHoverEffect
 *
 * Returns:
 *   - scale: a framer-motion spring value for scale
 *   - hoverProps: { onMouseEnter, onMouseLeave } for hover state
 *   - className: recommended Tailwind classes for color/shadow transitions
 *
 * Usage:
 *   const { scale, hoverProps, className } = useFloatingHoverEffect();
 *   <motion.div style={{ scale }} {...hoverProps} className={className}>...</motion.div>
 */
export function useFloatingHoverEffect() {
  const [hovered, setHovered] = useState(false);
  const scale = useSpring(hovered ? 1.14 : 1, { stiffness: 150, damping: 12, mass: 0.1 });
  const hoverProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };
  const className =
    'transition-colors duration-50 hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] hover:ring-4 hover:ring-blue-400/40';
  return { scale, hoverProps, className };
} 