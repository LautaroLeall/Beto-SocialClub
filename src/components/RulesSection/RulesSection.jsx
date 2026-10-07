import './RulesSection.css';
import { motion } from 'framer-motion';

const rules = [
  "Evento +18 VIP +21. Presentar DNI físico o en Mi Argentina.",
  "La casa se reserva el derecho de admisión y permanencia.",
  "Sin devolución salvo suspensión del evento.",
  "Previa Beto x Leno solo por lista."
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const RulesSection = () => {
  return (
    <section className="rules-section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <h2 className="section-title">CÓDIGOS</h2>
      </motion.div>

      <motion.ul
        className="rules-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
      >
        {rules.map((rule, index) => (
          <motion.li key={index} variants={itemVariants}>
            {rule}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
export default RulesSection;
