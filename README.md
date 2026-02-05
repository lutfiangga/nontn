# NONTN

Platform streaming Film & Series Indonesia.

## Tech Stack

- **Astro** - Framework web modern dengan SSR/SSG
- **TailwindCSS** - Styling utility-first
- **TypeScript** - Type safety

## Setup

```bash
# Clone repo
git clone <repo-url>
cd nontn

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env dengan API URL kamu

# Development
npm run dev

# Production Build
npm run build
npm run preview
```

## Environment Variables

| Variable         | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| `PUBLIC_API_URL` | URL endpoint API. Wajib pakai prefix `PUBLIC_` agar bisa diakses saat prerender. |

> **Catatan**: Di Astro, variabel `.env` yang diakses di sisi client atau saat SSG/prerender **wajib** pakai prefix `PUBLIC_`.

## Folder Structure

```
src/
├── lib/               # Core library code
│   ├── api/           # API client
│   ├── components/    # Reusable Astro components
│   │   ├── common/    # Meta, SEO components
│   │   ├── layout/    # BaseLayout, CatalogLayout
│   │   ├── media/     # MediaCard, MediaGrid, HeroSlider, VideoPlayer
│   │   ├── navigation/ # Navbar, Footer
│   │   └── ui/        # Button, Badge, Skeleton, HomeSection
│   └── utils/         # Helper functions
├── pages/             # Astro pages (routes)
├── styles/            # Global CSS
└── types/             # TypeScript types
```

## Path Aliases

Tersedia path aliases untuk import yang lebih bersih:

```typescript
import Button from "@components/ui/Button.astro";
import { api } from "@lib/api/client";
import type { MediaItem } from "@types/api";
```

Konfigurasi ada di `tsconfig.json`.

## Scripts

| Command           | Description            |
| ----------------- | ---------------------- |
| `npm run dev`     | Jalankan dev server    |
| `npm run build`   | Build untuk production |
| `npm run preview` | Preview hasil build    |

## License

MIT
