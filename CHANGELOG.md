# Changelog — VibeCoding Newsletter

All meaningful changes to this project are logged here.
Format: `YYYY-MM-DD | type | summary | commit SHA`

---

## 2026-06-19 | ops | Daily assessment — SSL auto-renewed (72d ✅), newsletter Edition 10 OVERDUE (63 days)

- SSL: **AUTO-RENEWED** — was CRITICAL at 25d on 2026-06-03, now HEALTHY at 72d (expires 2026-08-30) ✅
- Live health check: HTTP 200, 860ms — site healthy
- Readiness: 97/G4 — unchanged
- No code changes today — all outstanding items are manual actions
- **P0 MANUAL ACTION**: Send Newsletter Edition 10 via Buttondown dashboard — 63-day gap (last sent April 17). Recommended subject: "I scanned 500 AI-generated repos. 94% had security vulnerabilities." Send TODAY.
- **P1 MANUAL ACTION**: Set BUTTONDOWN_API_KEY in Vercel env vars (prj_0fyzuN1TXC4KcDumdJXDUpkhmqZR) — subscriber metrics blocked
- **P1 MANUAL ACTION**: Bulk-update ~52 YouTube video descriptions → replace stale newsletter URL with endofcoding.com/#newsletter

## 2026-06-03 | ops | Daily assessment — SSL CRITICAL (25d, worsening), no code changes

- SSL expiry: **25 days remaining** (2026-06-28) — worsening from 27d on 2026-06-01. Vercel auto-renewal status still unverified.
- Live health check: HTTP 200, 320ms response — site healthy and fast
- Vercel deployment: READY (dpl_DxAQzsR72YU6fWto9t4n7qXnE199), Node 24.x
- Readiness: 97/G4 — unchanged
- Newsletter draft "week-of-june2" at REFINED_TUESDAY status; send target 2026-06-05 (2 days)
- No code changes today — all outstanding items are manual actions
- **P0 ACTION**: Verify Vercel SSL auto-renewal → vibecoding-newsletter.com expires 2026-06-28 (25 days)
- **P1 ACTION**: Update ~52 YouTube video descriptions → replace stale newsletter URL with endofcoding.com/#newsletter
- **P2 ACTION**: Set BUTTONDOWN_API_KEY in Vercel env vars (subscriber metrics blocked)
- **P2 ACTION**: Verify NEXT_PUBLIC_SENTRY_DSN in Vercel env vars

## 2026-06-01 | ops | Daily assessment — SSL CRITICAL (27d), no code changes

- SSL expiry: **27 days remaining** (2026-06-28) — CRITICAL threshold active (<30 days per gates.md)
- Live health check: HTTP 200, 392ms response — site performing well
- Vercel deployment: READY (dpl_DxAQzsR72YU6fWto9t4n7qXnE199, Node 24.x)
- Readiness: 97/G4 — unchanged
- No code changes made today (all remaining tasks are manual actions)
- **Action required**: Verify Vercel SSL auto-renewal NOW — 27 days until expiry
- **Action required**: Set BUTTONDOWN_API_KEY in Vercel to unblock subscriber metrics
- **Action required**: Bulk-update ~52 YouTube descriptions → endofcoding.com/#newsletter

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
