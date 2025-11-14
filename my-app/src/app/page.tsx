import Image from "next/image";

const navigation = [
  { label: "Asesoría Contable", href: "#servicios" },
  { label: "Asesoría Tributaria", href: "#servicios" },
  { label: "Asesoría en Recursos Humanos", href: "#servicios" },
  { label: "Empresa", href: "#empresa" },
];

const services = [
  {
    title: "Asesoría Contable",
    description:
      "Gestionamos tu contabilidad con rigor y transparencia para que puedas tomar decisiones basadas en datos fiables.",
    benefits: [
      "Estados financieros oportunos",
      "Automatización de procesos",
      "Reportes personalizados",
    ],
  },
  {
    title: "Asesoría Tributaria",
    description:
      "Optimizamos tu carga impositiva asegurando el cumplimiento normativo y detectando oportunidades de ahorro fiscal.",
    benefits: [
      "Planificación tributaria",
      "Cumplimiento de SII",
      "Revisión de declaraciones",
    ],
  },
  {
    title: "Asesoría en Recursos Humanos",
    description:
      "Apoyamos la gestión de talento, remuneraciones y clima laboral para potenciar equipos comprometidos y productivos.",
    benefits: [
      "Procesos de onboarding",
      "Cálculo de remuneraciones",
      "Planes de desarrollo",
    ],
  },
];

const processSteps = [
  {
    title: "Entendemos tus necesidades",
    description:
      "Realizamos un diagnóstico inicial donde analizamos tu contexto actual, retos y objetivos para priorizar acciones de impacto.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Diseñamos una solución a medida",
    description:
      "Construimos un plan operativo personalizado que integra tecnología, procesos y acompañamiento experto en cada etapa.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Comenzamos a trabajar",
    description:
      "Implementamos el plan con seguimiento constante, retroalimentación continua y métricas claras para medir resultados.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
  },
];

const modalities = [
  {
    title: "Externalización",
    description:
      "Nos encargamos de los procesos administrativos y contables para que tu equipo se enfoque en el crecimiento del negocio.",
  },
  {
    title: "Asesoría Permanente",
    description:
      "Acompañamiento estratégico continuo con indicadores, reuniones y soporte especializado cuando lo necesites.",
  },
  {
    title: "Asesoría Esporádica",
    description:
      "Proyectos puntuales para resolver desafíos específicos con entregables claros y recomendaciones accionables.",
  },
];

const faqs = [
  {
    question: "¿Cómo pueden ayudarme a ahorrar dinero en impuestos?",
    answer:
      "Identificamos beneficios tributarios, optimizamos tu estructura y aseguramos el cumplimiento oportuno para evitar multas.",
  },
  {
    question: "¿Qué ventajas tiene externalizar mi contabilidad?",
    answer:
      "Obtienes un equipo experto, procesos estandarizados y tecnología integrada sin incurrir en costos de contratación interna.",
  },
  {
    question: "¿Qué tipo de empresas atienden?",
    answer:
      "Trabajamos con pymes, startups y compañías consolidadas de diversas industrias que buscan apoyo contable y financiero.",
  },
  {
    question: "¿Qué necesito para contratar sus servicios?",
    answer:
      "Solo agenda una reunión diagnóstica. Nuestro equipo te guiará con la documentación necesaria según tu necesidad.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed left-5 bottom-20 z-40 hidden flex-col items-center gap-3 rounded-full bg-white/90 p-4 shadow-xl backdrop-blur md:flex">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-500">
          Agenda
        </span>
        <a
          href="#contacto"
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-700"
        >
          Formulario
        </a>
      </div>

      <a
        href="https://wa.me/56981592966"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-40 flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-600"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-lg">💬</span>
        Contáctanos ahora
      </a>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-xl font-semibold text-white">
              PA
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Partner Accounting
              </p>
              <p className="text-base font-semibold text-slate-900">
                Asesoría & Consultoría
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:inline-flex"
            >
              Contacto
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-700"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-28 px-6 py-20">
        <section className="grid gap-12 overflow-hidden rounded-4xl bg-gradient-to-br from-indigo-50 via-white to-slate-100 px-8 py-16 shadow-xl shadow-indigo-100 md:grid-cols-[1.1fr,0.9fr] md:px-16">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 font-medium text-indigo-600 shadow-sm">
                <span className="text-lg">📍</span>
                Santiago, Chile
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 font-medium shadow-sm">
                +15 años de experiencia
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
                  Asesoría y Consultoría
                </span>
                <h1 className="text-4xl font-semibold leading-[1.1] text-slate-900 md:text-5xl">
                  Asesoría Contable, Financiera & Tributaria para impulsar tu negocio
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Simplificamos tu contabilidad, optimizamos tus impuestos y te acompañamos estratégicamente para que puedas enfocarte en el crecimiento de tu empresa.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-700"
                >
                  Nuestros servicios
                </a>
                <a
                  href="#modalidades"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  Modalidades
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-4 text-sm font-medium text-slate-600 shadow-md shadow-indigo-100">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Incidents
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">20,5%</p>
              </div>
              <div className="rounded-3xl bg-white p-4 text-sm font-medium text-slate-600 shadow-md shadow-indigo-100">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Client Satisfaction
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">98,8%</p>
              </div>
              <div className="rounded-3xl bg-white p-4 text-sm font-medium text-slate-600 shadow-md shadow-indigo-100">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Revenue Growth
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">96,5%</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-indigo-200 via-white to-violet-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-indigo-200">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
                alt="Equipo profesional"
                width={540}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute -bottom-6 left-6 rounded-3xl bg-slate-900/90 p-4 text-white shadow-2xl shadow-indigo-900/30">
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                  Resultados
                </p>
                <p className="text-lg font-semibold">+25% eficiencia operativa</p>
                <p className="text-sm text-slate-200">
                  Clientes en Chile y Latinoamérica
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="empresa" className="grid gap-10 rounded-4xl bg-white px-10 py-16 shadow-xl shadow-indigo-100 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-indigo-50">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-white" />
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
              alt="Especialistas contables"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <span className="inline-flex w-fit rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Acerca nuestro
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Asesoría Contable, Tributaria y Recursos Humanos
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Somos un equipo de expertos en contabilidad y finanzas con más de 15 años de experiencia. Nos apasiona apoyar a las pequeñas y medianas empresas a alcanzar su máximo potencial. Ofrecemos soluciones personalizadas y medibles para optimizar tus procesos contables, reducir tu carga tributaria y mejorar la toma de decisiones financieras.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Nuestra metodología se basa en la transparencia, la cercanía y el compromiso con cada uno de nuestros clientes.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                +300 clientes
              </span>
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                96% retención anual
              </span>
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                Equipo multidisciplinario
              </span>
            </div>
          </div>
        </section>

        <section id="servicios" className="space-y-12">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Servicios
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Tranquilidad contable en tus manos
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Confía en nuestra experiencia para gestionar tus números y procesos con la precisión y confianza que tu negocio necesita.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-5 rounded-3xl bg-white p-8 text-left shadow-lg shadow-indigo-100"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="flex-1 text-slate-600">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="text-indigo-500">●</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  Saber más
                  <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="proceso"
          className="rounded-4xl bg-white px-10 py-16 shadow-xl shadow-indigo-100"
        >
          <div className="flex flex-col gap-4 text-center">
            <span className="inline-flex self-center rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Nuestro proceso
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              Transparencia y resultados desde el primer día
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Te guiamos paso a paso con una metodología clara y medible. Desde la evaluación inicial hasta la implementación completa de soluciones.
            </p>
          </div>
          <div className="relative mt-12 space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col gap-6 rounded-3xl bg-slate-50 p-6 shadow-lg shadow-indigo-100 md:flex-row md:items-center"
              >
                <div className="relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
                    {`0${index + 1}`}
                  </div>
                  {index < processSteps.length - 1 && (
                    <span className="absolute -bottom-8 hidden h-16 w-px bg-gradient-to-b from-indigo-200 to-transparent md:block" />
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                <div className="overflow-hidden rounded-2xl bg-white shadow-inner md:max-w-[220px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={220}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="modalidades" className="grid gap-12 rounded-4xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 px-10 py-16 text-white md:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Soluciones a la medida
            </span>
            <h2 className="text-3xl font-semibold">
              Nuestras modalidades de servicio
            </h2>
            <p className="text-lg text-indigo-100">
              Diseñamos esquemas flexibles que se adaptan a la etapa y ritmo de crecimiento de tu negocio.
            </p>
            <div className="rounded-3xl bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
                Consultor destacado
              </p>
              <p className="mt-2 text-2xl font-semibold">Javier Torres</p>
              <p className="text-sm text-indigo-200">
                Líder de transformación financiera
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {modalities.map((modality) => (
              <div
                key={modality.title}
                className="rounded-3xl bg-white/10 p-6 shadow-lg shadow-slate-900/40 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{modality.title}</h3>
                <p className="mt-3 text-sm text-indigo-100">{modality.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-4xl bg-white px-10 py-16 text-center shadow-xl shadow-indigo-100">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Testimonio
            </span>
            <Image
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
              alt="Cliente satisfecho"
              width={80}
              height={80}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <p className="text-xl italic text-slate-700">
              “Gracias a su asesoría hemos optimizado recursos, evitado contingencias tributarias y mejorado la productividad interna. Su conocimiento profundo del mercado y su atención dedicada nos hacen sentir seguros en cada paso.”
            </p>
            <div>
              <p className="text-lg font-semibold text-slate-900">Roberto Laser Suau</p>
              <p className="text-sm text-slate-500">CEO de Marley Coffee</p>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-10 rounded-4xl bg-white px-10 py-16 shadow-xl shadow-indigo-100 md:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="flex flex-col justify-center gap-6 text-left">
            <span className="inline-flex w-fit rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">
              ¿Tienes alguna pregunta? ¡Tenemos las respuestas!
            </h2>
            <p className="text-lg text-slate-600">
              Si no encuentras lo que necesitas, agenda una reunión con nosotros y conversemos sobre tu proyecto.
            </p>
            <a
              href="#contacto"
              className="inline-flex w-fit items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-700"
            >
              Contáctanos
            </a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-indigo-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="relative overflow-hidden rounded-4xl bg-slate-900 px-6 py-16 text-white shadow-xl shadow-indigo-200 sm:px-12"
        >
          <Image
            src="https://images.unsplash.com/photo-1526481280695-3c46917b17c4?auto=format&fit=crop&w=1200&q=80"
            alt="Ciudad de Santiago"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-slate-900/70" />
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr,1fr]">
            <div className="space-y-5">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                Preparados para colaborar
              </span>
              <h2 className="text-3xl font-semibold">
                Preparados para trabajar en equipo
              </h2>
              <p className="text-lg text-indigo-100">
                Nuestro equipo de expertos está listo para trabajar contigo y encontrar las mejores soluciones para tu empresa.
              </p>
              <div className="space-y-3 text-sm text-indigo-100">
                <p>Los Militares 5620, Las Condes, Región Metropolitana</p>
                <p>supervisor@partner-accounting.cl</p>
                <p>+56 9 8159 2966</p>
              </div>
            </div>
            <form className="grid gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur">
              <label className="text-sm font-semibold text-white" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                className="h-12 rounded-2xl border border-white/30 bg-white/20 px-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <label className="text-sm font-semibold text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@empresa.cl"
                className="h-12 rounded-2xl border border-white/30 bg-white/20 px-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <label className="text-sm font-semibold text-white" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto"
                className="rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-xl font-semibold text-white">
                PA
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Partner Accounting
                </p>
                <p className="text-base font-semibold text-slate-900">
                  Asesoría & Consultoría Contable
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-slate-500">
              Simplificamos tu contabilidad, tus procesos tributarios y la gestión de tu equipo para que tu organización nunca se detenga.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              LinkedIn
            </a>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 text-sm text-slate-600 sm:grid-cols-4">
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">Servicios</p>
              <ul className="space-y-2">
                <li>
                  <a href="#servicios" className="hover:text-slate-900">
                    Asesoría Contable
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-slate-900">
                    Asesoría Tributaria
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-slate-900">
                    Recursos Humanos
                  </a>
                </li>
                <li>
                  <a href="#modalidades" className="hover:text-slate-900">
                    Modalidades de servicio
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">Empresa</p>
              <ul className="space-y-2">
                <li>
                  <a href="#empresa" className="hover:text-slate-900">
                    Acerca nuestro
                  </a>
                </li>
                <li>
                  <a href="#proceso" className="hover:text-slate-900">
                    Nuestro proceso
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-slate-900">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-slate-900">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">Legal</p>
              <ul className="space-y-2">
                <li> Términos y condiciones </li>
                <li> Política de privacidad </li>
                <li> Política de cookies </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-slate-900">Contacto</p>
              <ul className="space-y-2 text-slate-500">
                <li>supervisor@partner-accounting.cl</li>
                <li>+56 9 8159 2966</li>
                <li>Región Metropolitana</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400">
            © 2025 Partner Accounting. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
