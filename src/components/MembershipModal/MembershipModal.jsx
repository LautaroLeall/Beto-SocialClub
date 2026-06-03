import { useState, useRef } from 'react';
import './MembershipModal.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, CheckCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ─────────────────────────────────────────────────────────
// Las credenciales se leen desde variables de entorno Vite.
// Localmente: crear un archivo .env con los valores (ver .env.example).
// En Vercel: Settings → Environment Variables → agregar las 3 vars de abajo.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// Si alguna variable no está configurada, se muestra un error amigable
// y el usuario puede usar WhatsApp o Email como alternativa.
const emailjsConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
// ────────────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = '5493816436944';
const EMAIL_DESTINO = 'marianostordeur1@gmail.com';

const INITIAL = { nombre: '', dni: '', telefono: '', email: '', instagram: '', motivacion: '' };

const MembershipModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [sendMethod, setSendMethod] = useState(null);  // 'emailjs' | 'whatsapp' | 'email'
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    if (!formData.nombre || !formData.dni || !formData.telefono || !formData.email) {
      return false;
    }
    return true;
  };

  /* ── Build message text (shared by WA & mailto) ── */
  const buildText = () =>
    `🃏 *POSTULACIÓN — Beto Social Club*\n\n` +
    `*Nombre:* ${formData.nombre}\n` +
    `*DNI:* ${formData.dni}\n` +
    `*Teléfono:* ${formData.telefono}\n` +
    `*Email:* ${formData.email}\n` +
    `*Instagram:* ${formData.instagram || '—'}\n\n` +
    `*¿Por qué quiero ser socio?*\n${formData.motivacion || '—'}`;

  /* ── EmailJS (automático, sin abrir app externa) ── */
  const handleEmailJS = async (e) => {
    e.preventDefault();
    if (!isValid()) { alert('Completá todos los campos obligatorios (*)'); return; }
    if (!emailjsConfigured) {
      setStatus('error');
      return;
    }
    setSendMethod('emailjs');
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...formData, motivacion: formData.motivacion || '—' },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData(INITIAL);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  /* ── WhatsApp (fallback — abre chat con datos prellenados) ── */
  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!isValid()) { alert('Completá todos los campos obligatorios (*)'); return; }
    setSendMethod('whatsapp');
    const encoded = encodeURIComponent(buildText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setStatus('success');
    setFormData(INITIAL);
  };

  /* ── Mailto (fallback — abre cliente de correo) ── */
  const handleEmail = (e) => {
    e.preventDefault();
    if (!isValid()) { alert('Completá todos los campos obligatorios (*)'); return; }
    setSendMethod('email');
    const subject = encodeURIComponent(`Postulación Beto Social Club — ${formData.nombre}`);
    const body = encodeURIComponent(buildText().replace(/\*/g, '').replace(/🃏 /g, ''));
    window.location.href = `mailto:${EMAIL_DESTINO}?subject=${subject}&body=${body}`;
    setStatus('success');
    setFormData(INITIAL);
  };

  const handleCloseSuccess = () => {
    setStatus('idle');
    setSendMethod(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={status === 'sending' ? undefined : onClose}
          />

          {/* Panel */}
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          >
            {/* Close */}
            {status !== 'sending' && (
              <button className="modal-close" onClick={onClose} aria-label="Cerrar">
                <X size={22} />
              </button>
            )}

            {/* ── SUCCESS STATE ── */}
            {status === 'success' && (
              <motion.div
                className="modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={52} className="success-icon" />
                <h2>¡Postulación Enviada!</h2>
                <div className="modal-rule" />
                <p>
                  {sendMethod === 'whatsapp'
                    ? 'Tu mensaje fue enviado por WhatsApp. El equipo de Beto Social Club revisará tu postulación y te contactará si fuiste seleccionado.'
                    : 'Tu postulación fue enviada correctamente. El equipo revisará tu solicitud y te contactará si fuiste seleccionado.'}
                </p>
                <button className="btn-primary-modal" onClick={handleCloseSuccess}>
                  Cerrar
                </button>
              </motion.div>
            )}

            {/* ── ERROR STATE ── */}
            {status === 'error' && (
              <div className="modal-success">
                <h2 style={{ color: 'var(--crimson)' }}>Error al enviar</h2>
                <div className="modal-rule" />
                <p>
                  EmailJS no está configurado aún. Usá WhatsApp o Email para enviar tu postulación de igual forma.
                </p>
                <div className="modal-actions" style={{ marginTop: '24px' }}>
                  <button className="btn-whatsapp" onClick={handleWhatsApp}>
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                  <button className="btn-email" onClick={handleEmail}>
                    <Send size={18} /> Email
                  </button>
                </div>
                <button
                  className="btn-secondary-modal"
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '12px' }}
                >
                  Volver al formulario
                </button>
              </div>
            )}

            {/* ── FORM STATE ── */}
            {(status === 'idle' || status === 'sending') && (
              <>
                <div className="modal-header">
                  <span className="modal-kicker">Beto Social Club</span>
                  <h2>Postulate al <em>Club</em></h2>
                  <div className="modal-rule" />
                  <p>
                    La membresía es <strong>gratuita</strong> — pero exclusiva.
                    Completá el formulario y el equipo de Beto seleccionará a los elegidos.
                  </p>
                </div>

                <form ref={formRef} className="modal-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Nombre Completo <span className="req">*</span></label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>DNI <span className="req">*</span></label>
                      <input
                        type="text"
                        name="dni"
                        placeholder="Número de DNI"
                        required
                        value={formData.dni}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="form-group">
                      <label>Teléfono <span className="req">*</span></label>
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="+54 9 ..."
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email <span className="req">*</span></label>
                      <input
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                      />
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

                  <div className="form-group">
                    <label>¿Por qué querés ser socio? <span className="opt">opcional</span></label>
                    <textarea
                      name="motivacion"
                      placeholder="Contanos un poco sobre vos y por qué querés formar parte de Beto Social Club..."
                      rows={3}
                      value={formData.motivacion}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Send methods */}
                  <div className="send-methods">
                    <p className="send-label">Elegí cómo enviar tu postulación:</p>
                    <div className="modal-actions">
                      <motion.button
                        className="btn-primary-modal"
                        onClick={handleEmailJS}
                        disabled={status === 'sending'}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {status === 'sending' && sendMethod === 'emailjs'
                          ? <><Loader size={18} className="spin" /> Enviando...</>
                          : <><Send size={18} /> Enviar Postulación</>
                        }
                      </motion.button>

                      <div className="or-divider"><span>o</span></div>

                      <div className="alt-buttons">
                        <motion.button
                          className="btn-whatsapp"
                          onClick={handleWhatsApp}
                          disabled={status === 'sending'}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <MessageCircle size={16} /> WhatsApp
                        </motion.button>
                        <motion.button
                          className="btn-email"
                          onClick={handleEmail}
                          disabled={status === 'sending'}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Send size={16} /> Email
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <p className="form-note">
                    * Campos obligatorios. Tu información es confidencial y solo será usada para el proceso de selección.
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
