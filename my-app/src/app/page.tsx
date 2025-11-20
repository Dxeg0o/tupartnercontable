import "./page.css";

const navigationLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#proceso", label: "Cómo funciona" },
];

const features = [
  {
    title: "Diseño enfocado en conversiones",
    description:
      "Estructura clara, jerarquía visual y llamados a la acción visibles para maximizar cada visita.",
  },
  {
    title: "Experiencia de usuario impecable",
    description:
      "Microinteracciones, legibilidad superior y tiempos de carga optimizados para generar confianza.",
  },
  {
    title: "Mensajes que conectan",
    description:
      "Propuesta de valor directa, prueba social y argumentos centrados en los dolores reales de tu audiencia.",
  },
];

const steps = [
  {
    title: "Descubrimiento estratégico",
    description:
      "Analizamos objetivos, audiencia y datos existentes para definir la narrativa y las métricas de éxito.",
  },
  {
    title: "Prototipo y validación",
    description:
      "Creamos el layout, testeamos la jerarquía de información y ajustamos el flujo hasta que convierta.",
  },
  {
    title: "Entrega y optimización",
    description:
      "Implementamos el diseño final, configuramos medición y ejecutamos mejoras continuas basadas en datos.",
  },
];

const testimonials = [
  {
    quote:
      "Duplicamos nuestra tasa de conversión en menos de dos meses. El diseño guía al usuario sin fricción.",
    name: "María Torres",
    role: "CMO en SaaS B2B",
  },
  {
    quote:
      "La claridad del mensaje y la velocidad del sitio hicieron que los leads calificados crecieran semana a semana.",
    name: "Luis Fernández",
    role: "Director de Ventas",
  },
  {
    quote:
      "El enfoque CRO de la landing redujo el costo por adquisición y elevó el ticket promedio.",
    name: "Andrea Ríos",
    role: "Fundadora eCommerce",
  },
];

export default function Home() {
  return (
    <div className="page-container">
      <header className="hero" id="inicio">
        <nav className="navigation">
          <div className="logo">Crecemos</div>
          <div className="nav-links">
            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="cta-button" href="#cta-final">
            Agenda una demo
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Landing page moderna y persuasiva</p>
            <h1>Convierte más con una experiencia diseñada para decidir</h1>
            <p className="hero-description">
              Creamos interfaces claras, acciones visibles y mensajes alineados a las
              necesidades de tus usuarios. Diseños listos para lanzar, medir y
              optimizar.
            </p>
            <div className="hero-actions">
              <a className="cta-button" href="#beneficios">
                Ver beneficios
              </a>
              <a className="secondary-link" href="#proceso">
                Conoce el proceso
              </a>
            </div>
            <div className="badges">
              <span className="badge">+40 proyectos lanzados</span>
              <span className="badge">Especialistas en CRO</span>
              <span className="badge">Respaldo UX/UI senior</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <p className="card-label">Resultados en semanas</p>
              <span className="status">En producción</span>
            </div>
            <h2>Diseño, copywriting y optimización continua</h2>
            <ul className="card-list">
              <li>
                <span className="dot" />
                Arquitectura enfocada en decisiones clave.
              </li>
              <li>
                <span className="dot" />
                Contenido persuasivo alineado a etapas del funnel.
              </li>
              <li>
                <span className="dot" />
                Secciones con prueba social y propuesta clara.
              </li>
              <li>
                <span className="dot" />
                Ajustes guiados por datos y analítica integrada.
              </li>
            </ul>
            <a className="cta-button full" href="#cta-final">
              Planifica tu lanzamiento
            </a>
          </div>
        </div>
      </header>

      <section className="section features" id="beneficios">
        <div className="section-heading">
          <p className="eyebrow">Beneficios</p>
          <h2>Todo lo que necesitas para captar leads listos para comprar</h2>
          <p className="section-description">
            Unimos estrategia, UX y contenido para entregar una experiencia convincente
            desde el primer scroll.
          </p>
        </div>
        <div className="cards-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section subtle" id="proceso">
        <div className="section-heading">
          <p className="eyebrow">Proceso</p>
          <h2>Un flujo claro para lanzar rápido y medir mejor</h2>
          <p className="section-description">
            Colaboramos contigo en cada paso para asegurar que el diseño responda a
            objetivos concretos y pueda escalar.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <div className="step-number">0{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="testimonios">
        <div className="section-heading">
          <p className="eyebrow">Testimonios</p>
          <h2>Prueba social que respalda tus resultados</h2>
          <p className="section-description">
            Historias reales de equipos que aumentaron conversiones con un diseño
            estratégico y centrado en el usuario.
          </p>
        </div>
        <div className="cards-grid testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card testimonial-card">
              <p className="quote">“{testimonial.quote}”</p>
              <div className="author">
                <div className="avatar" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-final" id="cta-final">
        <div className="cta-content">
          <div>
            <p className="eyebrow">Listo para avanzar</p>
            <h2>Lanza tu landing en tiempo récord</h2>
            <p className="section-description">
              Agenda una sesión y recibe un plan de trabajo con entregables, fechas y
              métricas. Sin promesas vacías.
            </p>
          </div>
          <div className="cta-actions">
            <a className="cta-button" href="#inicio">
              Agenda una demo
            </a>
            <a className="secondary-link" href="mailto:hola@crecemos.com">
              Escríbenos
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">Crecemos</div>
          <p>Diseñamos experiencias digitales que convierten visitas en clientes.</p>
        </div>
        <div className="footer-links">
          {navigationLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#cta-final">Contacto</a>
        </div>
        <p className="footer-note">© 2025 Crecemos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
