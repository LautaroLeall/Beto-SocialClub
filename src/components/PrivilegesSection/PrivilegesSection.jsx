import './PrivilegesSection.css';
import { motion } from 'framer-motion';
import { Crown, GlassWater, ShieldCheck, KeyRound } from 'lucide-react';

const privileges = [
  {
    icon: <KeyRound size={28} className="privilege-icon" />,
    title: 'ACCESO EXCLUSIVO',
    desc: 'Ingreso directo sin filas. Reconocimiento inmediato en puerta para ti y un acompañante.'
  },
  {
    icon: <Crown size={28} className="privilege-icon" />,
    title: 'ÁREA VIP',
    desc: 'Acceso garantizado a los sectores más exclusivos y reservados del club.'
  },
  {
    icon: <GlassWater size={28} className="privilege-icon" />,
    title: 'SERVICIO PREMIUM',
    desc: 'Atención personalizada, botellas de cortesía mensuales y prioridad en reservas.'
  },
  {
    icon: <ShieldCheck size={28} className="privilege-icon" />,
    title: 'EVENTOS PRIVADOS',
    desc: 'Invitaciones a fiestas secretas y degustaciones a puerta cerrada.'
  }
];

const PrivilegesSection = () => {
  return (
    <section id="privileges" className="spec">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beneficios del <em>Socio VIP</em>
        </motion.h2>
        <div className="spec-rule"></div>
        <motion.p
          className="lede"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          La tarjeta Beto Social Club no es para cualquiera. Es una llave a una experiencia superior donde la discreción y el estatus son primordiales.
        </motion.p>

        <div className="grid">
          {privileges.map((item, index) => (
            <motion.div
              className="panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivilegesSection;
