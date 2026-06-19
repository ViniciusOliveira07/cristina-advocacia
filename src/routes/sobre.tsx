import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Award, Shield, HandHeart, Eye, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/sections/PageHero";
import portrait from "@/assets/cristina-portrait.jpg.asset.json";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Dra. Cristina Morgado | Cristina Morgado Advocacia" },
      {
        name: "description",
        content:
          "Conheça a trajetória, formação e valores da Dra. Cristina Morgado, advogada em São Paulo.",
      },
      { property: "og:title", content: "Sobre a Dra. Cristina Morgado" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const FORMACAO = [
  { title: "Bacharel em Direito", inst: "Universidade de São Paulo (USP)", year: "2008" },
  { title: "Pós-graduação em Direito do Trabalho", inst: "PUC-SP", year: "2012" },
  { title: "Especialização em Direito de Família", inst: "FGV-SP", year: "2016" },
];

const VALORES = [
  { icon: Shield, title: "Ética", text: "Conduta pautada pelos princípios da advocacia." },
  { icon: HandHeart, title: "Comprometimento", text: "Dedicação integral a cada caso." },
  { icon: Eye, title: "Transparência", text: "Comunicação clara sobre cada etapa." },
  { icon: Sparkles, title: "Dedicação", text: "Atenção pessoal do início ao fim." },
];

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Sobre a Dra. Cristina Morgado"
        subtitle="Advogada comprometida com a defesa dos seus direitos."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Sobre" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 h-full w-full rounded-lg bg-primary-light"
              />
              <img
                src={portrait.url}
                alt="Retrato da Dra. Cristina Morgado"
                loading="lazy"
                width={800}
                height={1000}
                className="relative aspect-[3/4] w-full rounded-lg border-2 border-primary object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <Badge className="bg-primary-light text-primary hover:bg-primary-light">
              <Award className="mr-1 h-3 w-3" /> {SITE.oab}
            </Badge>
            <h2 className="mt-4 font-serif text-3xl text-ink">Uma advocacia próxima e estratégica</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                Há mais de quinze anos atuando em São Paulo, a Dra. Cristina Morgado construiu uma
                prática jurídica baseada no atendimento pessoal e na escuta atenta de cada cliente.
                Cada história é única, e cada estratégia é desenhada sob medida.
              </p>
              <p>
                Com formação sólida em Direito do Trabalho, Civil e de Família, sua atuação combina
                rigor técnico e sensibilidade humana — buscando sempre o caminho mais eficiente e
                menos desgastante para o cliente, seja pela via negocial ou judicial.
              </p>
              <p>
                A relação de confiança é o ponto de partida do trabalho. Por isso, a comunicação é
                direta, transparente e contínua: você sabe o que está acontecendo no seu processo e
                participa ativamente das decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Formação
            </p>
            <h2 className="font-serif text-3xl text-ink">Formação acadêmica</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FORMACAO.map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary-light text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{f.inst}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-primary">
                  <BookOpen className="h-3 w-3" /> {f.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-white/70 uppercase">
              Princípios
            </p>
            <h2 className="font-serif text-3xl text-white">Valores profissionais</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {VALORES.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-white/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
