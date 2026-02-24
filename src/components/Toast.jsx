import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Toast = ({ message, onClose }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide Down
      gsap.fromTo(toastRef.current,
        { y: -100, opacity: 0 },
        { y: 20, opacity: 1, duration: 0.5, ease: "power3.out" }
      );

      // Auto close
      gsap.to(toastRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        delay: 3,
        ease: "power3.in",
        onComplete: onClose
      });
    });

    return () => ctx.revert();
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] flex justify-center pointer-events-none">
      <div
        ref={toastRef}
        className="bg-zinc-800 text-white px-6 py-3 rounded-full shadow-lg border border-zinc-700 flex items-center gap-3 backdrop-blur-md bg-opacity-90"
      >
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="font-semibold text-sm">{message}</span>
      </div>
    </div>
  );
};

export default Toast;