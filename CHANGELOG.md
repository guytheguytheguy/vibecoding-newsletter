# Changelog — VibeCoding Newsletter

All meaningful changes to this project are logged here.
Format: `YYYY-MM-DD | type | summary | commit SHA`

---

## 2026-05-31 | ops | Daily assessment — SSL CRITICAL, no code changes

- SSL expiry: **28 days remaining** (2026-06-28) — crossed CRITICAL threshold (< 30 days per gates.md)
- Vercel deployment: READY at https://vibecoding-newsletter.com (HTTP 200, 790ms)
- Readiness: 97/G4 — unchanged
- No code changes made today
- **Action required**: Verify Vercel auto-renewal for SSL; set BUTTONDOWN_API_KEY; bulk-update 84 YouTube descriptions to endofcoding.com/#newsletter before June 28

## 2026-05-28 | feat | Subscriber count API route | 07a74cb

- Added `src/app/api/subscriber-count/route.ts` (edge runtime, 1h cache)
- Returns null gracefully when BUTTONDOWN_API_KEY is not set
- Live subscriber count shown in stats section when key is configured

## 2026-05-21 | ops | Marketing materials updated | 7c70a21

- Updated marketing copy in `marketing/` and `product-and-marketing/` directories

## 2026-05-17 | fix | Sentry fully hardened — zero build warnings | 1328044

- `global-error.tsx` added for React render error capture
- `instrumentation-client.ts` replaces `sentry.client.config.ts`
- Added `onRouterTransitionStart` hook for navigation instrumentation
- Migrated `next.config.mjs` to `webpack.*` pattern (resolved Sentry build warnings)
- Build is now fully clean — zero warnings

## 2026-05-03 | feat | Sentry error monitoring | 356761f

- Sentry fully instrumented across server, edge, and client runtimes
- `src/instrumentation.ts` — server-side capture (Node + Edge)
- `sentry.server.config.ts`, `sentry.edge.config.ts` — SDK init
- Readiness score: 92 → 97, Gate: G3 → G4

## 2026-04-13 | ops | Vercel project wired, SEO files added

- vercelProjectId confirmed: `prj_0fyzuN1TXC4KcDumdJXDUpkhmqZR`
- GitHub repo connected: `guytheguytheguy/vibecoding-newsletter`
- `src/app/sitemap.ts` + `src/app/robots.ts` added
- `README.md` added

## 2026-04-12 | feat | Site live — full scaffold deployed

- Next.js 14 + TypeScript project scaffolded and deployed
- Custom domain: vibecoding-newsletter.com (HTTP 200, SSL active)
- Buttondown form wired to `endofcoding` account
- Vercel Analytics added to `layout.tsx`
- OG tags and metadataBase configured
- Readiness: 81/G3
