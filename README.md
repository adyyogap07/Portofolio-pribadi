This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sanity CMS

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`
or `.env`, then restart the development server. The dataset must be publicly readable.
The dataset defaults to `production` when `NEXT_PUBLIC_SANITY_DATASET` is omitted.
Allow `http://localhost:3000` in the project's Sanity CORS origins so Studio can sign in.
Add the deployed website origin to CORS before using Studio in production.

Open [http://localhost:3000/studio](http://localhost:3000/studio) and publish documents
for Profil, Proyek, Skill, and Pengalaman & Pendidikan. The homepage reads the profile,
featured projects, skills, and experience; `/projects` lists all published projects,
and project detail pages use their Sanity slug. Only projects marked as featured appear
in the homepage project section.

The frontend displays published Sanity content only. Empty profile fields and content
collections stay empty in the frontend; there is no sample-content fallback. Project
content is cached and invalidated by a Sanity webhook when a project is published,
updated, or unpublished.

To enable automatic project updates:

1. Set `SANITY_REVALIDATE_SECRET` in the Vercel Production environment variables. Use
   the same secret in the Sanity webhook configuration.
2. In Sanity Manage → API → Webhooks, add an enabled webhook with URL
   `https://adyyoga.vercel.app/api/revalidate`, method `POST`, and the matching secret.
3. Trigger on create, update, and delete; set the GROQ filter to `_type == "project"`
   and the projection to `{_type}`. Leave draft and version events disabled.
4. Redeploy after setting the Vercel environment variable, then publish the project
   document in Studio. Saving a draft alone does not publish it to the website.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
