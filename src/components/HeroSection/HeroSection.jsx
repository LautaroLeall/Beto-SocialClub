import './HeroSection.css';
import { motion } from 'framer-motion';
import Hero3D from '../Hero3D/Hero3D';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="curtain"></div>

      {/* 3D Embers Background */}
      <Hero3D />

      <div className="hero-container container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-badge"
        >
          THE SOCIAL CLUB OF YERBA BUENA
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like ease
        >
          BETO SE TRAJO <br /><span className="text-red glow-text">LENO</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          DOMINGO 11 <br />
          RECORCHOLIS · YERBA BUENA <br />
          +21
        </motion.p>
      </div>

      {/* Degradado suave para transición a la siguiente sección */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};
export default HeroSection;
