import './GallerySection.css';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800", // Club vibe
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800", // Drinks
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800", // Event
  "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800", // Premium atmosphere
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.h2
          className="gallery-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nuestras <em>Noches</em>
        </motion.h2>
        <p className="gallery-subtitle">
          Un vistazo a la atmósfera única de Beto Social Club.
        </p>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={src} alt={`Nightclub vibe ${index + 1}`} />
              <div className="gallery-overlay">
                <span>BETO.</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
