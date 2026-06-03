import './PricingSection.css';
import { motion } from 'framer-motion';

const PricingSection = ({ openModal }) => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container pricing-container">
        <motion.div 
          className="pricing-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="pricing-header">
            <h3>MEMBRESÍA ANUAL</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">500</span>
              <span className="period">/año</span>
            </div>
          </div>
          
          <ul className="pricing-features">
            <li>
              <b>Acceso Total</b> a todas las instalaciones del club.
            </li>
            <li>
              <b>Invitado VIP</b> (1 acompañante sin cargo).
            </li>
            <li>
              <b>Servicio de Concierge</b> 24/7 para reservas.
            </li>
            <li>
              <b>Kit de Bienvenida</b> con tarjeta física de edición limitada.
            </li>
          </ul>

          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(201, 162, 75, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
          >
            SOLICITAR MEMBRESÍA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
