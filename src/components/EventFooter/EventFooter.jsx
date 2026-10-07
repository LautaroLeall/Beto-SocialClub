import './EventFooter.css';
import { motion } from 'framer-motion';

const EventFooter = () => {
  return (
    <motion.footer
      className="event-footer container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <div className="footer-logos">
        <img src="/beto.png" alt="Beto Logo" className="footer-logo logo-beto" />
        <span className="cross">×</span>
        <img src="/leno-logo.png" alt="Leno Logo" className="footer-logo logo-leno" style={{ borderRadius: '50%' }} />
      </div>

      <p className="footer-motto">THE SOCIAL CLUB OF YERBA BUENA</p>

      <div className="footer-producer">
        <p>Producido por</p>
        <img src="/pnrm-logo.png" alt="Panorama Group" style={{ height: '2.5rem', marginTop: '5px' }} />
      </div>

      <div className="footer-links">
        <motion.a whileHover={{ y: -3, color: '#fff' }} href="https://instagram.com/elclubdebeto" target="_blank" rel="noreferrer">@elclubdebeto</motion.a>
        <motion.a whileHover={{ y: -3, color: '#fff' }} href="https://instagram.com/lenoargentina" target="_blank" rel="noreferrer">@lenoargentina</motion.a>
        <motion.a whileHover={{ y: -3, color: '#fff' }} href="https://instagram.com/pnrmgroup.ar" target="_blank" rel="noreferrer">@pnrmgroup.ar</motion.a>
      </div>
    </motion.footer>
  );
};
export default EventFooter;
