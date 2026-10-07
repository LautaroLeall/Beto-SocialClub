import { useRef } from 'react';
import './LenoSection.css';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const LenoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // 3D Hover Effect
  const x = useMotionValue(0);
  const yHover = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(yHover);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    yHover.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    yHover.set(0);
  };

  return (
    <section className="leno-section container" ref={containerRef}>
      <motion.div
        className="leno-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <h2 className="section-title">EL <span className="text-red">DEAL</span></h2>
        <p className="section-subtitle">Hamburguesas exclusivas para una noche exclusiva.</p>
      </motion.div>

      <motion.div
        className="leno-card-wrapper"
        style={{ y }}
      >
        <motion.div
          className="leno-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="leno-image-area" style={{ transform: "translateZ(50px)" }}>
            {/* Si tenés la foto real de la hamburguesa, reemplazá este div por una etiqueta img */}
            <div className="burger-placeholder">FOTO BURGER AQUÍ</div>
          </div>

          <div className="leno-info-area" style={{ transform: "translateZ(30px)" }}>
            <img src="/leno-logo.png" alt="Leno Logo" style={{ width: '5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(214,40,40,0.5))', borderRadius: '50%' }} />
            <h3 className="leno-combo-title">COMBO FUNDADOR</h3>
            <p className="leno-combo-desc">1 Burger Leno + Trago de Autor</p>
            <div className="leno-tag">Edición Limitada</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default LenoSection;
