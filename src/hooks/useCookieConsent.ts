import { useEffect, useState } from "react";

const KEY = "cookie_consent";
export type Consent = "accepted" | "declined" | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) as Consent;
      setConsent(v ?? null);
    } catch {
      // ignore
    }
    setReady(true);
  }, []);

  const update = (v: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      // ignore
    }
    setConsent(v);
  };

  return { consent, ready, accept: () => update("accepted"), decline: () => update("declined") };
}
