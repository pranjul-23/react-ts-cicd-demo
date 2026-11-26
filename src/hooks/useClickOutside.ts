import { useEffect, type RefObject } from 'react';
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void
) {
  useEffect(() => {
    // if (!open) return;
    const handleOutsideClick = (event: PointerEvent) => {
      const el = event.target as Node | null;
      if (ref.current && el && !ref.current?.contains(el)) {
        callback();
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, [ref, callback]);
}
