import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, CalendarClock, ClipboardList, HandHeart, MessageCircle, Scale, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaSummaryCards } from "@/components/sections/AreaCards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/lib/site";
import portrait from "@/assets/cristina-portrait.jpg.asset.json";

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
    icon: Scale,
    title: "Atendimento Personalizado",
    text: "Cada caso é tratado com atenção individual e estratégia dedicada.",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    text: "Atuação sólida em Direito do Trabalho, Civil e de Família.",
  },
  {
    icon: HandHeart,
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:pt-20 lg:pb-28">
          <div className="min-w-0 lg:col-span-3">
            <div className="relative pl-6">
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-0 w-[3px] bg-primary"
              />
              <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Advocacia em São Paulo
              </p>
              <h1 className="font-sans text-4xl leading-[1.1] text-ink break-words sm:text-6xl sm:leading-[1.05] lg:text-[3.75rem]">
                Advocacia com <span className="text-primary">comprometimento</span> e dedicação ao seu caso.
              </h1>
              <p className="mt-6 max-w-lg text-base text-ink-muted sm:text-lg">
                Atendimento personalizado em Direito do Trabalho, Direito Civil e Direito de Família — com clareza sobre cada etapa do seu processo.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pl-6">
              <Button asChild size="lg">
                <Link to="/agendar">Agendar Consulta</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary-light"
              >
                <Link to="/areas">Conhecer as Áreas</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 pl-6 text-sm text-ink-muted">
              <span>Direito do Trabalho</span>
              <span aria-hidden className="text-border">•</span>
              <span>Direito Civil</span>
              <span aria-hidden className="text-border">•</span>
              <span>Direito de Família</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -top-4 -right-4 h-full w-full rounded-xl bg-primary-light"
              />
              <img
                src="/cristina.jpg"
                alt="Retrato da Dra. Cristina Morgado"
                width={800}
                height={1000}
                className="relative aspect-[4/5] w-full rounded-xl border-2 border-primary-light object-cover shadow-sm"
              />
              <div className="absolute -bottom-6 left-1/2 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 shadow-lg">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-light text-primary">
                  <Scale className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-sans text-sm font-semibold text-ink">{SITE.lawyer}</p>
                  <p className="text-xs text-ink-muted">{SITE.oab}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Por que escolher
            </p>
            <h2 className="font-sans text-3xl text-ink sm:text-4xl">O que diferencia o atendimento</h2>
          </div>
          <div className="grid divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0 md:border-x">
            {DIFFS.map((d, i) => (
              <div key={d.title} className="flex flex-col px-1 py-8 md:px-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-4xl leading-none text-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-sans text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Como funciona
            </p>
            <h2 className="font-sans text-3xl text-ink sm:text-4xl">Do primeiro contato à solução</h2>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESSO.map((p, i) => (
              <div key={p.title} className="relative pl-14">
                <span className="absolute top-0 left-0 grid h-10 w-10 place-items-center rounded-full border border-primary/30 font-sans text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                {i < PROCESSO.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-5 left-10 hidden h-px w-[calc(100%-1rem)] bg-border lg:block"
                  />
                )}
                <p.icon className="h-5 w-5 text-primary/60" />
                <h3 className="mt-3 font-sans text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AreaSummaryCards />
      <CtaBanner />
      <Testimonials />
    </>
  );
}
