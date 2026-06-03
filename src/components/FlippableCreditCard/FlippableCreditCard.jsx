import { useState } from 'react';
import './FlippableCreditCard.css';
import { motion } from 'framer-motion';

const FlippableCreditCard = () => {
  const [setIsFlipped] = useState(false);

  return (
    <div className="cards-stage">

      {/* ============ FRONT ============ */}
      <div className="card-col">
        <motion.div
          className="card front"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsFlipped(false)}
        >
          <div className="field"></div>
          <div className="guilloche"></div>
          <div className="border"></div>
          <div className="gleam"></div>
          <div className="inner">
            <div className="tier">VIP</div>
            <div className="est">MMXXV</div>

            <div className="topflourish">
              <span className="line"></span>
              {/* skeleton key */}
              <svg className="key" viewBox="0 0 40 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="13" r="9.6" stroke="#c9a24b" strokeWidth="2.2" />
                <circle cx="20" cy="13" r="3.6" fill="#7a0e16" stroke="#c9a24b" strokeWidth="1.5" />
                <rect x="18.4" y="21" width="3.2" height="38" rx="1.3" fill="#c9a24b" />
                <rect x="21.6" y="49" width="8" height="2.7" rx="1.1" fill="#c9a24b" />
                <rect x="21.6" y="54.5" width="5.4" height="2.7" rx="1.1" fill="#c9a24b" />
              </svg>
              <span className="line r"></span>
            </div>

            <img className="crest" src="/beto-logo-blanco.png" alt="Beto Social Club" />

            <div className="qualifier">
              <b>Social Club</b> · Member
            </div>

            <div className="foot">
              <svg className="flower" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" fill="#c9a24b" />
                <circle cx="12" cy="5.5" r="2.2" fill="#c9a24b" />
                <circle cx="12" cy="18.5" r="2.2" fill="#c9a24b" />
                <circle cx="5.5" cy="12" r="2.2" fill="#c9a24b" />
                <circle cx="18.5" cy="12" r="2.2" fill="#c9a24b" />
                <circle cx="7.5" cy="7.5" r="1.6" fill="#c9a24b" />
                <circle cx="16.5" cy="16.5" r="1.6" fill="#c9a24b" />
                <circle cx="16.5" cy="7.5" r="1.6" fill="#c9a24b" />
                <circle cx="7.5" cy="16.5" r="1.6" fill="#c9a24b" />
              </svg>
              Sólo Gente Copada
            </div>
          </div>
        </motion.div>
        <div className="face-label">F R E N T E</div>
      </div>

      {/* ============ BACK ============ */}
      <div className="card-col">
        <motion.div
          className="card back"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsFlipped(true)}
        >
          <div className="field"></div>
          <div className="border"></div>
          <div className="watermark">
            <img src="/recor-logo.png" alt="Re Corcholis watermark" />
          </div>

          <div className="inner">
            <div className="topbar">
              <span className="b">Beto.</span>
              <span className="n">Socio Fundador</span>
            </div>

            <div className="stripe">
              <span>A C C E S O &nbsp;·&nbsp; T A P &nbsp;T O &nbsp;E N T E R</span>
            </div>

            <div className="body">
              <div className="data">
                <div className="dline">
                  <span className="dlabel">Socio</span>
                  <span className="dval script">Carlos A. Stordeur</span>
                </div>
                <div className="dline">
                  <span className="dlabel">N.º de Miembro</span>
                  <span className="dval">007 / 500</span>
                </div>
                <div className="dline">
                  <span className="dlabel">Categoría</span>
                  <span className="dval">Miembro Fundador</span>
                </div>
                <div className="dline">
                  <span className="dlabel">Válida Hasta</span>
                  <span className="dval">Vitalicia</span>
                </div>
              </div>

              <div className="sigwrap">
                <div className="sigpanel">
                  <small>F I R M A &nbsp;·&nbsp; S I G N A T U R E</small>
                </div>
                <div className="cobrand">
                  <em>una experiencia<br />de la casa</em>
                  <img src="/recor-logo.png" alt="Re Corcholis" />
                </div>
              </div>
            </div>

            <div className="terms">
              <svg className="flower" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" fill="#c9a24b" />
                <circle cx="12" cy="5.5" r="2.2" fill="#c9a24b" />
                <circle cx="12" cy="18.5" r="2.2" fill="#c9a24b" />
                <circle cx="5.5" cy="12" r="2.2" fill="#c9a24b" />
                <circle cx="18.5" cy="12" r="2.2" fill="#c9a24b" />
              </svg>
              Personal e intransferible. La casa se reserva el derecho de admisión. Presentar en puerta.
            </div>
          </div>
        </motion.div>
        <div className="face-label">D O R S O</div>
      </div>

    </div>
  );
};

export default FlippableCreditCard;
