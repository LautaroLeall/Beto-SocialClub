import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'text'
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si es celular/tablet (pantalla tactil)
    if (window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const tagName = target.tagName.toLowerCase();

      if (tagName === 'a' || tagName === 'button' || target.closest('a') || target.closest('button')) {
        setCursorState('hover');
      } else if (tagName === 'input' || tagName === 'textarea') {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Si es celular o tablet tactil, no renderizamos el cursor para no arruinar la experiencia
  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: '#D62828',
      border: '0px solid transparent',
      mixBlendMode: 'normal'
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: '2px solid #D62828',
      mixBlendMode: 'difference' // Hace que resalte invertido en los botones
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 12,
      width: 4,
      height: 24,
      borderRadius: '2px',
      backgroundColor: '#D62828',
      border: '0px solid transparent',
      mixBlendMode: 'normal'
    }
  };

  return (
    <>
      <style>{`
        body { cursor: none; }
        a, button, input, textarea { cursor: none; }
        .custom-cursor {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 99999;
        }
      `}</style>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorState}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}
