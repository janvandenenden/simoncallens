"use client";

import { useState, useRef, useCallback } from "react";

const SWIPE_THRESHOLD = 30;

export function useSwipeToggle() {
  const [toggled, setToggled] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - startX.current;
    const deltaY = e.changedTouches[0].clientY - startY.current;

    if (
      Math.abs(deltaX) > SWIPE_THRESHOLD &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      setToggled((prev) => !prev);
    }
  }, []);

  return { toggled, onTouchStart, onTouchEnd };
}
