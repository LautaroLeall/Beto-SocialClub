import { useState } from 'react';
import './ListSection.css';
import { motion, AnimatePresence } from 'framer-motion';

const ListSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    instagram: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error al tipear
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.dni.trim()) {
      newErrors.dni = "El DNI es obligatorio.";
    } else if (!/^\d{7,9}$/.test(formData.dni.replace(/\./g, ''))) {
      newErrors.dni = "Ingresá un DNI válido.";
    }
    if (!formData.instagram.trim()) {
      newErrors.instagram = "El usuario es obligatorio.";
    } else if (!formData.instagram.startsWith('@')) {
      newErrors.instagram = "Debe empezar con @";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const phoneNumber = '5493813386699';
      const text = `Hola Beto! Quiero anotarme en la lista para el Domingo 11.\n\n*Nombre:* ${formData.nombre}\n*DNI:* ${formData.dni}\n*Instagram:* ${formData.instagram}`;
      const wpUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      window.open(wpUrl, '_blank');
    }
  };

  return (
    <section className="list-section container" id="lista">
      <motion.div
        className="list-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="list-header">
          <h2>FREE <span className="text-red">PASS</span></h2>
          <p>Anotate en la lista oficial. Cupos limitados.</p>
        </div>

        <form className="list-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`form-input ${errors.nombre ? 'error' : ''}`}
              placeholder="Ej: Lionel Messi"
            />
            <AnimatePresence>
              {errors.nombre && (
                <motion.span
                  className="error-message"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {errors.nombre}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="form-group">
            <label>DNI</label>
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              className={`form-input ${errors.dni ? 'error' : ''}`}
              placeholder="Ej: 38.123.456"
            />
            <AnimatePresence>
              {errors.dni && (
                <motion.span
                  className="error-message"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {errors.dni}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="form-group">
            <label>Instagram</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className={`form-input ${errors.instagram ? 'error' : ''}`}
              placeholder="Ej: @leomessi"
            />
            <AnimatePresence>
              {errors.instagram && (
                <motion.span
                  className="error-message"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {errors.instagram}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            className="btn-primary submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CONFIRMAR
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ListSection;
