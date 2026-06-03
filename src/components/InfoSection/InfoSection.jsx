import './InfoSection.css';
import { motion } from 'framer-motion';

const InfoSection = () => {
  return (
    <section id="info" className="info-section">
      <div className="container info-container">
        <motion.div
          className="info-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="info-title">
            La Experiencia
            <br />
            <em>Re Corcholis</em>
          </h2>
          <div className="info-rule"></div>
          <p className="info-paragraph">
            Beto Social Club nace como una propuesta exclusiva dentro del mítico espacio de Re Corcholis. No es solo una fiesta, es un punto de encuentro para aquellos que valoran la buena música, la discreción y el servicio de primer nivel.
          </p>
          <p className="info-paragraph">
            Con tu credencial VIP, la puerta deja de ser una barrera para convertirse en una bienvenida cálida. Únete a nuestro círculo y redefine tus noches.
          </p>
        </motion.div>

        <motion.div
          className="info-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="info-image-wrapper">
            <img src="/recor-logo.png" alt="Re Corcholis Experience" className="info-image" />
            <div className="info-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
