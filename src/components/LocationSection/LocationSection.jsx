import './LocationSection.css';
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section className="location-section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <h2 className="section-title">EL <span className="text-red">LUGAR</span></h2>
      </motion.div>

      <motion.div
        className="map-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="map-overlay"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033.7586228344217!2d-65.29121854815192!3d-26.81337563800694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d5d0a2bcf7%3A0x6daf6e2ae8e60e81!2sRecorcholis!5e1!3m2!1ses!2sar!4v1791402348422!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
      >
        <a href="https://www.google.com/maps/search/?api=1&query=Recorcholis+Yerba+Buena+Tucumán" target="_blank" rel="noreferrer" className="btn-secondary">
          CÓMO LLEGAR
        </a>
      </motion.div>
    </section>
  );
};
export default LocationSection;
