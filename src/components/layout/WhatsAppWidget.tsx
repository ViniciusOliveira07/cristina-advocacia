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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.036 2c-5.514 0-9.986 4.472-9.986 9.986 0 1.76.459 3.471 1.33 4.984L2 22l4.951-1.344A9.948 9.948 0 0 0 12.035 22c5.515 0 9.987-4.472 9.987-9.986S17.55 2 12.035 2Zm-2.29 5.713c-.22-.497-.38-.512-.702-.526-.18-.008-.387-.008-.593-.008-.206 0-.54.078-.823.388-.283.31-1.083 1.058-1.083 2.579 0 1.521 1.106 2.99 1.261 3.196.155.206 2.138 3.457 5.298 4.707 3.16 1.25 3.16.837 3.727.784.567-.053 1.83-.747 2.088-1.468.258-.721.258-1.339.18-1.468-.077-.129-.283-.206-.593-.36-.31-.155-1.83-.905-2.114-1.006-.283-.103-.49-.077-.67.078-.18.155-.696.721-.87.902-.173.18-.347.206-.657.052-.31-.155-1.307-.482-2.49-1.537--.92-.819-1.542-1.832-1.724-2.14-.181-.31-.02-.477.136-.632.176-.174.387-.45.58-.673.194-.224.258-.388.387-.646.13-.258.064-.483-.032-.673-.097-.19-.868-2.094-1.224-2.87Z"
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
