import './TicketsSection.css';
import { motion } from 'framer-motion';

const TicketsSection = () => {
  return (
    <section className="tickets-section container" id="tickets">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <h2 className="section-title">ACCESO <span className="text-red">EXCLUSIVO</span></h2>
      </motion.div>

      <div className="tickets-grid">
        <motion.div
          className="ticket-card"
          initial={{ opacity: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ y: -10 }}
        >
          <div className="ticket-header">
            <h3>TANDA 1</h3>
            <span className="status text-red">AGOTADO</span>
          </div>
          <div className="ticket-price">$15.000</div>
          <p className="ticket-desc">Incluye consumición estándar.</p>
        </motion.div>

        <motion.div
          className="ticket-card active"
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          whileHover={{ y: -10 }}
        >
          <div className="ticket-header">
            <h3>TANDA 2</h3>
            <span className="status" style={{ color: '#25D366' }}>DISPONIBLE</span>
          </div>
          <div className="ticket-price">$20.000</div>
          <p className="ticket-desc">Incluye Combo Leno + Trago.</p>
          <motion.a
            href="#"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            COMPRAR AHORA
          </motion.a>
        </motion.div>
      </div>

      <motion.p
        className="ticket-warning"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        Entradas solo por este medio. No comprometa al personal en puerta.
      </motion.p>
    </section>
  );
};
export default TicketsSection;
