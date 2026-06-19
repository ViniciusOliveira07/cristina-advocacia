import { SITE } from "@/lib/site";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.08L2 22l5.06-1.34A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm-1.76 4.97c.26 0 .47.1.63.29l.35.47c.15.2.25.42.25.65 0 .23-.1.45-.25.65l-.15.2a.58.58 0 0 0-.1.5c.1.4.3.77.6 1.1.3.32.65.58 1.05.77.15.07.32.08.47.02l.2-.1c.2-.1.42-.15.65-.1.23.05.43.18.58.35l.35.45c.15.2.22.43.2.67a.95.95 0 0 1-.33.68c-.25.22-.53.4-.83.5-.4.14-.82.17-1.24.1-.6-.1-1.16-.35-1.64-.7a5.4 5.4 0 0 1-1.4-1.4 5.8 5.8 0 0 1-.8-1.75 4.6 4.6 0 0 1-.1-1.2c.1-.52.32-1 .65-1.4.33-.4.74-.7 1.2-.9.35-.15.72-.2 1.1-.15.08.02.15.05.22.1Z"
        fill="currentColor"
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
