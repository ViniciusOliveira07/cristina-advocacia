import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/sections/PageHero";
import { AREAS } from "@/components/sections/AreaCards";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Cristina Morgado Advocacia" },
      {
        name: "description",
        content:
          "Atuação em Direito do Trabalho, Direito Civil e Direito de Família. Conheça os serviços oferecidos.",
      },
      { property: "og:title", content: "Áreas de Atuação | Cristina Morgado Advocacia" },
      { property: "og:url", content: "/areas" },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Especialidades"
        title="Áreas de Atuação"
        subtitle="Atuação especializada para proteger seus direitos."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Áreas" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
          {AREAS.map((area) => (
            <article
              key={area.slug}
              id={area.slug}
              className="grid gap-8 rounded-xl border border-border bg-card p-6 shadow-sm md:grid-cols-3 md:p-10"
            >
              <div className="md:col-span-1">
                <div className="grid h-14 w-14 place-items-center rounded-md bg-primary-light text-primary">
                  <area.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-serif text-2xl text-ink">{area.name}</h2>
                <p className="mt-3 text-sm text-ink-muted">{area.description}</p>
                <Button asChild className="mt-6">
                  <Link
                    to="/agendar"
                    search={{ area: area.slug }}
                  >
                    Consultar sobre {area.name.split(" ").slice(-1)[0]}
                  </Link>
                </Button>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-serif text-lg text-ink">Principais serviços</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:[&>li:last-child:nth-child(odd)]:col-span-2 sm:[&>li:last-child:nth-child(odd)]:justify-self-center">
                  {area.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Dúvidas frequentes
            </p>
            <h2 className="font-serif text-3xl text-ink">Perguntas e respostas por área</h2>
          </div>

          {AREAS.map((area) => (
            <div key={area.slug} className="mb-8">
              <h3 className="mb-3 font-serif text-xl text-primary">{area.name}</h3>
              <Accordion type="single" collapsible className="rounded-lg border border-border bg-card">
                {area.faq.map((item, i) => (
                  <AccordionItem key={i} value={`${area.slug}-${i}`} className="px-4">
                    <AccordionTrigger className="text-left text-sm font-medium text-ink hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-ink-muted">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
