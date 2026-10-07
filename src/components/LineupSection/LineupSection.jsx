import './LineupSection.css';
import { motion } from 'framer-motion';

const lineup = [
  { time: '01:30', name: 'WARM UP / GUEST DJ', style: 'Cachengue & House' },
  { time: '03:00', name: 'RESIDENT DJ', style: 'Main Event - Full Fiesta' },
  { time: '05:00', name: 'CLOSING SET', style: 'Hasta que salga el sol' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

const LineupSection = () => {
  return (
    <section className="lineup-section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          LA <span className="text-red">CABINA</span>
        </h2>
        <p className="section-subtitle">La música que no vas a escuchar en otro lado.</p>
      </motion.div>

      <motion.div
        className="djs-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
      >
        {lineup.map((dj, index) => (
          <motion.div key={index} className="dj-row" variants={itemVariants}>
            <div className="dj-time">{dj.time}</div>
            <div className="dj-info">
              <h3 className="dj-name">{dj.name}</h3>
              <p className="dj-style">{dj.style}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default LineupSection;
