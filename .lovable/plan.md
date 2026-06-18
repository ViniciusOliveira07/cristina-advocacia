
# Cristina Morgado Advocacia — Website + Cartão de Agendamento

## Visão geral
Site institucional completo com 5 páginas principais + 2 páginas de políticas, seguindo o design system bordô/serif especificado. Stack da plataforma: **TanStack Start + React + Tailwind v4** (adapto a spec ao stack atual, mantendo todo o restante idêntico). Tudo client-side / mock, sem backend nesta etapa. Placeholders confirmados pelo usuário — vou preencher com dados fictícios plausíveis (OAB, telefone, e-mail, foto stock profissional, links sociais).

## Adaptações ao stack
- Roteamento: arquivos em `src/routes/` (file-based TanStack), não `react-router-dom`/`src/pages/`.
- SEO: `head()` por rota, em vez de `react-helmet-async`.
- Fontes Google: `<link>` no `__root.tsx` (não `@import` no CSS).
- Tokens de cor: `src/styles.css` via `@theme inline` + `:root` em oklch. Sem hex hardcoded em componentes.
- Reaproveito shadcn: `button`, `card`, `accordion`, `badge`, `input`, `textarea`, `select`, `checkbox`, `sheet` (drawer mobile), `sonner`.

## Rotas
```
src/routes/
  __root.tsx                       (fonts, Header, Footer, WhatsApp, CookieBanner, Outlet)
  index.tsx                        →  /
  sobre.tsx                        →  /sobre
  areas.tsx                        →  /areas
  contato.tsx                      →  /contato
  agendar.tsx                      →  /agendar
  politica-de-privacidade.tsx
  politica-de-cookies.tsx
```
Cada rota com `head()` próprio (title, description, og:*).

## Design system (src/styles.css)
Tokens adicionados ao tema:
- `--primary` bordô `#7B1D2E`, `--primary-dark` `#5A1320`, `--primary-light` `#F5E8EB`
- `--gray-medium`, `--gray-light`, `--gray-border`, `--dark`
- `--font-serif: "Playfair Display"`, `--font-sans: "Inter"`
- Headings serif, body sans; fontes via `<link>` no `__root.tsx`.

## Componentes
```
src/components/
  layout/   Header, Footer, WhatsAppWidget, CookieBanner
  sections/ Hero, FeatureCards, AreaCards, CtaBanner, Testimonials
  agendar/  SchedulingCard, MeetingTypeStep, CalendarStep, TimeSlotsStep,
            BookingFormStep, ConfirmationStep, QuickContactRow, SaveContactButton
src/lib/    vcard.ts, calendar.ts (mock disponibilidade)
src/hooks/  useCookieConsent.ts
```

## Páginas
- **Home**: Hero (texto + foto 4/5), 3 diferenciais, 3 cards de áreas, banner CTA bordô, 3 depoimentos.
- **Sobre**: hero + breadcrumb, bio + foto 3/4, badge OAB, cards de formação, valores em fundo bordô.
- **Áreas**: 3 cards expandidos (Trabalho/Civil/Família) com lista de serviços e CTA `/agendar?area=...`, FAQ em Accordion.
- **Contato**: 2 colunas — infos à esquerda, formulário RHF+Zod à direita (validação, máscara telefone BR, checkbox LGPD), submit faz `console.log` + toast; placeholder de mapa.
- **Agendar**: card central elegante; topo (avatar/nome/OAB/badges); contato rápido; botão Salvar Contato (vCard); fluxo de 5 steps com estado local; lê `?area=` para contexto; mocks em `lib/calendar.ts`; submit final → `console.log` + tela de sucesso.
- **Políticas**: layout simples, max-width 800px, texto placeholder estruturado.

## Formulários
React Hook Form + Zod. Estados default/loading/success/error com sonner. Submit comentado com `// TODO: integração via Claude Code`.

## Acessibilidade & SEO
`aria-label` em botões-ícone, `alt` em imagens, `<label htmlFor>` em inputs. H1 único por página. `head()` por rota com title/description/og e canonical relativo.

## Fora de escopo (placeholders prontos)
Envio real de e-mail, Google Calendar OAuth/API, lembrete 24h, GA4, deploy.
