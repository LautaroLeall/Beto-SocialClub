import { useState } from 'react';
import './MembershipModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail } from 'lucide-react';

const MembershipModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    telefono: '',
    email: '',
    instagram: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMessageText = () => {
    return `Hola Beto Social Club, quiero solicitar mi tarjeta VIP.%0A%0A*Mis Datos:*%0A- Nombre: ${formData.nombre}%0A- DNI: ${formData.dni}%0A- Teléfono: ${formData.telefono}%0A- Email: ${formData.email}%0A- Instagram: ${formData.instagram || 'No provisto'}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.dni || !formData.telefono || !formData.email) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    const text = getMessageText();
    const url = `https://wa.me/5493816436944?text=${text}`;
    window.open(url, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.dni || !formData.telefono || !formData.email) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    const subject = `Solicitud de Membresía VIP - ${formData.nombre}`;
    const body = `Hola Beto Social Club,%0D%0A%0D%0AQuiero solicitar mi tarjeta VIP.%0D%0A%0D%0AMis Datos:%0D%0A- Nombre: ${formData.nombre}%0D%0A- DNI: ${formData.dni}%0D%0A- Teléfono: ${formData.telefono}%0D%0A- Email: ${formData.email}%0D%0A- Instagram: ${formData.instagram || 'No provisto'}%0D%0A%0D%0ASaludos cordiales.`;
    const url = `mailto:marianostordeur1@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          ></motion.div>

          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2>Solicitud de <em>Membresía</em></h2>
              <div className="modal-rule"></div>
              <p>Completa tus datos para iniciar el proceso de admisión. Te contactaremos a la brevedad.</p>
            </div>

            <form className="modal-form">
              <div className="form-group">
                <input type="text" name="nombre" placeholder="Nombre Completo *" required value={formData.nombre} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="dni" placeholder="DNI *" required value={formData.dni} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="tel" name="telefono" placeholder="Teléfono *" required value={formData.telefono} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email *" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="instagram" placeholder="Instagram (Opcional)" value={formData.instagram} onChange={handleChange} />
              </div>

              <div className="modal-actions">
                <button className="btn-whatsapp" onClick={handleWhatsApp}>
                  <Send size={18} /> Enviar por WhatsApp
                </button>
                <button className="btn-email" onClick={handleEmail}>
                  <Mail size={18} /> Enviar por Email
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MembershipModal;
