import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  CheckCircle2, ChevronLeft, ChevronRight, Instagram, Linkedin, Mail,
  MapPin, MessageCircle, RefreshCw, UserPlus, Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";
import { downloadVCard } from "@/lib/vcard";
import {
  MONTH_NAMES, WEEKDAY_SHORT, buildMonthGrid, slotsForDate,
} from "@/lib/calendar";
import portrait from "@/assets/cristina-portrait.jpg.asset.json";

const areaSearch = z.object({
  area: z.enum(["trabalho", "civil", "familia"]).optional(),
});

export const Route = createFileRoute("/agendar")({
  validateSearch: areaSearch,
  head: () => ({
    meta: [
      { title: "Agendar Consulta | Cristina Morgado Advocacia" },
      {
        name: "description",
        content:
          "Cartão virtual de agendamento da Dra. Cristina Morgado. Escolha tipo de consulta, data e horário.",
      },
      { property: "og:title", content: "Agendar Consulta | Cristina Morgado Advocacia" },
      { property: "og:url", content: "/agendar" },
    ],
    links: [{ rel: "canonical", href: "/agendar" }],
  }),
  component: AgendarPage,
});

type MeetingType = "presencial" | "online" | "retorno";

const MEETING_TYPES: { id: MeetingType; title: string; subtitle: string; Icon: typeof MapPin }[] = [
  { id: "presencial", title: "Consulta Presencial", subtitle: "Rua Brigadeiro Tobias, 577 — SP", Icon: MapPin },
  { id: "online", title: "Consulta Online", subtitle: "Google Meet ou Zoom", Icon: Video },
  { id: "retorno", title: "Retorno de Cliente", subtitle: "Para clientes em andamento", Icon: RefreshCw },
];

const bookingSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20),
  assunto: z.string().trim().min(5, "Descreva brevemente").max(300),
  lgpd: z.literal(true, { errorMap: () => ({ message: "Você precisa aceitar." }) }),
});
type BookingData = z.infer<typeof bookingSchema>;

function AgendarPage() {
  const { area } = Route.useSearch();
  const [meeting, setMeeting] = useState<MeetingType | null>(null);
  const [month, setMonth] = useState<Date>(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [done, setDone] = useState<null | {
    meeting: MeetingType; date: Date; time: string;
  }>(null);

  const grid = buildMonthGrid(month);
  const slots = selectedDate ? slotsForDate(selectedDate) : [];

  const {
    register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue, reset,
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { lgpd: false as unknown as true },
  });

  const onSubmit = async (data: BookingData) => {
    // TODO: integração Google Calendar via Claude Code
    console.log("[agendar] submit", {
      ...data, meeting, area, date: selectedDate, time: selectedTime,
    });
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Solicitação enviada!");
    setDone({ meeting: meeting!, date: selectedDate!, time: selectedTime! });
  };

  const resetAll = () => {
    setMeeting(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setDone(null);
    reset();
  };

  const fmtDate = (d: Date) =>
    d.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" });

  if (done) {
    return (
      <div className="bg-surface-alt py-12 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="rounded-2xl bg-card p-8 text-center shadow-lg sm:p-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h1 className="mt-5 font-serif text-2xl text-ink">Solicitação recebida!</h1>
            <p className="mt-2 text-sm text-ink-muted">
              Você receberá um e-mail de confirmação em breve.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-surface-alt p-4 text-left text-sm">
              <p><span className="text-ink-muted">Tipo:</span>{" "}
                <span className="font-medium text-ink">
                  {MEETING_TYPES.find((m) => m.id === done.meeting)?.title}
                </span>
              </p>
              <p className="mt-1"><span className="text-ink-muted">Data:</span>{" "}
                <span className="font-medium text-ink capitalize">{fmtDate(done.date)}</span>
              </p>
              <p className="mt-1"><span className="text-ink-muted">Horário:</span>{" "}
                <span className="font-medium text-ink">{done.time}</span>
              </p>
            </div>
            <Button className="mt-6" onClick={resetAll}>Voltar ao início</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-alt py-10 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-2xl bg-card p-5 shadow-lg sm:p-8">
          {/* Topo */}
          <div className="flex flex-col items-center text-center">
            <img
              src={portrait}
              alt={`Retrato de ${SITE.lawyer}`}
              loading="lazy"
              width={200}
              height={200}
              className="h-24 w-24 rounded-full border-[3px] border-primary object-cover"
            />
            <h1 className="mt-4 font-serif text-2xl text-primary">{SITE.lawyer}</h1>
            <p className="text-sm text-ink-muted">{SITE.oab}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="border-primary/30 text-primary">Trabalhista</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">Civil</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">Família</Badge>
            </div>
          </div>

          {/* Contato rápido */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <QuickLink href={SITE.whatsappUrl} label="WhatsApp" Icon={MessageCircle} />
            <QuickLink href={`mailto:${SITE.email}`} label="E-mail" Icon={Mail} />
            <QuickLink href={SITE.linkedin} label="LinkedIn" Icon={Linkedin} />
            <QuickLink href={SITE.instagram} label="Instagram" Icon={Instagram} />
          </div>

          <Button
            variant="outline"
            className="mt-4 w-full border-primary text-primary hover:bg-primary-light hover:text-primary"
            onClick={downloadVCard}
          >
            <UserPlus className="h-4 w-4" /> Salvar Contato
          </Button>

          <hr className="my-8 border-border" />

          {/* Agendamento */}
          <div>
            <h2 className="font-serif text-xl text-ink">Agendar uma Consulta</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Escolha o tipo de atendimento, selecione uma data e horário disponíveis.
              {area && (
                <span className="ml-1 text-primary">
                  Área pré-selecionada: <strong className="capitalize">{area}</strong>.
                </span>
              )}
            </p>

            {/* Step 1 */}
            <Section step={1} title="Tipo de reunião">
              <div className="grid gap-3 sm:grid-cols-3">
                {MEETING_TYPES.map((m) => {
                  const active = meeting === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMeeting(m.id)}
                      className={
                        "rounded-lg border-2 p-4 text-left transition-colors " +
                        (active
                          ? "border-primary bg-primary-light"
                          : "border-border bg-card hover:border-primary/40")
                      }
                    >
                      <m.Icon className={"h-5 w-5 " + (active ? "text-primary" : "text-ink-muted")} />
                      <p className="mt-2 text-sm font-medium text-ink">{m.title}</p>
                      <p className="mt-1 text-xs text-ink-muted">{m.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </Section>

            {/* Step 2 */}
            {meeting && (
              <Section step={2} title="Selecione uma data">
                <div className="rounded-lg border border-border p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Mês anterior"
                      className="grid h-8 w-8 place-items-center rounded-md text-ink-muted hover:bg-surface-alt"
                      onClick={() =>
                        setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <p className="text-sm font-medium text-ink">
                      {MONTH_NAMES[month.getMonth()]} {month.getFullYear()}
                    </p>
                    <button
                      type="button"
                      aria-label="Próximo mês"
                      className="grid h-8 w-8 place-items-center rounded-md text-ink-muted hover:bg-surface-alt"
                      onClick={() =>
                        setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[0.7rem] text-ink-muted">
                    {WEEKDAY_SHORT.map((w, i) => (
                      <div key={i} className="py-1">{w}</div>
                    ))}
                  </div>
                  <div className="mt-1 grid grid-cols-7 gap-1">
                    {grid.map((cell, i) => {
                      const isSelected =
                        selectedDate && cell.date.toDateString() === selectedDate.toDateString();
                      const disabled = !cell.available || !cell.inMonth;
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={disabled}
                          onClick={() => { setSelectedDate(cell.date); setSelectedTime(null); }}
                          className={
                            "aspect-square rounded-md text-sm transition-colors " +
                            (!cell.inMonth
                              ? "text-transparent"
                              : disabled
                                ? "cursor-not-allowed text-ink-muted/40"
                                : isSelected
                                  ? "bg-primary font-semibold text-white"
                                  : "text-ink hover:bg-primary-light hover:text-primary")
                          }
                        >
                          {cell.date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Section>
            )}

            {/* Step 3 */}
            {meeting && selectedDate && (
              <Section step={3} title="Horários disponíveis">
                <p className="mb-3 text-sm capitalize text-ink-muted">{fmtDate(selectedDate)}</p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {slots.map((s) => {
                    const active = selectedTime === s.time;
                    return (
                      <button
                        key={s.time}
                        type="button"
                        disabled={!s.available}
                        onClick={() => setSelectedTime(s.time)}
                        className={
                          "rounded-md border px-3 py-2 text-sm transition-colors " +
                          (!s.available
                            ? "cursor-not-allowed border-border bg-surface-alt text-ink-muted/50 line-through"
                            : active
                              ? "border-primary bg-primary font-medium text-white"
                              : "border-border text-ink hover:border-primary hover:bg-primary-light hover:text-primary")
                        }
                      >
                        {s.time}
                      </button>
                    );
                  })}
                </div>
              </Section>
            )}

            {/* Step 4 */}
            {meeting && selectedDate && selectedTime && (
              <Section step={4} title="Seus dados">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div>
                    <Label htmlFor="ag-nome">Nome completo *</Label>
                    <Input id="ag-nome" {...register("nome")} aria-invalid={!!errors.nome} />
                    {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome.message}</p>}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="ag-email">E-mail *</Label>
                      <Input id="ag-email" type="email" {...register("email")} aria-invalid={!!errors.email} />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="ag-tel">Telefone *</Label>
                      <Input id="ag-tel" inputMode="tel" {...register("telefone")} aria-invalid={!!errors.telefone} />
                      {errors.telefone && <p className="mt-1 text-xs text-destructive">{errors.telefone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="ag-assunto">Descreva brevemente o assunto *</Label>
                    <Textarea
                      id="ag-assunto"
                      rows={4}
                      maxLength={300}
                      {...register("assunto")}
                      aria-invalid={!!errors.assunto}
                    />
                    {errors.assunto && <p className="mt-1 text-xs text-destructive">{errors.assunto.message}</p>}
                  </div>
                  <label className="flex items-start gap-2 text-sm text-ink-muted">
                    <Checkbox
                      checked={watch("lgpd") === true}
                      onCheckedChange={(v) => setValue("lgpd", (v === true) as true, { shouldValidate: true })}
                      className="mt-0.5"
                    />
                    <span>Concordo com a Política de Privacidade e autorizo o contato.</span>
                  </label>
                  {errors.lgpd && <p className="text-xs text-destructive">{errors.lgpd.message}</p>}

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Enviando..." : "Confirmar Agendamento"}
                  </Button>
                </form>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  step, title, children,
}: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-xs font-semibold text-white">
          {step}
        </span>
        <h3 className="font-sans text-sm font-semibold text-ink uppercase tracking-wide">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function QuickLink({
  href, label, Icon,
}: { href: string; label: string; Icon: typeof MessageCircle }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-card px-2 py-3 text-xs text-ink transition-colors hover:border-primary hover:bg-primary-light"
    >
      <Icon className="h-5 w-5 text-primary" />
      {label}
    </a>
  );
}
