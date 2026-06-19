import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HandHeart, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaSummaryCards } from "@/components/sections/AreaCards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
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

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:py-24">
          <div className="lg:col-span-3">
            <div className="relative pl-5">
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-0 w-[3px] bg-primary"
              />
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                Advocacia em São Paulo
              </p>
              <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.25rem]">
                Advocacia com comprometimento e dedicação ao seu caso.
              </h1>
            </div>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              Atendimento personalizado em Direito do Trabalho, Direito Civil e Direito de Família.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {DIFFS.map((d) => (
              <div
                key={d.title}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-light text-primary">
                  <d.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d.text}</p>
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
