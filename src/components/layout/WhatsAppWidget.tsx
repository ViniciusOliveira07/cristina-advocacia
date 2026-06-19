import { SITE } from "@/lib/site";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.004 3.2C9.002 3.2 3.303 8.9 3.3 15.904a12.67 12.67 0 0 0 1.696 6.346L3.2 28.8l6.72-1.762a12.68 12.68 0 0 0 6.072 1.547h.005c7.003 0 12.703-5.7 12.703-12.704 0-3.395-1.32-6.586-3.72-8.988A12.63 12.63 0 0 0 16.004 3.2Zm0 23.2h-.004a10.53 10.53 0 0 1-5.368-1.47l-.385-.229-3.99 1.047 1.065-3.893-.25-.4A10.54 10.54 0 0 1 5.443 15.9C5.445 10.07 10.174 5.34 16.008 5.34c2.824 0 5.48 1.102 7.476 3.1a10.52 10.52 0 0 1 3.093 7.48c-.003 5.834-4.735 10.564-10.567 10.564l-.006-.084Zm5.796-7.912c-.318-.16-1.882-.928-2.174-1.034-.292-.106-.505-.16-.717.16-.213.318-.823 1.034-1.01 1.247-.186.212-.372.238-.69.08-.318-.16-1.342-.495-2.556-1.578-.945-.843-1.583-1.884-1.768-2.202-.186-.318-.02-.49.14-.648.143-.143.317-.372.477-.558.16-.186.213-.318.32-.53.105-.213.052-.398-.027-.558-.08-.16-.718-1.73-.984-2.37-.259-.622-.522-.538-.717-.548-.186-.01-.398-.01-.611-.01a1.17 1.17 0 0 0-.85.398c-.292.318-1.116 1.09-1.116 2.66 0 1.57 1.142 3.087 1.302 3.3.16.213 2.248 3.432 5.448 4.814.761.328 1.355.524 1.818.671.764.243 1.46.209 2.01.127.613-.092 1.882-.77 2.148-1.513.265-.743.265-1.38.186-1.513-.08-.133-.292-.212-.611-.372Z"
      />
    </svg>
  );
}

export function WhatsAppWidget() {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale pelo WhatsApp"
            className="animate-wa-pulse fixed right-6 bottom-6 z-[100] grid h-14 w-14 place-items-center rounded-full text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="h-7 w-7" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">Fale pelo WhatsApp</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
