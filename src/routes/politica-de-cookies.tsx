import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | Cristina Morgado Advocacia" },
      { name: "description", content: "Política de Cookies do escritório Cristina Morgado Advocacia." },
      { property: "og:title", content: "Política de Cookies" },
      { property: "og:url", content: "/politica-de-cookies" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <>
      <PageHero
        title="Política de Cookies"
        subtitle="Como utilizamos cookies neste site."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Cookies" }]}
      />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-ink-muted sm:px-6">
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">O que são cookies</h2>
          <p>
            Cookies são pequenos arquivos armazenados no seu navegador para melhorar sua
            experiência durante a navegação.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">Tipos utilizados</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Essenciais:</strong> necessários ao funcionamento do site.</li>
            <li><strong>Preferências:</strong> guardam, por exemplo, o seu consentimento.</li>
            <li><strong>Analíticos:</strong> ajudam a entender como o site é utilizado.</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">Gerenciamento</h2>
          <p>
            Você pode revogar seu consentimento limpando o armazenamento local do navegador. As
            configurações também podem ser ajustadas diretamente no navegador.
          </p>
        </section>
        <p className="text-xs">Texto provisório. Substituir pela política definitiva.</p>
      </article>
    </>
  );
}
