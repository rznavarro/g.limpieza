import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports fine pointer and user does not prefer reduced motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest('a[href*="wa.me"]')) {
          setCursorText('WHATSAPP');
          setIsHoveringInteractive(true);
        } else if (target.closest('img') || target.closest('.group')) {
          setCursorText('VER');
          setIsHoveringInteractive(true);
        } else if (target.closest('button')) {
          setCursorText('+');
          setIsHoveringInteractive(true);
        } else if (target.closest('a')) {
          setCursorText('IR');
          setIsHoveringInteractive(true);
        } else {
          setCursorText('');
          setIsHoveringInteractive(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.14);
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.14);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 41}px, ${
          currentPos.current.y - 41
        }px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="cursor-circle fixed top-0 left-0 w-[82px] h-[82px] rounded-full pointer-events-none z-[200] flex items-center justify-center transition-opacity duration-200 border border-[#1aa6c8]/60 bg-[#0d1114]/25 backdrop-blur-[1px] mix-blend-difference"
      style={{
        opacity: currentPos.current.x < 0 ? 0 : isHoveringInteractive ? 1 : 0.45,
        transform: 'translate3d(-100px, -100px, 0)',
      }}
      aria-hidden="true"
    >
      {cursorText && (
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#d7ff45] uppercase">
          {cursorText}
        </span>
      )}
    </div>
  );
}
