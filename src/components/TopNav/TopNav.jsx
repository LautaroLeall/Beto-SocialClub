import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import './TopNav.css';

export default function TopNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="top-nav"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="nav-container">
        <div className="nav-logos">
          <img src="/beto.png" alt="Beto" className="nav-logo logo-beto" />
          <span className="nav-cross">×</span>
          <img src="/leno-logo.png" alt="Leno" className="nav-logo logo-leno" style={{ borderRadius: '50%' }} />
        </div>
        <a href="#tickets" className="nav-btn">TICKETS</a>
      </div>
    </motion.nav>
  );
}
