"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Corazón",
    icon: "/images/icons/p85_icono_corazon_transparente.png",
    score: "61",
    status: "Área de oportunidad",
    text: "Riesgo cardiovascular, ritmo y señales clínicas preventivas."
  },
  {
    title: "Fuerza",
    icon: "/images/icons/p85_icono_fuerza_transparente.png",
    score: "85",
    status: "Fortaleza",
    text: "Capacidad muscular como marcador de independencia futura."
  },
  {
    title: "Mente",
    icon: "/images/icons/p85_icono_mente_transparente.png",
    score: "80",
    status: "Fortaleza",
    text: "Claridad, hábitos, energía y salud cognitiva cotidiana."
  },
  {
    title: "Movilidad",
    icon: "/images/icons/p85_icono_movilidad_transparente.png",
    score: "95",
    status: "Fortaleza",
    text: "Función, equilibrio y calidad del movimiento."
  },
  {
    title: "Audición",
    icon: "/images/icons/p85_icono_audicion_transparente.png",
    score: "95",
    status: "Fortaleza",
    text: "Tamizaje auditivo como parte de la salud futura."
  },
  {
    title: "Nutrición",
    icon: "/images/icons/p85_icono_nutricion_transparente.png",
    score: "73",
    status: "Área de oportunidad",
    text: "Composición corporal y orientación médica personalizada."
  },
  {
    title: "Bienestar",
    icon: "/images/icons/p85_icono_bienestar_transparente.png",
    score: "76",
    status: "Área de oportunidad",
    text: "Sueño, estrés, vitalidad y áreas de oportunidad."
  }
];

const includes = [
  "Consulta médica",
  "Electrocardiograma",
  "Bioimpedancia",
  "Evaluación de fuerza",
  "Audiometría",
  "Evaluación funcional",
  "Interpretación clínica",
  "Reporte exclusivo personalizado"
];

const reportPages = [
  {
    title: "Resumen ejecutivo",
    eyebrow: "Vista clínica",
    image: "/images/report/resumen-ejecutivo.png"
  },
  {
    title: "7 pilares",
    eyebrow: "Mapa preventivo",
    image: "/images/report/siete-pilares.png"
  },
  {
    title: "Fortalezas",
    eyebrow: "Lo que protege",
    image: "/images/report/fortalezas-prioridades.png"
  },
  {
    title: "Salud futura",
    eyebrow: "Próximas décadas",
    image: "/images/report/salud-futura.png"
  },
  {
    title: "Tu plan",
    eyebrow: "Orientación",
    image: "/images/report/tu-plan.png"
  },
  {
    title: "Árbol de longevidad",
    eyebrow: "Síntesis visual",
    image: "/images/report/arbol-longevidad.png"
  }
];

const comparison = [
  ["Enfoque", "Detectar problemas aislados", "Interpretar salud futura de forma integral"],
  ["Datos", "Resultados fragmentados", "Datos clínicos, funcionales y preventivos"],
  ["Entrega", "Lista de hallazgos", "Reporte exclusivo con fortalezas y prioridades"],
  ["Experiencia", "Proceso transaccional", "Medicina privada premium de longevidad"],
  ["Objetivo", "Saber si algo salió alterado", "Conservar fuerza, independencia y calidad de vida"]
];

const faqs = [
  {
    q: "¿Los laboratorios están incluidos?",
    a: "No. Proyecto 85 no incluye laboratorios. Si ya cuentas con estudios recientes, pueden ayudar a complementar la interpretación médica."
  },
  {
    q: "¿Cuánto dura la evaluación?",
    a: "La duración puede variar según cada paciente, pero está diseñada como una evaluación médica integral, ordenada y personalizada."
  },
  {
    q: "¿A quién va dirigido?",
    a: "A personas que quieren tomar decisiones preventivas sobre su salud futura, conservar independencia y entender sus fortalezas y áreas de oportunidad."
  },
  {
    q: "¿Qué recibe el paciente?",
    a: "Recibe interpretación integral, orientación médica personalizada y un reporte exclusivo Proyecto 85 con lectura clara de sus 7 pilares."
  },
  {
    q: "¿Necesito estudios previos?",
    a: "No son indispensables. Si tienes estudios recientes, puedes llevarlos para enriquecer la evaluación."
  }
];

function FadeIn({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function ElectroLine() {
  return (
    <svg className="absolute bottom-10 left-0 hidden h-24 w-full opacity-35 md:block" viewBox="0 0 900 120" fill="none">
      <path
        d="M0 72H110L132 72L148 42L168 102L194 18L216 72H350L372 72L394 54L416 90L440 72H900"
        stroke="url(#pulse)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="180 420"
        className="animate-pulseLine"
      />
      <defs>
        <linearGradient id="pulse" x1="0" x2="900" y1="0" y2="0">
          <stop stopColor="#F3D98B" stopOpacity="0" />
          <stop offset="0.45" stopColor="#D8AF4F" />
          <stop offset="1" stopColor="#F3D98B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BrandDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500/70" />
      <span className="h-2 w-2 rounded-full bg-gold-500" />
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500/70" />
    </div>
  );
}

function ReportMiniPage({ page, active }: { page: (typeof reportPages)[number]; active: boolean }) {
  return (
    <div
      className={cn(
        "h-[520px] min-w-[405px] overflow-hidden rounded-lg border border-gold-500/25 bg-ivory shadow-premium transition-all duration-500",
        active ? "scale-100 opacity-100" : "scale-[0.94] opacity-55"
      )}
    >
      <Image
        src={page.image}
        alt={`Página del reporte Proyecto 85: ${page.title}`}
        width={970}
        height={1254}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

export function LandingPage() {
  const [activeReport, setActiveReport] = useState(0);
  const selectedPage = reportPages[activeReport];
  const whatsappHref = useMemo(
    () =>
      "https://wa.me/?text=Hola%2C%20quiero%20agendar%20mi%20evaluaci%C3%B3n%20Proyecto%2085.",
    []
  );

  return (
    <main className="overflow-hidden bg-ivory text-navy-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy-950/78 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Proyecto 85">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold-500/40 bg-gold-500/10 serif-title text-xl font-semibold text-gold-300">
              85
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Proyecto 85</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <a href="#pilares" className="transition hover:text-gold-300">
              Pilares
            </a>
            <a href="#incluye" className="transition hover:text-gold-300">
              Incluye
            </a>
            <a href="#reporte" className="transition hover:text-gold-300">
              Reporte
            </a>
            <a href="#precio" className="transition hover:text-gold-300">
              Precio
            </a>
          </nav>
          <Button asChild size="default" className="hidden md:inline-flex">
            <a href="#precio">Agendar evaluación</a>
          </Button>
        </div>
      </header>

      <section id="inicio" className="relative min-h-screen bg-navy-950 pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(216,175,79,0.16),transparent_30%),linear-gradient(145deg,rgba(0,75,150,0.12),transparent_28%),#020B1D]" />
        <div className="absolute left-0 top-0 h-80 w-44 bg-[radial-gradient(circle,rgba(0,116,255,0.45)_1px,transparent_1.8px)] bg-[length:14px_14px] opacity-35" />
        <div className="absolute bottom-0 right-0 h-80 w-44 bg-[radial-gradient(circle,rgba(0,116,255,0.42)_1px,transparent_1.8px)] bg-[length:14px_14px] opacity-25" />
        <div className="absolute -left-20 top-20 h-[520px] w-32 rotate-[16deg] border-r border-[#004AA0]/35 bg-[#05265a]/10" />
        <div className="absolute -right-12 bottom-8 h-[520px] w-28 rotate-[18deg] border-l border-[#004AA0]/35 bg-[#05265a]/10" />
        <ElectroLine />
        <div className="container relative grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 md:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold-500/25 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Evaluación médica preventiva
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.48em] text-white/80">Reporte exclusivo</p>
            <BrandDivider className="my-5 justify-start" />
            <h1 className="mt-4 max-w-xl text-6xl font-light uppercase leading-[0.9] tracking-[0.08em] text-white sm:text-7xl lg:text-8xl">
              Proyecto <span className="gold-text block font-serif text-[1.55em] leading-[0.82] tracking-normal">85</span>
            </h1>
            <p className="mt-6 text-xl font-medium uppercase tracking-[0.18em] text-gold-500 md:text-2xl">
              Evaluación de longevidad
            </p>
            <p className="serif-title mt-8 max-w-2xl text-3xl leading-tight text-white md:text-5xl">
              Llegar bien es el verdadero objetivo.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76 md:text-lg">
              No se trata solamente de vivir más años. Se trata de conservar tu fuerza, independencia,
              energía y calidad de vida durante las próximas décadas.
            </p>
            <div className="mt-8 flex max-w-xl flex-wrap items-center gap-3 border-y border-gold-500/30 py-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-center gap-2 border-r border-gold-500/25 pr-3 last:border-r-0">
                  <Image src={pillar.icon} alt="" width={28} height={28} className="h-7 w-7" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80">{pillar.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#precio">Agendar evaluación</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#incluye">Ver qué incluye</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative">
            <div className="premium-border relative z-20 mx-auto max-w-[520px] rounded-lg bg-white/[0.06] p-3 shadow-premium backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-md bg-navy-950">
                <Image
                  src="/images/report/cover.png"
                  alt="Portada del reporte exclusivo Proyecto 85"
                  width={970}
                  height={1254}
                  priority
                  className="max-h-[680px] w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 z-30 hidden rounded-lg border border-gold-500/25 bg-navy-950/92 p-5 shadow-gold backdrop-blur md:block">
              <Image
                src="/images/brand/logo-medicina-longevidad.png"
                alt="Dr. Jhonatan Valdés, Medicina de la Longevidad"
                width={190}
                height={190}
                className="h-28 w-28 object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <FadeIn>
            <SectionLabel>No es un check-up tradicional</SectionLabel>
            <h2 className="serif-title text-4xl font-semibold leading-tight text-navy-950 md:text-6xl">
              Una lectura médica para entender cómo estás envejeciendo.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg leading-8 text-graphite">
              Proyecto 85 integra datos clínicos, funcionales y preventivos para construir una
              interpretación integral de tu salud futura. No se limita a revisar cifras: identifica
              fortalezas, prioridades y áreas de oportunidad con una mirada médica personalizada.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Datos clínicos", "Función física", "Prevención"].map((item) => (
                <div key={item} className="rounded-lg border border-navy-900/10 bg-white/60 p-5">
                  <CircleCheck className="mb-4 h-5 w-5 text-strength" />
                  <p className="font-semibold text-navy-950">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="pilares" className="bg-navy-900 py-20 text-white md:py-28">
        <div className="container">
          <FadeIn className="max-w-3xl">
            <SectionLabel>7 pilares</SectionLabel>
            <h2 className="serif-title text-4xl font-semibold leading-tight md:text-6xl">
              Evaluamos los 7 pilares de tu salud futura.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 0.03}>
                <Card className="group h-full bg-navy-950/58 transition duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:bg-navy-950/78 hover:shadow-gold">
                  <CardHeader>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-950 shadow-premium ring-1 ring-gold-500/35">
                      <Image src={pillar.icon} alt="" width={42} height={42} className="h-10 w-10 object-contain" />
                    </div>
                    <CardTitle className="text-sm font-bold uppercase tracking-[0.24em] text-white">{pillar.title}</CardTitle>
                    <div className="serif-title gold-text text-5xl font-semibold leading-none">{pillar.score}</div>
                    <p
                      className={cn(
                        "inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
                        pillar.status === "Fortaleza"
                          ? "bg-strength/14 text-[#7AD0AE]"
                          : "bg-gold-500/14 text-gold-300"
                      )}
                    >
                      {pillar.status}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-white/66">{pillar.text}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="incluye" className="bg-[#F1EADF] py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <SectionLabel>Evaluación integral</SectionLabel>
            <h2 className="serif-title text-4xl font-semibold leading-tight text-navy-950 md:text-6xl">
              Qué incluye la evaluación.
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Una experiencia médica ordenada, privada y enfocada en interpretación clínica,
              no en acumular estudios sin contexto.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {includes.map((item, index) => (
              <FadeIn key={item} delay={index * 0.025}>
                <div className="flex min-h-24 items-start gap-4 rounded-lg border border-navy-900/10 bg-ivory p-5 transition hover:border-gold-500/45 hover:shadow-gold">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-950">{item}</p>
                    <p className="mt-1 text-sm leading-6 text-graphite">
                      Integrado en una lectura clara de fortalezas, prioridades y salud futura.
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="reporte" className="bg-navy-950 py-20 text-white md:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <FadeIn>
              <SectionLabel>Reporte exclusivo</SectionLabel>
              <h2 className="serif-title text-4xl font-semibold leading-tight md:text-6xl">
                Reporte exclusivo Proyecto 85.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Un documento personalizado con resumen ejecutivo, pilares, fortalezas,
                prioridades, salud futura, orientación médica y árbol de longevidad.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="flex items-center justify-start gap-3 lg:justify-end">
              <Button
                variant="outline"
                size="icon"
                aria-label="Página anterior"
                onClick={() => setActiveReport((value) => (value === 0 ? reportPages.length - 1 : value - 1))}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="min-w-44 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-gold-300">{selectedPage.eyebrow}</p>
                <p className="mt-1 font-semibold text-white">{selectedPage.title}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                aria-label="Página siguiente"
                onClick={() => setActiveReport((value) => (value + 1) % reportPages.length)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </FadeIn>
          </div>
          <div className="mt-12 overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{ x: `calc(50% - ${activeReport * 430 + 202}px)` }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
            >
              {reportPages.map((page, index) => (
                <button
                  key={page.title}
                  className="text-left"
                  onClick={() => setActiveReport(index)}
                  aria-label={`Ver ${page.title}`}
                >
                  <ReportMiniPage page={page} active={activeReport === index} />
                </button>
              ))}
            </motion.div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {reportPages.map((page, index) => (
              <button
                key={page.title}
                onClick={() => setActiveReport(index)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition",
                  activeReport === index
                    ? "border-gold-500 bg-gold-500 text-navy-950"
                    : "border-white/15 text-white/55 hover:border-gold-500/50 hover:text-gold-300"
                )}
              >
                {String(index + 2).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <SectionLabel>Cómo funciona</SectionLabel>
            <h2 className="serif-title text-4xl font-semibold leading-tight text-navy-950 md:text-6xl">
              Un proceso claro, médico y personalizado.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Agenda", "Elige tu horario para iniciar tu evaluación de longevidad."],
              ["02", "Evaluación integral", "Realizamos consulta, mediciones y pruebas funcionales."],
              ["03", "Entrega de reporte", "Recibes interpretación integral y orientación médica personalizada."]
            ].map(([number, title, text], index) => (
              <FadeIn key={title} delay={index * 0.06}>
                <div className="h-full rounded-lg border border-navy-900/10 bg-white/70 p-7">
                  <span className="serif-title gold-text text-5xl font-semibold">{number}</span>
                  <h3 className="mt-8 text-xl font-semibold text-navy-950">{title}</h3>
                  <p className="mt-3 leading-7 text-graphite">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEE5D7] py-20 md:py-28">
        <div className="container">
          <FadeIn className="max-w-3xl">
            <SectionLabel>Comparativa</SectionLabel>
            <h2 className="serif-title text-4xl font-semibold leading-tight text-navy-950 md:text-6xl">
              Check-up tradicional vs Proyecto 85.
            </h2>
          </FadeIn>
          <FadeIn className="mt-12 overflow-hidden rounded-lg border border-navy-900/10 bg-ivory shadow-premium">
            <div className="grid grid-cols-[0.85fr_1fr_1fr] bg-navy-950 text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
              <div className="p-4">Criterio</div>
              <div className="p-4 text-white/66">Check-up</div>
              <div className="p-4 text-gold-300">Proyecto 85</div>
            </div>
            {comparison.map(([label, oldWay, p85]) => (
              <div key={label} className="grid grid-cols-[0.85fr_1fr_1fr] border-t border-navy-900/10 text-sm md:text-base">
                <div className="p-4 font-semibold text-navy-950">{label}</div>
                <div className="flex gap-2 p-4 text-graphite">
                  <X className="mt-1 h-4 w-4 shrink-0 text-priority" />
                  <span>{oldWay}</span>
                </div>
                <div className="flex gap-2 p-4 font-medium text-navy-950">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-strength" />
                  <span>{p85}</span>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="precio" className="relative bg-navy-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,175,79,0.22),transparent_34%)]" />
        <FadeIn className="container relative mx-auto max-w-4xl text-center">
          <SectionLabel>Precio de lanzamiento</SectionLabel>
          <div className="premium-border rounded-lg bg-white/[0.06] p-8 backdrop-blur md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-300">Precio de lanzamiento</p>
            <h2 className="serif-title mt-5 text-6xl font-semibold leading-none md:text-8xl">$2,200 MXN</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/72">
              Incluye evaluación integral y reporte personalizado.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Agendar evaluación
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#faq">Resolver dudas</a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="faq" className="bg-ivory py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="serif-title text-4xl font-semibold leading-tight text-navy-950 md:text-6xl">
              Preguntas frecuentes.
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.q} delay={index * 0.03}>
                <details className="group rounded-lg border border-navy-900/10 bg-white/70 p-5 open:border-gold-500/45">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-navy-950">
                    {faq.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-300 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-graphite">{faq.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-4 py-20 text-white md:py-28">
        <FadeIn className="mx-auto max-w-5xl text-center">
          <p className="serif-title text-4xl font-semibold leading-tight md:text-7xl">
            Tu salud futura no se improvisa. Se interpreta, se entiende y se cuida a tiempo.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Proyecto 85 es una evaluación de longevidad para mirar las próximas décadas con mayor
            claridad médica, serenidad y dirección.
          </p>
          <Button asChild size="lg" className="mt-10">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Agendar evaluación
            </a>
          </Button>
        </FadeIn>
      </section>

      <footer className="bg-navy-950 py-10 text-white">
        <div className="container flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Dr. Jhonatan Valdés</p>
            <p className="mt-1 text-sm text-white/58">Medicina de la Longevidad</p>
          </div>
          <p className="text-sm text-white/50">Proyecto 85 · Evaluación médica preventiva</p>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-strength text-white shadow-premium transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
