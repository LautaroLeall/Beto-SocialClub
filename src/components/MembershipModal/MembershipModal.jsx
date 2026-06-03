import { useState, useRef } from 'react';
import './MembershipModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, CheckCircle, Loader, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { sileo } from 'sileo';

// ─── EmailJS config ────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';
const emailjsConfigured   = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
// ──────────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = '5493816436944';
const EMAIL_DESTINO   = 'marianostordeur1@gmail.com';
const INITIAL = { nombre: '', dni: '', telefono: '', email: '', instagram: '', motivacion: '' };

/* ── Validation helper ── */
const getMissingFields = (data) => {
  const missing = [];
  if (!data.nombre)   missing.push('Nombre Completo');
  if (!data.dni)      missing.push('DNI');
  if (!data.telefono) missing.push('Teléfono');
  if (!data.email)    missing.push('Email');
  return missing;
};

const MembershipModal = ({ isOpen, onClose }) => {
  const [formData, setFormData]     = useState(INITIAL);
  const [status, setStatus]         = useState('idle'); // idle | sending | success | error
  const [sendMethod, setSendMethod] = useState(null);
  const [touched, setTouched]       = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const isFieldError = (name) =>
    touched[name] && ['nombre','dni','telefono','email'].includes(name) && !formData[name];

  /* ── Build WA / mailto text ── */
  const buildText = () =>
    `*POSTULACION — Beto Social Club*\n\n` +
    `*Nombre:* ${formData.nombre}\n` +
    `*DNI:* ${formData.dni}\n` +
    `*Telefono:* ${formData.telefono}\n` +
    `*Email:* ${formData.email}\n` +
    `*Instagram:* ${formData.instagram || '-'}\n\n` +
    `*Por que quiero ser socio?*\n${formData.motivacion || '-'}`;

  /* ── Validate & show toast if missing ── */
  const validate = () => {
    const missing = getMissingFields(formData);
    if (missing.length > 0) {
      // Mark all required fields as touched to show inline errors
      setTouched({ nombre: true, dni: true, telefono: true, email: true });
      sileo.error({
        title: 'Faltan datos obligatorios',
        description: `Completá: ${missing.join(', ')}`,
        duration: 4000,
      });
      return false;
    }
    return true;
  };

  /* ── EmailJS handler ── */
  const handleEmailJS = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!emailjsConfigured) {
      sileo.error({
        title: 'EmailJS no configurado',
        description: 'Usá WhatsApp o Email como alternativa.',
        duration: 5000,
      });
      return;
    }
    setSendMethod('emailjs');
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...formData, motivacion: formData.motivacion || '-' },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData(INITIAL);
      setTouched({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      sileo.error({
        title: 'Error al enviar',
        description: 'Intenta de nuevo o usá WhatsApp.',
        duration: 5000,
      });
    }
  };

  /* ── WhatsApp handler ── */
  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSendMethod('whatsapp');
    const encoded = encodeURIComponent(buildText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    sileo.success({
      title: 'Abriendo WhatsApp',
      description: 'Tu postulación está lista para enviar.',
      duration: 3500,
    });
    setStatus('success');
    setFormData(INITIAL);
    setTouched({});
  };

  /* ── Email handler ── */
  const handleEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSendMethod('email');
    const subject = encodeURIComponent(`Postulacion Beto Social Club — ${formData.nombre}`);
    const body    = encodeURIComponent(buildText().replace(/\*/g, ''));
    window.open(`mailto:${EMAIL_DESTINO}?subject=${subject}&body=${body}`, '_blank');
    sileo.success({
      title: 'Abriendo cliente de email',
      description: 'Revisa tu bandeja de salida.',
      duration: 3500,
    });
    setStatus('success');
    setFormData(INITIAL);
    setTouched({});
  };

  const handleClose = () => {
    if (status === 'sending') return;
    setStatus('idle');
    setSendMethod(null);
    setTouched({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            {/* Close */}
            {status !== 'sending' && (
              <button className="modal-close" onClick={handleClose} aria-label="Cerrar">
                <X size={18} />
              </button>
            )}

            {/* ══ SUCCESS ══ */}
            {status === 'success' && (
              <motion.div
                className="modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="success-icon" />
                <h2>Postulación Enviada</h2>
                <div className="modal-rule" />
                <p>
                  {sendMethod === 'whatsapp'
                    ? 'Tu mensaje fue enviado por WhatsApp. El equipo revisará tu postulación y te contactará si fuiste seleccionado.'
                    : 'Tu postulación fue enviada correctamente. El equipo te contactará si fuiste seleccionado.'}
                </p>
                <button className="btn-primary-modal" onClick={handleClose}>
                  Cerrar
                </button>
              </motion.div>
            )}

            {/* ══ FORM ══ */}
            {status !== 'success' && (
              <>
                <div className="modal-header">
                  <span className="modal-kicker">Beto Social Club</span>
                  <h2>Postulate al <em>Club</em></h2>
                  <div className="modal-rule" />
                  <p>
                    Membresía <strong>gratuita</strong> — pero exclusiva.
                    Completá el formulario y el equipo seleccionará a los elegidos.
                  </p>
                </div>

                <form ref={formRef} className="modal-form" onSubmit={(e) => e.preventDefault()} noValidate>

                  {/* Nombre */}
                  <div className={`form-group ${isFieldError('nombre') ? 'has-error' : ''}`}>
                    <label>Nombre Completo <span className="req">*</span></label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === 'sending'}
                    />
                    {isFieldError('nombre') && <span className="field-error"><AlertCircle size={12} /> Requerido</span>}
                  </div>

                  {/* DNI + Teléfono */}
                  <div className="form-row">
                    <div className={`form-group ${isFieldError('dni') ? 'has-error' : ''}`}>
                      <label>DNI <span className="req">*</span></label>
                      <input
                        type="text"
                        name="dni"
                        placeholder="Número de DNI"
                        value={formData.dni}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === 'sending'}
                      />
                      {isFieldError('dni') && <span className="field-error"><AlertCircle size={12} /> Requerido</span>}
                    </div>
                    <div className={`form-group ${isFieldError('telefono') ? 'has-error' : ''}`}>
                      <label>Teléfono <span className="req">*</span></label>
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="+54 9 ..."
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === 'sending'}
                      />
                      {isFieldError('telefono') && <span className="field-error"><AlertCircle size={12} /> Requerido</span>}
                    </div>
                  </div>

                  {/* Email + Instagram */}
                  <div className="form-row">
                    <div className={`form-group ${isFieldError('email') ? 'has-error' : ''}`}>
                      <label>Email <span className="req">*</span></label>
                      <input
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === 'sending'}
                      />
                      {isFieldError('email') && <span className="field-error"><AlertCircle size={12} /> Requerido</span>}
                    </div>
                    <div className="form-group">
                      <label>Instagram <span className="opt">opcional</span></label>
                      <input
                        type="text"
                        name="instagram"
                        placeholder="@usuario"
                        value={formData.instagram}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  {/* Motivación */}
                  <div className="form-group">
                    <label>Por qué querés ser socio <span className="opt">opcional</span></label>
                    <textarea
                      name="motivacion"
                      placeholder="Contanos un poco sobre vos..."
                      rows={3}
                      value={formData.motivacion}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* ── Send actions ── */}
                  <div className="send-methods">
                    <p className="send-label">Elegí cómo enviar:</p>

                    {/* Primary */}
                    <motion.button
                      className="btn-primary-modal"
                      onClick={handleEmailJS}
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'sending' && sendMethod === 'emailjs'
                        ? <><Loader size={16} className="spin" /> Enviando...</>
                        : <><Send size={16} /> Enviar Postulación</>
                      }
                    </motion.button>

                    <div className="or-divider"><span>o también</span></div>

                    {/* Alt row */}
                    <div className="alt-buttons">
                      <motion.button
                        className="btn-whatsapp"
                        onClick={handleWhatsApp}
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaWhatsapp size={15} /> WhatsApp
                      </motion.button>
                      <motion.button
                        className="btn-email"
                        onClick={handleEmail}
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Send size={14} /> Email
                      </motion.button>
                    </div>
                  </div>

                  <p className="form-note">
                    * Campos obligatorios. Tu información es confidencial.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MembershipModal;
