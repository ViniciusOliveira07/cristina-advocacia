import { Link } from "@tanstack/react-router";
import { HardHat, Landmark, Users, type LucideIcon } from "lucide-react";

export type AreaSlug = "trabalho" | "civil" | "familia";

export const AREAS: {
  slug: AreaSlug;
  name: string;
  short: string;
  icon: LucideIcon;
  description: string;
  services: string[];
  faq: { q: string; a: string }[];
}[] = [
  {
    slug: "trabalho",
    name: "Direito do Trabalho",
    short: "Defesa de direitos trabalhistas com estratégia e clareza.",
    icon: HardHat,
    description:
      "Atuação preventiva e contenciosa em demandas trabalhistas, com análise criteriosa de cada caso e foco em soluções que protejam o trabalhador.",
    services: [
      "Rescisão indireta",
      "Horas extras e adicional noturno",
      "Assédio moral e sexual",
      "Demissão sem justa causa",
      "FGTS e verbas rescisórias",
      "Seguro-desemprego",
    ],
    faq: [
      {
        q: "Quando posso pedir rescisão indireta?",
        a: "Quando o empregador comete falta grave — atraso reiterado de salários, exigência de tarefas alheias ao contrato, assédio, entre outros. É preciso avaliar provas e prazos.",
      },
      {
        q: "Tenho direito a horas extras se trabalho em casa?",
        a: "Sim, desde que haja controle de jornada. O regime de teletrabalho não exclui automaticamente o direito; é necessário analisar o contrato.",
      },
      {
        q: "Qual o prazo para entrar com ação trabalhista?",
        a: "O trabalhador tem até 2 anos após o término do contrato para ajuizar a ação, podendo cobrar verbas dos últimos 5 anos trabalhados.",
      },
    ],
  },
  {
    slug: "civil",
    name: "Direito Civil",
    short: "Contratos, responsabilidade civil e indenizações.",
    icon: Landmark,
    description:
      "Acompanhamento em conflitos cíveis com foco na proteção patrimonial e na reparação de danos, em negociações extrajudiciais e processos judiciais.",
    services: [
      "Elaboração e revisão de contratos",
      "Responsabilidade civil",
      "Indenizações por danos morais e materiais",
      "Cobranças e execuções",
      "Conflitos de vizinhança",
    ],
    faq: [
      {
        q: "Posso pedir indenização por dano moral?",
        a: "Sim, quando há ofensa à honra, imagem ou dignidade. A análise considera a gravidade do ato e suas consequências.",
      },
      {
        q: "Contrato verbal tem validade?",
        a: "Em muitos casos sim, mas a prova fica mais difícil. Sempre que possível, formalize por escrito.",
      },
      {
        q: "Quanto tempo dura uma ação cível?",
        a: "Varia conforme a complexidade e a comarca. Tente sempre a via extrajudicial antes — costuma ser mais rápida.",
      },
    ],
  },
  {
    slug: "familia",
    name: "Direito de Família",
    short: "Acolhimento e técnica em momentos sensíveis.",
    icon: Users,
    description:
      "Atuação humanizada em questões familiares e sucessórias, sempre buscando o caminho menos litigioso e mais protetivo para todas as partes envolvidas.",
    services: [
      "Divórcio consensual e litigioso",
      "Guarda e regulamentação de visitas",
      "Pensão alimentícia",
      "Inventário e partilha",
      "Reconhecimento de união estável",
    ],
    faq: [
      {
        q: "Divórcio precisa passar pelo cartório ou pelo juiz?",
        a: "Se o casal está de acordo e não há filhos menores, é possível fazer em cartório. Caso contrário, é necessária a via judicial.",
      },
      {
        q: "Como é calculada a pensão alimentícia?",
        a: "Considera-se o trinômio necessidade x possibilidade x proporcionalidade. Não há percentual fixo definido em lei.",
      },
      {
        q: "Posso mudar a guarda dos filhos depois?",
        a: "Sim. A guarda pode ser revista sempre que houver mudança nas circunstâncias e desde que seja melhor para a criança.",
      },
    ],
  },
];

export function AreaSummaryCards() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Especialidades
            </p>
            <h2 className="font-sans text-3xl text-ink sm:text-4xl">Áreas de Atuação</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted sm:text-right">
            Soluções jurídicas com escuta atenta e estratégia adaptada ao seu caso.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {AREAS.map((a, i) => (
            <Link
              key={a.slug}
              to="/areas"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 sm:gap-8 sm:py-7"
            >
              <span className="font-sans text-2xl text-primary/30 sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-sans text-lg text-ink sm:text-xl">{a.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{a.short}</p>
              </div>
              <span className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary sm:inline-flex">
                Saiba mais
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
