"use client";

import { useCallback } from "react";

interface MousePosition {
  x: number; // -1 to 1 (left to right)
  y: number; // -1 to 1 (top to bottom)
}

/**
 * Returns an onMouseMove handler that provides normalized cursor
 * position relative to the element center (-1 to 1 on each axis).
 * Used for card tilt effects.
 */
export default function useMousePosition() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    return { x, y } as MousePosition;
  }, []);

  return handleMouseMove;
}
