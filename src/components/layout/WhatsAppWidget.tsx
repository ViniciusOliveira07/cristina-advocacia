import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
            className="fixed right-6 bottom-6 z-[100] grid h-14 w-14 place-items-center rounded-full text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">Fale pelo WhatsApp</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
