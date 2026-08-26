# WoW Hub

Plataforma central de conocimiento y gobernanza del Way of Working en Despegar.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000/wow-hub
```

## Project Structure

```
/app
  /wow-hub
    page.tsx                    # Home
    /wow
      layout.tsx                # Hub layout (header + sidebar)
      page.tsx                  # Redirect to historia
      /historia                 # First section
      /onboarding
      /learning
      /tribes-squads
      /okrs
      /ceremonies
      /jira
      /faqs
      /wowconnects
      /producto
      /search
    /tribos                      # Tribe org chart
      /[slug]                    # Tribe detail

/components                      # Reusable components (TBD)
/lib                            # Utilities, types, constants
/public                         # Static assets
```

## Design System

Colors (WoW Riders):
- `--wow-purple`: #550fed (primary)
- `--wow-lilac`: #bca6ff (secondary)
- `--wow-gold`: #eddc45 (accent)
- `--wow-ink`: #171321 (text)
- `--wow-muted`: #6f6a7c (secondary text)

## Development Progress

### ✅ Completed (21/24 Tasks)

**Foundation (Tasks 1-4)**
- [x] Task 1: Project setup (Next.js 14, React 18, TypeScript, Tailwind)
- [x] Task 2: Home page (`/wow-hub` with 3 main cards)
- [x] Task 3: Hub layout (sticky header + sidebar + breadcrumb)
- [x] Task 4: Historia section (video player + timeline + 3 cards)

**Core Sections (Tasks 5-13)**
- [x] Task 5: Onboarding (5 tabs: Glosario, Canvas, Waterfall, WoW General, Comms)
- [x] Task 6: Learning Paths (4 paths with modules)
- [x] Task 7: Tribes & Squads (4 tribes with squad details)
- [x] Task 8: OKRs y FCAs (tabbed view with progress bars)
- [x] Task 9: Ceremonies (6 ceremonies with accordion)
- [x] Task 10: Jira & Procesos (5 tabs: Workflow, Issue Types, Fields, Best Practices, Reporting)
- [x] Task 11: FAQs (6 topics with accordion and filter)
- [x] Task 12: WoW Connects (mentors, peers, experts network)
- [x] Task 13: Hub de Producto (4 tabs: Vision, Roadmap, Features, Analytics)

**Dynamic Pages & Features (Tasks 14-21)**
- [x] Task 14: Tribe Detail Page (4 tabs: Overview, Squads, Metrics, Initiatives)
- [x] Task 15: Search Results Page (with filters and popular searches)
- [x] Task 16: Mobile Responsive Design (hamburger menu, collapsible sidebar)
- [x] Task 17: Dark Mode Toggle (persistent with localStorage)
- [x] Task 18: Advanced Search with Filters (type filters, real-time)
- [x] Task 19: Tribe Org Chart Visualization (CEO → VPs → Tribes hierarchy)
- [x] Task 20: Squad Detail Pages (4 tabs, dynamic routing)
- [x] Task 21: Analytics Dashboard (metrics, trends, insights)

### ✅ Final Tasks (Tasks 22-24) - ALL COMPLETE
- [x] Task 22: Performance optimization (SWC minify, image optimization, caching)
- [x] Task 23: GitHub API integration (fetch playbooks, repository stats)
- [x] Task 24: Testing & QA (Vitest + component tests + integration tests)

## Features Implemented

### Core Features
✅ **Responsive Design** - Mobile-first approach with hamburger menu
✅ **Dark Mode** - Toggle with localStorage persistence  
✅ **Search** - Full-text search with type filters
✅ **Navigation** - Sticky header, collapsible sidebar, breadcrumbs
✅ **Language Selector** - ES/PT/EN (localStorage persistence)
✅ **Analytics** - Dashboard with metrics, trends, insights

### Content Sections (13 main)
✅ Historia • Onboarding • Learning Paths • Tribes & Squads
✅ OKRs y FCAs • Ceremonies • Jira • FAQs • WoW Connects
✅ Hub de Producto • Tribe Detail Pages • Squad Detail Pages • Analytics

### Reusable Components
✅ `Tabs.tsx` - Tab component with animations
✅ `Accordion.tsx` - Accordion with details/summary
✅ Language context preserved across navigation
✅ Dark mode applied globally

## Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000/wow-hub)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking

# Testing
npm test                # Run tests with Vitest
npm test:ui             # Run tests with UI
npm test:coverage       # Generate coverage report
```

## GitHub Integration

The project includes GitHub API integration for syncing playbooks:

```typescript
import { getRepositoryContents, getRepositoryStats } from '@/lib/github'

// Fetch playbook contents
const contents = await getRepositoryContents('playbooks/')

// Get repository statistics
const stats = await getRepositoryStats()
```

Configure with environment variables:
```bash
NEXT_PUBLIC_GITHUB_OWNER=despegar
NEXT_PUBLIC_GITHUB_REPO=wow-playbook
GITHUB_TOKEN=xxx  # Optional for higher rate limits
```

## Deployment to Ownia

```bash
# 1. Push to GitHub
git add .
git commit -m "WoW Hub complete implementation (24/24 tasks)"
git push

# 2. Deploy to Ownia
ownia deploy --repo https://github.com/despegar/wow-hub

# 3. Access at
https://wow-hub.ownia.app
```

## Architecture Overview

```
WoW Hub (Next.js 14)
├── Core (13 Sections)
│   └── Historia, Onboarding, Learning, Tribes, OKRs, 
│       Ceremonies, Jira, FAQs, WoW Connects, Producto
├── Dynamic Pages
│   ├── Tribe Details (4 tabs)
│   ├── Squad Details (4 tabs)
│   ├── Org Chart (hierarchy)
│   └── Analytics Dashboard
├── Features
│   ├── Dark Mode (localStorage)
│   ├── Mobile Responsive (hamburger menu)
│   ├── Advanced Search (type filters)
│   ├── Language Selector (ES/PT/EN)
│   └── Performance Optimizations
└── Integration
    ├── GitHub API (playbook sync)
    └── Analytics (usage metrics)
```

## Performance Metrics

- **Build:** SWC minification enabled
- **Caching:** 1-hour revalidation for dynamic content
- **Images:** AVIF/WebP optimization
- **Bundle:** Code splitting by route (Next.js default)

## Testing Coverage

- ✅ Component tests (Tabs, Accordion)
- ✅ Integration tests (GitHub API)
- ✅ Mock setup (localStorage, window.matchMedia)
- ✅ Coverage reporting with V8

To run tests:
```bash
npm test:coverage
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile Safari 15+

## License

Internal Despegar project
