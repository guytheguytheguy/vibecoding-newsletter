# VibeCoding Newsletter

Landing page for the [VibeCoding Newsletter](https://vibecoding-newsletter.com) — weekly AI coding insights delivered free to your inbox.

## Stack

- **Framework**: Next.js 14 (App Router, standalone output)
- **Language**: TypeScript (strict)
- **Email**: Buttondown embed (`endofcoding` account)
- **Hosting**: Vercel (`prj_0fyzuN1TXC4KcDumdJXDUpkhmqZR`)

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build check
```

## Structure

```
src/
  app/
    layout.tsx        # metadata, OG tags
    page.tsx          # landing page (hero, stats, cards, ecosystem, footer)
    globals.css       # all styles
  components/
    ButtondownForm.tsx # Buttondown embed with success state
```

## Deployment

Pushes to `main` auto-deploy via Vercel.

Live at: **https://vibecoding-newsletter.com**

## Ecosystem

- [EndOfCoding](https://endofcoding.com) — YouTube + blog
- [Vibe Coding Academy](https://vibe-coding.academy) — courses
- [Vibe Coding eBook](https://vibecodingebook.com) — guide
