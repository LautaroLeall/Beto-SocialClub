import './CardSection.css';
import FlippableCreditCard from '../FlippableCreditCard/FlippableCreditCard';
import { motion } from 'framer-motion';

const CardSection = () => {
  return (
    <section id="card" className="card-section">
      <div className="card-section-inner">
        <motion.div
          className="card-section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="card-section-kicker">La Credencial</span>
          <h2 className="card-section-title">Tu Tarjeta <em>VIP</em></h2>
          <div className="card-section-rule"></div>
          <p className="card-section-desc">
            Diseñada para quienes pertenecen. Cada detalle, desde el guilloché hasta el borde dorado,
            es una declaración de estatus y exclusividad.
          </p>
        </motion.div>

        <motion.div
          className="card-section-stage"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <FlippableCreditCard />
        </motion.div>
      </div>
    </section>
  );
};

export default CardSection;
