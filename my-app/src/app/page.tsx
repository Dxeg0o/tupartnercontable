"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Asesoría Contable", href: "#servicios" },
  { label: "Asesoría Tributaria", href: "#servicios" },
  { label: "Recursos Humanos", href: "#servicios" },
  { label: "Empresa", href: "#acerca" },
];

const services = [
  {
    title: "Asesoría Contable",
    description:
      "Nuestro equipo contable te brinda un análisis minucioso y reportes claros para que tomes decisiones informadas y ágiles.",
    points: [
      "Optimización de procesos",
      "Cumplimiento normativo",
      "Reportes en tiempo real",
    ],
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-10 w-10 text-[#5850EC]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 6.75h15M4.5 12h15m-15 5.25h10.5"
        />
      </svg>
    ),
  },
  {
    title: "Asesoría Tributaria",
    description:
      "Diseñamos estrategias para reducir tu carga tributaria cumpliendo con cada requisito legal y anticipándonos a contingencias.",
    points: ["Optimización fiscal", "Planificación a largo plazo", "Acompañamiento en fiscalizaciones"],
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-10 w-10 text-[#5850EC]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m0-18L4.5 8.25M12 3l7.5 5.25M4.5 8.25V18l7.5 3 7.5-3V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Asesoría en Recursos Humanos",
    description:
      "Gestionamos tus procesos de talento con un enfoque legal, estratégico y humano que potencia el clima laboral.",
    points: [
      "Definición de perfiles",
      "Gestión del desempeño",
      "Clima laboral sostenible",
    ],
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-10 w-10 text-[#5850EC]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11.25a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5a7.5 7.5 0 0115 0"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Entendemos tus necesidades",
    description:
      "Analizamos tu situación actual, los procesos y objetivos para definir el punto de partida ideal.",
  },
  {
    title: "Diseñamos una solución a medida",
    description:
      "Creamos un plan personalizado con indicadores claros para optimizar tus operaciones financieras.",
  },
  {
    title: "Comenzamos a trabajar",
    description:
      "Implementamos el plan y te acompañamos en cada fase con seguimiento constante y reportes claros.",
  },
];

const modalities = [
  {
    title: "Asesoría Permanente",
    description:
      "Te asignamos un equipo dedicado que gestiona día a día tus procesos contables y tributarios con reportes estratégicos.",
    highlights: [
      "Reuniones mensuales",
      "Cuadro de mando ejecutivo",
      "Soporte ilimitado",
    ],
  },
  {
    title: "Asesoría Esporádica",
    description:
      "Ideal para proyectos específicos o contingencias puntuales que necesitan soluciones expertas de corto plazo.",
    highlights: [
      "Paquetes por horas",
      "Respuesta en 24 horas",
      "Entrega documentada",
    ],
  },
];

const faqs = [
  {
    question: "¿Cómo pueden ayudarme a ahorrar dinero en impuestos?",
    answer:
      "Evaluamos tu situación actual, identificamos incentivos tributarios aplicables y diseñamos una estrategia de cumplimiento preventivo que reduce contingencias.",
  },
  {
    question: "¿Qué ventajas tiene externalizar mi contabilidad?",
    answer:
      "Obtienes un equipo especializado sin incrementar tu estructura interna, con procesos automatizados y reportes estratégicos en tiempo real.",
  },
  {
    question: "¿Qué servicios de asesoría financiera ofrecen?",
    answer:
      "Desde la planificación de flujo de caja hasta la creación de presupuestos y modelos financieros adaptados a tu crecimiento.",
  },
  {
    question: "¿Qué necesito para contratar sus servicios?",
    answer:
      "Solo agenda una reunión diagnóstica. Revisaremos tus requerimientos, definiremos objetivos y te presentaremos una propuesta personalizada.",
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6f7fb] text-slate-900">
      <header className="sticky top-0 z-30 w-full bg-[#f6f7fb]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5850EC] text-lg font-semibold text-white shadow-lg shadow-[#5850EC]/30">
              PA
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-slate-500">Partner</span>
              <span className="text-lg font-semibold text-slate-900">Accounting</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[#5850EC]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#contacto"
              className="rounded-full bg-[#5850EC] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#5850EC]/30 transition-transform hover:-translate-y-0.5"
            >
              Contacto
            </a>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#5850EC] hover:text-[#5850EC] lg:hidden"
          >
            Contáctanos
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-10">
        <section id="inicio" className="grid items-center gap-16 rounded-[40px] bg-white px-8 py-16 shadow-[0_20px_70px_-35px_rgba(88,80,236,0.45)] lg:grid-cols-2 lg:px-16">
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f0efff] px-4 py-1 text-xs font-semibold text-[#5850EC] shadow-inner shadow-white/70">
              <span className="h-2 w-2 rounded-full bg-[#4BD37B]" /> Santiago, Chile
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Asesoría y Consultoría Contable, Financiera &amp; Tributaria
              </h1>
              <p className="text-lg text-slate-600">
                Simplificamos tu contabilidad y optimizamos tus impuestos para que te enfoques en lo que realmente importa: hacer crecer tu negocio.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#servicios"
                className="rounded-full bg-[#5850EC] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5850EC]/30 transition-transform hover:-translate-y-0.5"
              >
                Nuestros Servicios
              </a>
              <a
                href="#modalidades"
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#5850EC] hover:text-[#5850EC]"
              >
                Modalidades
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-10 -top-12 hidden h-40 w-40 rounded-full bg-[#ffd8d3] blur-2xl lg:block" />
            <div className="absolute -right-16 bottom-0 hidden h-48 w-48 rounded-full bg-[#d5d1ff] blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-[32px] bg-slate-900/5 p-4 shadow-xl">
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                  alt="Consultores financieros trabajando en equipo"
                  width={560}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5850EC]/10 text-[#5850EC]">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium text-slate-500">Client Satisfaction</p>
                  <p className="text-lg font-semibold text-slate-900">98.8%</p>
                </div>
              </div>
              <div className="absolute -bottom-6 right-6 w-44 rounded-3xl bg-white p-4 shadow-xl">
                <p className="text-xs font-medium text-slate-500">Revenue Growth</p>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-2xl font-semibold text-slate-900">+36%</span>
                  <span className="rounded-full bg-[#4BD37B]/10 px-2 py-1 text-[10px] font-semibold text-[#14804A]">
                    En 12 meses
                  </span>
                </div>
              </div>
              <div className="absolute -left-10 bottom-10 hidden w-44 rounded-3xl bg-white p-4 shadow-xl lg:block">
                <p className="text-xs font-medium text-slate-500">Incidents</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border-4 border-[#FFB8B2] border-t-[#FF7A70]" />
                  <div>
                    <p className="text-lg font-semibold text-slate-900">-20.5%</p>
                    <p className="text-[11px] text-slate-500">Reducción anual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="acerca" className="grid gap-12 rounded-[40px] bg-white p-10 shadow-[0_20px_70px_-35px_rgba(88,80,236,0.35)] lg:grid-cols-[1.15fr_1fr] lg:p-16">
          <div className="flex flex-col justify-center gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[#f0efff] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#5850EC]">
              Acerca Nuestro
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Asesoría Contable, Tributaria y Recursos Humanos
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Somos un equipo de expertos en contabilidad y finanzas con más de 15 años de experiencia. Nos apasiona ayudar a las pequeñas y medianas empresas a optimizar su gestión mediante procesos contables robustos, tributos transparentes y decisiones informadas.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Nuestra metodología se basa en la transparencia, el acompañamiento constante y la transferencia de conocimiento hacia tus equipos internos.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-2 rounded-full bg-[#f8f7ff] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#5850EC]" /> Consultores certificados
              </span>
              <span className="flex items-center gap-2 rounded-full bg-[#f8f7ff] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#FF7A70]" /> Metodología comprobada
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 left-12 hidden h-32 w-32 rounded-full bg-[#ffd8d3] blur-2xl lg:block" />
            <div className="absolute -bottom-16 right-0 hidden h-32 w-32 rounded-full bg-[#d5d1ff] blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                alt="Reunión de profesionales analizando finanzas"
                width={520}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="servicios" className="flex flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#f0efff] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#5850EC]">
              Servicios contables y tributarios completos
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Tranquilidad contable en tus manos
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Con nuestra experiencia gestionas tu contabilidad y finanzas de manera eficiente, asegurando además el cumplimiento puntual de tus obligaciones fiscales.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col gap-6 rounded-3xl bg-white p-8 shadow-[0_18px_60px_-35px_rgba(88,80,236,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-2xl bg-[#f0efff] p-4">
                    {service.icon}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[#5850EC]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#5850EC] transition-transform hover:translate-x-1"
                >
                  Saber más
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="proceso" className="rounded-[40px] bg-white px-10 py-16 shadow-[0_20px_70px_-35px_rgba(88,80,236,0.35)]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#e9faf1] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#14804A]">
              Nuestro Proceso
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Transparencia y Resultados
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Te ofrecemos un proceso claro y transparente para que sepas en todo momento qué esperar. Desde la evaluación inicial hasta la implementación de soluciones personalizadas.
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col gap-4 rounded-3xl bg-[#f8f7ff] p-8">
                <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#5850EC] shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="modalidades" className="grid gap-12 rounded-[40px] bg-white p-10 shadow-[0_20px_70px_-35px_rgba(88,80,236,0.35)] lg:grid-cols-[1fr_1.1fr] lg:p-16">
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-12 top-12 hidden h-40 w-40 rounded-full bg-[#d5d1ff] blur-2xl lg:block" />
            <div className="absolute -right-10 bottom-0 hidden h-32 w-32 rounded-full bg-[#ffd8d3] blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?auto=format&fit=crop&w=900&q=80"
                alt="Profesional utilizando un computador portátil"
                width={520}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[#f0efff] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#5850EC]">
              Soluciones a la medida
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Nuestras Modalidades de Servicio
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Delega las tareas administrativas y contables con la tranquilidad de contar con un equipo experto que trabaja bajo metodologías ágiles y transparentes.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {modalities.map((modality) => (
                <div key={modality.title} className="flex h-full flex-col gap-4 rounded-3xl bg-[#f8f7ff] p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{modality.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{modality.description}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {modality.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#5850EC]" /> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[40px] bg-white p-12 text-center shadow-[0_20px_70px_-35px_rgba(88,80,236,0.35)]">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <span className="inline-flex items-center rounded-full bg-[#fff2cc] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#b98000]">
              Testimonio
            </span>
            <Image
              src="/logo-testimonial.svg"
              alt="Logo de Marley"
              width={64}
              height={64}
              className="h-12 w-12"
            />
            <blockquote className="text-xl font-medium leading-relaxed text-slate-700">
              “Gracias a su asesoría, hemos optimizado recursos, evitado contingencias tributarias y mejorado la productividad interna. Su conocimiento profundo del mercado y su atención dedicada nos hacen sentir seguros en cada paso.”
            </blockquote>
            <div className="text-sm font-semibold text-slate-600">
              <p>Roberto Lasen Saez</p>
              <p className="text-xs font-medium text-slate-400">CEO de Marley Coffee</p>
            </div>
          </div>
        </section>

        <section id="faq" className="grid gap-12 rounded-[40px] bg-white p-10 shadow-[0_20px_70px_-35px_rgba(88,80,236,0.35)] lg:grid-cols-[1fr_1.1fr] lg:p-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[#f0efff] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#5850EC]">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              ¿Tienes alguna pregunta? ¡Tenemos las respuestas!
            </h2>
            <p className="text-base text-slate-600">
              Encuentra la información que necesitas o contáctanos y resolveremos todas tus dudas en menos de 24 horas.
            </p>
            <a
              href="#contacto"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#5850EC] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5850EC]/30 transition-transform hover:-translate-y-0.5"
            >
              Contáctanos
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-100 bg-[#f8f7ff] p-6"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-slate-900"
                  >
                    {faq.question}
                    <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5850EC] shadow-md">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 transition-transform ${isActive ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  {isActive && (
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="contacto"
          className="relative overflow-hidden rounded-[40px] bg-slate-900 text-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1529429617124-aee0a93d72cc?auto=format&fit=crop&w=1200&q=80"
            alt="Panorama de Santiago"
            width={1400}
            height={800}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="relative grid gap-12 bg-slate-900/80 px-10 py-16 lg:grid-cols-[1fr_1fr] lg:px-16">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                Preparados para trabajar en equipo
              </span>
              <h2 className="text-3xl font-semibold leading-tight lg:text-4xl">
                ¿Listos para comenzar? Conversemos.
              </h2>
              <p className="max-w-md text-base text-white/80">
                Nuestro equipo de expertos está listo para trabajar contigo en tus próximos desafíos financieros. Completa el formulario y agenda una reunión.
              </p>
              <div className="space-y-3 text-sm text-white/80">
                <p className="font-semibold text-white">Los Millares 5620, Las Condes, Región Metropolitana</p>
                <p>supervisor@partner-accounting.cl</p>
                <p>+56 9 8159 2966</p>
                <p>+56 2 2589 2966</p>
              </div>
            </div>
            <form className="flex flex-col gap-4 rounded-3xl bg-white/10 p-8 backdrop-blur">
              <label className="text-sm font-semibold text-white" htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre completo"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#9ea7ff] focus:outline-none"
              />
              <label className="text-sm font-semibold text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@empresa.com"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#9ea7ff] focus:outline-none"
              />
              <label className="text-sm font-semibold text-white" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntanos en qué podemos ayudarte"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#9ea7ff] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#4BD37B] px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 bg-white/80 py-6 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Partner Accounting. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="transition-colors hover:text-[#5850EC]">
              Inicio
            </a>
            <a href="#servicios" className="transition-colors hover:text-[#5850EC]">
              Servicios
            </a>
            <a href="#contacto" className="transition-colors hover:text-[#5850EC]">
              Contacto
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#contacto"
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full bg-[#5850EC] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5850EC]/30 transition-transform hover:-translate-y-0.5 sm:flex"
      >
        Formulario
      </a>
      <a
        href="https://wa.me/56981592966"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
      >
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M16 .7C7.5.7.7 7.5.7 16c0 2.7.7 5.3 2.1 7.6L.6 31.3l7.9-2.1C10.9 30.7 13.4 31.4 16 31.4c8.5 0 15.3-6.8 15.3-15.3C31.3 7.5 24.5.7 16 .7zm0 27.8c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-4.7 1.2 1.3-4.5-.3-.5C4 20.3 3.3 18.1 3.3 16 3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.5 16 28.5zm7.2-10.5c-.4-.2-2.4-1.2-2.8-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.3 1.7-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3.1-2-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.7 0 1.6 1.1 3.1 1.2 3.3.2.3 2.2 3.4 5.3 4.8.7.3 1.3.6 1.8.7.8.3 1.5.3 2 .2.6-.1 2-.8 2.3-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.7-.5z" />
        </svg>
        Contáctanos ahora
      </a>
    </div>
  );
}
