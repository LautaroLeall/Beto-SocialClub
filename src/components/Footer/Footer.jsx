import './Footer.css';
import { MessageCircle, Mail } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* Logo */}
        <img
          src="/beto-logo-blanco.png"
          alt="Beto Social Club"
          className="footer-logo"
        />

        {/* Social links del club */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/elclubdebeto/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <FaInstagram size={15} />
            Instagram
          </a>
          <a
            href="https://wa.me/5493816436944"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={15} />
            WhatsApp
          </a>
          <a
            href="mailto:marianostordeur1@gmail.com"
            className="footer-social-link"
            aria-label="Email"
          >
            <Mail size={15} strokeWidth={1.5} />
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Beto Social Club. Todos los derechos reservados.
        </p>

        {/* Desarrollador */}
        <div className="footer-dev">
          <div className="dev-socials">
            <a
              href="https://github.com/LautaroLeall"
              target="_blank"
              rel="noreferrer"
              className="dev-icon"
              aria-label="GitHub de Lautaro Leal"
            >
              <FaGithub size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/lauldp/"
              target="_blank"
              rel="noreferrer"
              className="dev-icon"
              aria-label="LinkedIn de Lautaro Leal"
            >
              <FaLinkedinIn size={13} />
            </a>
          </div>
          <span className="dev-credit">
            Desarrollado por{' '}
            <a
              href="https://wa.me/5493813399463"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-name"
            >
              Lautaro Leal
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
