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
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Especialidades
          </p>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Áreas de Atuação</h2>
          <p className="mt-4 text-ink-muted">
            Soluções jurídicas com escuta atenta e estratégia adaptada ao seu caso.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {AREAS.map((a) => (
            <div
              key={a.slug}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary-light text-primary">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{a.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{a.short}</p>
              <Link
                to="/areas"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
              >
                Saiba mais
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
