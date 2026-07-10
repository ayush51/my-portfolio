# Ayush Aggarwal — Portfolio

Personal portfolio of Ayush Aggarwal, Software Engineer II at Ellucian — backend services, cloud infrastructure, and data platforms on AWS.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS 4. Fully static, deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

All portfolio content (experience, projects, skills) lives in [`src/data/resume.ts`](src/data/resume.ts) — edit that file to update the site without touching any components.

## Structure

- `src/app/page.tsx` — the one-page layout and all sections
- `src/components/` — client components (nav, scroll/pointer effects, typewriter)
- `src/data/resume.ts` — content
- `public/Ayush_Aggarwal_Resume.pdf` — downloadable resume
