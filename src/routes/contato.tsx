import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/WhatsAppWidget";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Cristina Morgado Advocacia" },
      {
        name: "description",
        content:
          "Fale com o escritório Cristina Morgado Advocacia em São Paulo. Telefone, e-mail, endereço e formulário.",
      },
      { property: "og:title", content: "Contato | Cristina Morgado Advocacia" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20),
  area: z.enum(["trabalho", "civil", "familia", "outro"], {
    errorMap: () => ({ message: "Selecione uma área" }),
  }),
  mensagem: z.string().trim().min(5, "Escreva uma mensagem").max(500),
  lgpd: z.literal(true, { errorMap: () => ({ message: "Você precisa aceitar." }) }),
});

type FormData = z.infer<typeof schema>;

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) =>
      [a && `(${a}`, a.length === 2 ? ") " : "", b, c && `-${c}`].filter(Boolean).join(""),
    );
  }
  return d.replace(/(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
}

function ContatoPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register, handleSubmit, formState: { errors }, reset, setValue, watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { area: undefined as unknown as FormData["area"], lgpd: false as unknown as true },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // TODO: integração de envio via Claude Code
    console.log("[contato] submit", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Mensagem enviada! Retornaremos em breve.");
    reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Contato"
        subtitle="Estamos à disposição para ouvir sua questão."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contato" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          {/* Infos */}
          <div>
            <h2 className="font-sans text-2xl text-ink">Informações de contato</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-light text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  <p className="font-medium text-ink">Endereço</p>
                  <p className="text-ink-muted">{SITE.addressLine1}<br />{SITE.addressLine2}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-light text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  <p className="font-medium text-ink">Telefone</p>
                  <p className="text-ink-muted">{SITE.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-light text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  <p className="font-medium text-ink">E-mail</p>
                  <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-light text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  <p className="font-medium text-ink">Horário</p>
                  <p className="text-ink-muted">{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <Button asChild className="mt-6" style={{ backgroundColor: "#25D366" }}>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <WhatsAppIcon className="h-5 w-5" /> Falar pelo WhatsApp
              </a>
            </Button>

            <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface-alt">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197500588647!2d-46.6366030248888!3d-23.538356978815197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585721114059%3A0x8e8749fcb24c8033!2sR.%20Brigadeiro%20Tobias%2C%20577%20-%20Centro%20Hist%C3%B3rico%20de%20S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001032-001!5e0!3m2!1spt-BR!2sbr!4v1718810000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full object-cover"
                title="Localização do Escritório"
              ></iframe>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 border-t border-border bg-card py-3 text-sm font-medium text-primary hover:bg-primary-light"
              >
                Abrir no Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
            noValidate
          >
            <h2 className="font-sans text-2xl text-ink">Envie uma mensagem</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Retornamos em até 1 dia útil.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="nome">Nome completo *</Label>
                <Input id="nome" {...register("nome")} aria-invalid={!!errors.nome} />
                {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    inputMode="tel"
                    {...register("telefone", {
                      onChange: (e) => { e.target.value = maskPhone(e.target.value); },
                    })}
                    aria-invalid={!!errors.telefone}
                  />
                  {errors.telefone && <p className="mt-1 text-xs text-destructive">{errors.telefone.message}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="area">Área de interesse *</Label>
                <Select
                  value={watch("area")}
                  onValueChange={(v) => setValue("area", v as FormData["area"], { shouldValidate: true })}
                >
                  <SelectTrigger id="area" aria-invalid={!!errors.area}>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trabalho">Direito do Trabalho</SelectItem>
                    <SelectItem value="civil">Direito Civil</SelectItem>
                    <SelectItem value="familia">Direito de Família</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.area && <p className="mt-1 text-xs text-destructive">{errors.area.message}</p>}
              </div>

              <div>
                <Label htmlFor="mensagem">Mensagem *</Label>
                <Textarea
                  id="mensagem"
                  rows={5}
                  maxLength={500}
                  {...register("mensagem")}
                  aria-invalid={!!errors.mensagem}
                />
                {errors.mensagem && <p className="mt-1 text-xs text-destructive">{errors.mensagem.message}</p>}
              </div>

              <label className="flex items-start gap-2 text-sm text-ink-muted">
                <Checkbox
                  checked={watch("lgpd") === true}
                  onCheckedChange={(v) => setValue("lgpd", (v === true) as true, { shouldValidate: true })}
                  className="mt-0.5"
                />
                <span>
                  Concordo com a Política de Privacidade e autorizo o contato.
                </span>
              </label>
              {errors.lgpd && <p className="text-xs text-destructive">{errors.lgpd.message}</p>}

              <Button type="submit" disabled={submitting} className="w-full">
                {submitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
