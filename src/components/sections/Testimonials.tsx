import { Quote } from "lucide-react";

const ITEMS = [
  {
    text: "A Dra. Cristina conduziu meu processo trabalhista com muita atenção e clareza em cada etapa. Recomendo de olhos fechados.",
    name: "M.S.",
    area: "Direito do Trabalho",
  },
  {
    text: "Profissional dedicada e ética. Resolveu meu divórcio de forma rápida e respeitosa, com cuidado em proteger meus filhos.",
    name: "A.R.",
    area: "Direito de Família",
  },
  {
    text: "Excelente atendimento. Sempre disponível para tirar dúvidas e explicar cada passo do processo de indenização.",
    name: "J.P.",
    area: "Direito Civil",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Depoimentos
          </p>
          <h2 className="font-sans text-3xl text-ink sm:text-4xl lg:text-5xl">O que dizem os clientes</h2>
        </div>
        <div className="grid gap-10 divide-y divide-border md:grid-cols-3 md:gap-8 md:divide-x md:divide-y-0">
          {ITEMS.map((t, i) => (
            <figure key={i} className="flex flex-col pt-8 first:pt-0 md:px-8 md:pt-0 md:first:pl-0">
              <Quote className="h-6 w-6 text-primary/30" />
              <blockquote className="mt-4 flex-1 font-sans text-lg leading-snug text-ink">
                {t.text}
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.area}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 border-t border-border pt-6 text-xs text-ink-muted">
          Depoimentos reais de clientes. Resultados podem variar conforme o caso.
        </p>
      </div>
    </section>
  );
}
