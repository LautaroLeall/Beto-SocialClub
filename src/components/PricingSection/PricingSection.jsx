import './PricingSection.css';
import { motion } from 'framer-motion';
import { KeyRound, Users, Star, Shield, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Users size={26} />,
    num: '01',
    title: 'Postulate',
    desc: 'Completá el formulario con tus datos. Es gratis y toma menos de 2 minutos.'
  },
  {
    icon: <Star size={26} />,
    num: '02',
    title: 'Evaluación',
    desc: 'El equipo de Beto Social Club revisará tu postulación y el perfil de la comunidad.'
  },
  {
    icon: <Shield size={26} />,
    num: '03',
    title: 'Selección',
    desc: 'Si fuiste elegido, te contactaremos para confirmar tu membresía y enviarte tu tarjeta.'
  },
  {
    icon: <KeyRound size={26} />,
    num: '04',
    title: 'Bienvenido al Club',
    desc: 'Acceso exclusivo, ingreso VIP y todos los beneficios de ser socio de Beto.'
  },
];

const PricingSection = ({ openModal }) => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-inner">

        {/* Header */}
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="pricing-kicker">Membresía</span>
          <h2>Ser parte del <em>Club</em></h2>
          <div className="pricing-rule" />
          <p className="pricing-lede">
            La membresía es <strong>completamente gratuita</strong> — pero exclusiva.
            <br />
            No se compra, se gana. Postulate y dejá que el club decida.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ translateY: -6 }}
            >
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          className="pricing-cta-wrap"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="pricing-cta-card">
            <div className="cta-badge">
              <KeyRound size={14} />
              Cupos limitados · MMXXV
            </div>
            <h3>¿Estás listo para postularte?</h3>
            <p>Solo los elegidos recibirán su tarjeta Beto Social Club. Sólo gente copada.</p>
            <motion.button
              className="cta-button"
              onClick={openModal}
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(201,162,75,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              Postularme ahora <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
