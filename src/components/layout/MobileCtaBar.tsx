import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/layout/WhatsAppWidget";

export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-px border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="grid w-16 shrink-0 place-items-center text-[#25D366]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <Link
        to="/agendar"
        className="flex flex-1 items-center justify-center bg-primary py-3 text-sm font-semibold text-primary-foreground"
      >
        Agendar Consulta
      </Link>
    </div>
  );
}
