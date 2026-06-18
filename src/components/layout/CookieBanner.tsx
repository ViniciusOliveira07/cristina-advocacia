import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieBanner() {
  const { consent, ready, accept, decline } = useCookieConsent();
  if (!ready || consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-white p-4 shadow-lg sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ink-muted">
            Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda
            com nossa{" "}
            <Link to="/politica-de-cookies" className="font-medium text-primary hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={decline}>Recusar</Button>
            <Button size="sm" onClick={accept}>Aceitar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
