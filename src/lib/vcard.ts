import { SITE } from "./site";

export function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${SITE.lawyer}`,
    `ORG:${SITE.name}`,
    `TEL;TYPE=CELL:+${SITE.phoneIntl}`,
    `EMAIL:${SITE.email}`,
    "URL:https://cristinamorgado.adv.br",
    `ADR:;;${SITE.addressLine1};São Paulo;SP;;Brasil`,
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cristina-morgado.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
