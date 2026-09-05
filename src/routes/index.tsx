import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, ClipboardList, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaSummaryCards } from "@/components/sections/AreaCards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cristina Morgado Advocacia | Direito do Trabalho, Civil e Família em SP" },
      {
        name: "description",
        content:
          "Advocacia em São Paulo com atendimento personalizado em Direito do Trabalho, Civil e de Família. Agende sua consulta.",
      },
      { property: "og:title", content: "Cristina Morgado Advocacia" },
      {
        property: "og:description",
        content:
          "Atendimento personalizado em Direito do Trabalho, Civil e de Família em São Paulo.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const DIFFS = [
  {
    title: "Atendimento Personalizado",
    text: "Cada caso é tratado com atenção individual e estratégia dedicada.",
  },
  {
    title: "Experiência Comprovada",
    text: "Atuação sólida em Direito do Trabalho, Civil e de Família.",
  },
  {
    title: "Proximidade com o Cliente",
    text: "Comunicação clara, transparente e acessível durante todo o processo.",
  },
];

const PROCESSO = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    text: "Você agenda uma consulta inicial, presencial ou online, e conta seu caso.",
  },
  {
    icon: ClipboardList,
    title: "Análise do caso",
    text: "Avaliação criteriosa dos fatos, documentos e possibilidades jurídicas.",
  },
  {
    icon: ShieldCheck,
    title: "Estratégia definida",
    text: "Você recebe um caminho claro, com prazos e opções explicados sem juridiquês.",
  },
  {
    icon: CalendarClock,
    title: "Acompanhamento contínuo",
    text: "Atualizações diretas em cada etapa, do início até a conclusão do processo.",
  },
];

function Home() {
  return (
    <>
      {/* Hero — full-bleed editorial split, no floating cards */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="order-2 flex min-w-0 flex-col justify-center px-4 py-14 sm:px-6 lg:order-1 lg:px-16 lg:py-0">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              <span aria-hidden className="h-px w-8 bg-primary" />
              Advocacia em São Paulo
            </p>
            <h1 className="font-serif text-4xl leading-[1.15] break-words text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Advocacia com comprometimento e dedicação ao seu caso.
            </h1>
            <p className="mt-6 max-w-md text-base text-ink-muted sm:text-lg">
              Atendimento personalizado em Direito do Trabalho, Direito Civil e Direito de Família — com clareza sobre cada etapa do seu processo.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to="/agendar">Agendar Consulta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-ink/20 text-ink hover:bg-surface-alt">
                <Link to="/areas">Conhecer as Áreas</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-sm text-ink-muted">
              <span>Direito do Trabalho</span>
              <span aria-hidden className="text-border">/</span>
              <span>Direito Civil</span>
              <span aria-hidden className="text-border">/</span>
              <span>Direito de Família</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[420px] sm:h-[520px] lg:h-full lg:min-h-[560px]">
              <img
                src="/cristina.jpg"
                alt="Retrato da Dra. Cristina Morgado"
                width={900}
                height={1100}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-ink/90 px-5 py-4 text-white backdrop-blur-sm sm:px-8">
                <span className="truncate font-serif text-base sm:text-lg">{SITE.lawyer}</span>
                <span className="shrink-0 text-xs tracking-wide text-white/70">{SITE.oab}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-surface-alt py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                Por que escolher
              </p>
              <h2 className="font-serif text-3xl text-ink sm:text-4xl">O que diferencia o atendimento</h2>
            </div>
          </div>
          <div className="grid divide-y divide-border border-t border-b border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {DIFFS.map((d, i) => (
              <div key={d.title} className="flex flex-col gap-4 py-8 md:px-10 md:py-10 md:first:pl-0 md:last:pr-0">
                <span className="font-serif text-sm text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-xl text-ink">{d.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Como funciona
            </p>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">Do primeiro contato à solução</h2>
          </div>
          <div className="relative">
            <span aria-hidden className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESSO.map((p) => (
                <div key={p.title}>
                  <span className="relative z-10 grid h-12 w-12 place-items-center border border-primary bg-background text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AreaSummaryCards />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
