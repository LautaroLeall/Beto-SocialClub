import './ChismeSection.css';
import { motion } from 'framer-motion';

const quote = "«¿Vos fuiste a lo de Beto? Un señor de Yerba Buena, sombrero, lentes redondos, habano. Abre su casa, pero no entra cualquiera... Y esta vez se trae Leno.»";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } }
};

const ChismeSection = () => {
  return (
    <section className="chisme-section container">
      <motion.div
        className="chisme-box"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
      >
        <motion.p className="chisme-text" variants={containerVariants}>
          {quote.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word === "Leno.»" ? <span className="text-red glow-text">{word}</span> : word}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          className="chisme-author"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 1, delay: 1.5 } }
          }}
        >
          — Audio reenviado, 02:14 AM
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ChismeSection;
