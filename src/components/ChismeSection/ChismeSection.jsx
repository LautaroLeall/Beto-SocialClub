import './ChismeSection.css';
import { motion } from 'framer-motion';

const quote = "«¿Vos fuiste a lo de Beto? Un señor de Yerba Buena, sombrero, lentes redondos, habano. Abre su casa, pero no entra cualquiera... Y esta vez se trae Leno.»";

const ChismeSection = () => {
  return (
    <section className="chisme-section container">
      <motion.div
        className="chisme-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <p className="chisme-text">
          {quote.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ display: "inline-block", marginRight: "8px" }}
            >
              {word === "Leno.»" ? <span className="text-red glow-text">{word}</span> : word}
            </motion.span>
          ))}
        </p>
        <motion.div
          className="chisme-author"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
        >
          — Audio reenviado, 02:14 AM
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ChismeSection;
