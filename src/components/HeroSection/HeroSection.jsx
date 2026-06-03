import './HeroSection.css';
import { motion } from 'framer-motion';

const HeroSection = ({ openModal }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="hero-content">

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="hero-badge-dot"></span>
          Membresías Disponibles · MMXXV
        </motion.div>

        <motion.div
          className="hero-logo-wrap"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <img src="/beto-logo-blanco.png" alt="Beto Social Club" className="hero-logo" />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Social <em>Club</em>
        </motion.h1>

        <motion.div
          className="hero-ornament"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="ornament-line"></span>
          <svg className="ornament-key" viewBox="0 0 40 64" fill="none">
            <circle cx="20" cy="13" r="9.6" stroke="#c9a24b" strokeWidth="2.2" />
            <circle cx="20" cy="13" r="3.6" fill="#7a0e16" stroke="#c9a24b" strokeWidth="1.5" />
            <rect x="18.4" y="21" width="3.2" height="38" rx="1.3" fill="#c9a24b" />
            <rect x="21.6" y="49" width="8" height="2.7" rx="1.1" fill="#c9a24b" />
            <rect x="21.6" y="54.5" width="5.4" height="2.7" rx="1.1" fill="#c9a24b" />
          </svg>
          <span className="ornament-line r"></span>
        </motion.div>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          Una tarjeta de socio que no se muestra: se reconoce.
          <br />
          Pertenencia, estatus y discreción — en Re Corcholis.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="btn-primary" onClick={openModal}>
            Solicitar Membresía
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('card')}>
            Ver la Tarjeta
          </button>
        </motion.div>

        <motion.button
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          onClick={() => scrollToSection('card')}
        >
          <span className="scroll-dot"></span>
          Desliza para explorar
        </motion.button>

      </div>
    </section>
  );
};

export default HeroSection;
