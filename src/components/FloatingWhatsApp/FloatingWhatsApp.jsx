import './FloatingWhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const phoneNumber = '5493813386699';
  const message = encodeURIComponent('Hola Beto, quiero saber cómo entrar');
  const wpUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={wpUrl} target="_blank" rel="noreferrer" className="floating-wp">
      <FaWhatsapp size={35} color="#ffffff" />
    </a>
  );
};
export default FloatingWhatsApp;
