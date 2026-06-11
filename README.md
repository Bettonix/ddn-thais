# DDN — Para Thais · Next.js 15

Site misterioso + elegante, mobile-first, com capítulos navegáveis, animações Framer Motion, easter eggs sutis e stack moderna.

Feito com amor por Carlos, para Thais. Labubuzinho(a) desde sempre.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (config inline com `@theme`)
- **Motion** (Framer Motion v12+, import de `motion/react`)
- **Lucide React** (ícones finos)
- **next/font/google** (Cormorant Garamond + JetBrains Mono auto-hospedadas)

## Estrutura

```
src/
├── app/
│   ├── layout.tsx           # fonts, particles, progress bar, konami listener
│   ├── globals.css          # Tailwind v4 @theme + tokens
│   ├── page.tsx             # / — hero + countdown
│   ├── carta/page.tsx       # /carta — a pergunta
│   ├── capitulos/page.tsx   # /capitulos — timeline
│   ├── escolha/page.tsx     # /escolha — minigame
│   ├── verdade/page.tsx     # /verdade — declaração
│   ├── aceitar/page.tsx     # /aceitar — botão final
│   └── fim/page.tsx         # /fim — modal + música + WhatsApp
├── components/
│   ├── effects/Particles.tsx
│   ├── easter-eggs/KonamiListener.tsx
│   ├── nav/ProgressBar.tsx
│   ├── nav/PageNav.tsx
│   ├── sections/Hero.tsx
│   ├── sections/Countdown.tsx
│   ├── sections/Letter.tsx
│   ├── sections/Timeline.tsx
│   ├── sections/Choice.tsx
│   ├── sections/Nos.tsx
│   ├── sections/Declaration.tsx
│   ├── sections/Accept.tsx
│   ├── sections/FinalModal.tsx
│   └── ui/Loader.tsx
└── lib/
    ├── content.ts           # textos centralizados
    ├── storage.ts           # localStorage com fallback
    └── motion.ts            # variants Framer Motion
```

## Rotas

| Rota | Conteúdo |
|------|----------|
| `/` | Hero "Carlos → Thais", countdown ao vivo até 12/06/2026 |
| `/carta` | "Uma pergunta só." — toque revela "Eu escolheria você" |
| `/capitulos` | Timeline dos 6 marcos do relacionamento |
| `/escolha` | Minigame "O que você escolheria?" — resposta certa: "qualquer coisa. contanto que seja com você" |
| `/nos` | Polaroid dupla com as duas fotos do casal, filtro sépia sutil |
| `/verdade` | Declaração completa em typewriter, papel branco quente |
| `/aceitar` | Botão "Aceitar" (único) — humor elegante: "escolhi não te dar saída" |
| `/fim` | "Eu te escolho." + botão WhatsApp (campo vazio — ela digita livre) + escolha de música (Yes to Heaven / Call Out My Name) |

## Easter eggs

- **Konami** (↑↑↓↓←→←→BA) — chuva discreta de ✦ dourados
- **7 cliques no fundo do `/fim`** — "six seven 🫡"
- **Haptic feedback** (vibração) no mobile ao tocar a carta e acertar a escolha
- **localStorage** salva progresso entre sessões

## Como rodar local

```bash
cd ddn-next
npm install
npm run dev
```

Abre em `http://localhost:3000`.

Pra testar no celular na mesma rede: `npm run dev -- -H 0.0.0.0` e acessa o IP da máquina no celular.

## Como customizar

### 1. Número do WhatsApp

`src/lib/content.ts`:

```ts
WHATSAPP_URL: "https://wa.me/5565993616302?text=..."
```

### 2. Data do countdown

`src/lib/content.ts`:

```ts
TARGET_DATE: "2026-06-12T00:00:00-03:00",
```

### 3. Textos

Tudo em `src/lib/content.ts`:
- `MOMENTS` — array com os 6 marcos
- `CHOICES` — opções do minigame
- `DECLARATION` — texto da declaração
- `LETTER_QUESTION` / `LETTER_ANSWER`
- `SONGS` — cards com foto + vídeo local
- `AMBIENT` — música de fundo (botão no header) (locais: Yes to Heaven + Call Out My Name)

### 4. Cores / fontes

Tokens em `src/app/globals.css` no bloco `@theme`:

```css
--color-champagne: #d4af7a;
--color-wine: #5c1a2b;
--color-paper: #f6f1e7;
```

## Deploy na Vercel

1. Sobe o projeto num repo GitHub
2. Vai em https://vercel.com/new
3. Importa o repo
4. Vercel detecta Next.js automaticamente — sem config extra
5. Deploy em ~1 min
6. URL: `https://ddn-next.vercel.app` (customizável)

Ou pela CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Player de música

Botão champagne no header (canto superior direito) controla a música ambiente ("Yes to Heaven" — Lana Del Rey) que fica em loop. Clique único ativa o som (política do browser exige interação).

No `/fim`, ao clicar em "tocar a música de vocês", aparecem dois cards com foto real dos artistas. Clicar abre o `VideoModal` que toca o clipe localmente, sem sair do site.

Vídeos e imagens ficam em `public/media/`. Suportados: `.mp4` e `.jpg`.

## Mobile-first

- Touch targets ≥ 44px
- `viewport-fit=cover` pra safe areas (iPhone notch)
- Haptic feedback quando disponível
- Animações otimizadas com `prefers-reduced-motion`
- Partículas com cap reduzido em telas < 700px
- Fontes com `display: swap` pra não bloquear render

## Acessibilidade

- `aria-label` em controles
- `aria-hidden` em decorativos
- Semântica: `<main>`, `<section>`, `<ol>`, `<button>`
- Focus styles em todos os interativos
- Reduced motion respeitado

## Créditos

- Fontes: Cormorant Garamond + JetBrains Mono (Google Fonts)
- Ícones: Lucide React
- Animações: Motion (Framer Motion)
- Inspiração: labubuzinho, "pesou o clima", The Weeknd, Lana Del Rey

Feito com `♥` (e memes) por Carlos, para Thais.
