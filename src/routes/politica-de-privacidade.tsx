import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Cristina Morgado Advocacia" },
      { name: "description", content: "Política de Privacidade do escritório Cristina Morgado Advocacia." },
      { property: "og:title", content: "Política de Privacidade" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        title="Política de Privacidade"
        subtitle="Como tratamos seus dados pessoais."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacidade" }]}
      />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-ink-muted sm:px-6">
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">1. Dados coletados</h2>
          <p>
            Coletamos nome, e-mail, telefone e informações que você fornece em formulários de
            contato ou agendamento, exclusivamente para responder à sua solicitação.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">2. Finalidade</h2>
          <p>
            Os dados são utilizados para retorno de contato, agendamento de consultas e cumprimento
            de obrigações legais aplicáveis ao exercício da advocacia.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">3. Direitos do titular</h2>
          <p>
            Conforme a LGPD, você pode solicitar acesso, correção, anonimização ou eliminação dos
            seus dados a qualquer momento, mediante solicitação por e-mail.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-sans text-xl text-ink">4. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas, escreva para
            contato@cristinamorgado.adv.br.
          </p>
        </section>
        <p className="text-xs">Texto provisório. Substituir pela política definitiva.</p>
      </article>
    </>
  );
}
