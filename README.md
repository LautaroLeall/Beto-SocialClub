# El Club de Beto × Leno 🎪🍔

![Beto x Leno](public/beto.png)

Una **Landing Page premium y exclusiva** desarrollada para la venta de entradas del evento colaboración entre "El Club de Beto" y "Leno".

Diseñada bajo los estándares de UX/UI modernos (estilo Awwwards), priorizando una experiencia inmersiva, animaciones fluidas, entornos 3D y un diseño "Mobile-First" robusto.

---

## 🚀 Tecnologías y Stack

Este proyecto está construido sobre las herramientas más modernas del ecosistema Frontend para garantizar máxima velocidad y animaciones cinemáticas sin perder rendimiento:

- **Core:** React 19 + Vite (Rendimiento extremo en desarrollo y build).
- **3D & WebGL:** `three.js`, `@react-three/fiber`, `@react-three/drei` (Para el sistema de partículas y físicas).
- **Animaciones:** `framer-motion` (Revelados, layouts y tilt 3D) y `gsap` (Scroll Triggers).
- **Scroll Interactivo:** `@studio-freight/react-lenis` (Para el efecto "smooth scroll" tipo Apple).
- **UI Adicional:** `react-icons`.

---

## ✨ Características Principales

- **Fondo 3D Inmersivo:** Sistema de partículas dinámicas (Brasas / Humo) calculadas en tiempo real en la capa de fondo del Hero.
- **Smooth Scrolling Premium:** Scroll suavizado por inercia física (Lenis), mejorando radicalmente la navegación.
- **Cursor Magnético Personalizado:** Un punto rojo con física de arrastre (drag) que interactúa mediante `mix-blend-mode: difference` al pasar por encima de botones o links.
- **Efectos 3D Parallax & Tilt:** Las tarjetas reaccionan al mouse rotando en los ejes X e Y, otorgando una sensación de profundidad real.
- **Animaciones por Cascada al Scrollear (Scroll Reveal):** Textos con efecto `blur` a foco, tarjetas con físicas de rebote elástico (springs) y elementos escalables en el viewport.
- **SEO y PWA Listo para Producción:** Catch-All routing configurado (`vercel.json`), Web App Manifest nativo, `sitemap.xml`, `robots.txt`, y Open Graph/Twitter Cards activos para enlaces hermosos en WhatsApp e Instagram.
- **Responsividad Absoluta:** Ajustes mediante `clamp()` matemáticos y CSS Flexbox adaptado milimétricamente desde pantallas de 320px hasta 4K.

---

## 📂 Arquitectura del Proyecto (Componentes)

El código está limpiamente modularizado en la carpeta `src/components/` dejando el histórico legado encapsulado como backup:

- `TopNav/`: Barra de navegación tipo glassmorphism reactiva al scroll.
- `HeroSection/` & `Hero3D/`: Portada principal con título interactivo y canvas WebGL.
- `ChismeSection/`: Revelado tipográfico de mensaje oculto simulando un chat infiltrado.
- `LineupSection/`: Grilla de DJs con efectos de resplandor.
- `LenoSection/`: Sección interactiva con tarjetas holográficas/3D para combos exclusivos.
- `TicketsSection/`: Ventas con flips (rotación 3D) y states interactivos de disponibilidad.
- `LocationSection/`: Integración estática y natural de Google Maps.
- `RulesSection/`: Lista de reglas estrictas (+21) con aparición en cascada.
- `EventFooter/`: Pie de página animado con logos originales SVG/PNG.
- `CustomCursor/` & `SmoothScroll/`: Modificadores de la experiencia global del usuario.
- `Tarjeta-Beto/`: Directorio de Legacy/Backup con los componentes de la primera versión.

---

## 🛠️ Instalación y Uso Local

Para levantar este proyecto de forma local en tu máquina:

1.  **Cloná o descargá** el repositorio.
2.  **Ubicación:** Abrí la terminal y asegurate de estar dentro del directorio `Club-Beto`.
3.  **Instalá las dependencias:**
    ```bash
    npm install
    # (En caso de conflictos de dependencias peer, usar: npm install --legacy-peer-deps)
    ```
4.  **Iniciá el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El proyecto estará corriendo en `http://localhost:5173/` (o puerto disponible).

## 📦 Despliegue (Deploy)

El proyecto está preconfigurado para subir sin problemas a plataformas como **Vercel** o **Netlify**.
Para generar los archivos estáticos optimizados manualmente:

```bash
npm run build
```

Generará una carpeta `/dist` completamente minificada, con compresión de activos y un tamaño ligero listo para servir en producción.

---

_Producido por Panorama Group._
