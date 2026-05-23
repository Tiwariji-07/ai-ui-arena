# AI UI Arena

A showcase site for comparing UI pages designed by different AI models from a
single shared brief. One curator (you) writes a prompt. Each model returns up to
three variant pages. The arena renders all of them in their own frames so you
can read the differences.

Two treatments per model are supported: **Raw** (the bare model) and
**With skill** (the same brief, this time with a design skill loaded into
context). Switching between treatments and variants happens inside the canvas
chrome bar.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # type-check + production build
pnpm preview      # serve the production build locally
```

Requires Node 20+ and pnpm.

## Tech

- React 19 + React Router 7
- TypeScript
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vite 8
- Geist Sans + Geist Mono (Google Fonts)
- All UI variants are lazy-loaded with `React.lazy` + `Suspense`. No backend.

## How it works

The arena is one page per model. Each model has three variant slots and two
treatments (Raw / With skill). The URL carries both axes as query params:

```
/model/claude-opus?v=02&mode=raw
```

`v` defaults to `01`. `mode` defaults to `raw`.

### File layout

```
src/
├── data/
│   └── models.ts                 # the source of truth: prompt + models + variant status
├── pages/
│   ├── Home.tsx                  # brief masthead + model grid
│   └── ModelPage.tsx             # masthead + canvas with variant tabs + mode toggle
├── components/
│   └── Nav.tsx                   # sticky top nav with breadcrumb
├── submissions/                  # ← model-generated pages live here
│   ├── _Awaiting.tsx             # placeholder rendered when status === 'awaiting'
│   ├── claude-opus/
│   │   ├── 01.tsx
│   │   ├── 02.tsx
│   │   └── 03.tsx
│   ├── gpt-5/   …
│   ├── gemini/  …
│   ├── composer/  …
│   ├── grok-build/  …
│   └── gemini-3.1/  …
├── App.tsx                       # routes
├── main.tsx
└── index.css                     # design tokens + global styles
```

### The brief

Edit `PROMPT` (and optionally `BRIEF_TITLE`) at the top of
[`src/data/models.ts`](src/data/models.ts). That string is the only prompt every
model receives.

```ts
export const PROMPT = `Build a landing page for a developer tool …`
```

### Adding or changing models

Each model in [`src/data/models.ts`](src/data/models.ts) looks like:

```ts
{
  id: 'claude-opus',
  name: 'Claude Opus 4.7',
  provider: 'Anthropic',
  color: '#B8552A',                // accent — dot, brief border, active tabs
  variants: [
    awaiting('claude-opus', '01'),
    awaiting('claude-opus', '02'),
    awaiting('claude-opus', '03'),
  ],
}
```

To add a new model:

1. Add an entry to the `models` array.
2. Create `src/submissions/<id>/01.tsx`, `02.tsx`, `03.tsx`. Each file
   default-exports a React component.

### Marking a variant as submitted

Use the `submitted()` helper in the same file:

```ts
variants: [
  submitted('claude-opus', '01', '2026-05-23'),
  awaiting('claude-opus', '02'),
  awaiting('claude-opus', '03'),
],
```

`status: 'submitted'` switches the variant chip on the home card from grey to
the model's accent color and unlocks the timestamp in the canvas header.

## The model contract

When you hand the repo to a model and ask it to generate a page, give it these
rules:

1. **Only edit one file**: `src/submissions/<your-model-id>/<variant>.tsx`.
2. **Default-export one React component** that renders the entire page.
3. **You may use Tailwind utility classes or inline styles.** Don't add npm
   packages.
4. **Don't import from outside your own folder.** Helper files inside
   `src/submissions/<your-model-id>/` are fine.
5. **The page renders inside a 1280px-wide framed canvas.** Design for that
   container; you don't need to handle viewport-level concerns.

After the model returns its variant, paste the file in, mark it `submitted(…)`
in `models.ts`, and it will appear in the arena.

## UI primer

**Home (`/`)** — the brief on display, then a grid of models. Each card shows
the model's accent dot, name, provider, and a `00 / 03` variant counter.

**Model page (`/model/:id`)** — model masthead, brief sidebar with copy button,
and the canvas. The canvas chrome bar has:

- **Raw / With skill** toggle (left) — switches treatment.
- **Variant 01 · 02 · 03** tabs (right-of-center) — switches variant. Awaiting
  slots show a small dot indicator.
- **Fullscreen** (right) — pure rendering, viewport-locked. Press `Esc` or
  click the exit pill to return.

The chrome bar is sticky to the viewport while the canvas is in view, so the
controls follow as you scroll through a tall page.

**With skill** mode currently renders a "Coming soon" placeholder. The data
model and routing are in place; when skill submissions arrive, wire them in by
adding a `skill/0X.tsx` lookup next to the existing variant lookup in
`models.ts`.

## License

Personal project. No license declared.
