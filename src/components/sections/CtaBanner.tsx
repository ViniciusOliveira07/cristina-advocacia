import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/WhatsAppWidget";
import { SITE } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
          Tem uma questão jurídica? Vamos conversar.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Agende uma consulta inicial e entenda seus direitos com clareza.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-light hover:text-primary"
          >
            <Link to="/agendar">Agendar Consulta Agora</Link>
          </Button>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" /> ou fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
