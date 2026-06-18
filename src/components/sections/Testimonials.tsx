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
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">O que dizem os clientes</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-sm text-ink">{t.text}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-serif text-base text-primary">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.area}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-muted">
          Depoimentos reais de clientes. Resultados podem variar conforme o caso.
        </p>
      </div>
    </section>
  );
}
