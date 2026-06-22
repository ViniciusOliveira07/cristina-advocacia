import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-footer text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-sans text-2xl text-white">Cristina Morgado</p>
          <p className="text-xs font-light tracking-[0.25em] text-white/60 uppercase">Advocacia</p>
          <p className="mt-4 max-w-sm text-sm">{SITE.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-sans text-sm font-semibold tracking-wide text-white uppercase">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link to="/areas" className="hover:text-white">Áreas de Atuação</Link></li>
            <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            <li><Link to="/agendar" className="hover:text-white">Agendar Consulta</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-sans text-sm font-semibold tracking-wide text-white uppercase">
            Contato
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
              <span>{SITE.addressLine1}<br />{SITE.addressLine2}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-light" />
              <span>{SITE.phoneDisplay}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-light" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-6 text-xs text-white/60 sm:px-6">
          <p>
            Este site tem caráter meramente informativo. As informações aqui contidas não constituem
            aconselhamento jurídico.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
              <Link to="/politica-de-cookies" className="hover:text-white">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
