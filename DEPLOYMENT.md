# Deployment Guide — Step by Step

Get your portfolio live in **under 5 minutes**.

---

## Prerequisites

- A free **GitHub** account (you already have one — `Maria-cpp`)
- A free **Vercel** account ([vercel.com](https://vercel.com))
- **Node.js 18+** and **Git** installed locally

---

## Step 1 — Test locally first (optional but recommended)

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. You should see your portfolio.

> First install takes 1–3 minutes (downloads ~250MB of dependencies).

If everything looks good, stop the dev server (`Ctrl+C`).

---

## Step 2 — Push to GitHub

Create a new repository on GitHub:

1. Go to **https://github.com/new**
2. Repository name: `portfolio` (or whatever you like)
3. Set it to **Public**
4. **Do NOT** check "Add README" / "Add .gitignore" / "Add license" (we already have those)
5. Click **Create repository**

Then in your terminal, from this folder:

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/Maria-cpp/portfolio.git
git push -u origin main
```

> Replace `Maria-cpp/portfolio` with your actual repo URL if you named it differently.

---

## Step 3 — Deploy to Vercel

1. Go to **https://vercel.com/new**
2. Sign in with **GitHub** (first time only — authorize Vercel to access your repos)
3. Find your `portfolio` repo in the list → click **Import**
4. **Framework preset** will auto-detect as **Next.js**. Leave all other settings as default.
5. Click **Deploy**

Wait ~60 seconds. Vercel will:
- Run `npm install`
- Run `npm run build`
- Deploy to a global CDN

When it finishes, you'll see confetti + your live URL: something like `https://portfolio-abc123.vercel.app`

---

## Step 4 — Get a nicer URL

Vercel gives you a free `.vercel.app` subdomain:

1. Open your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Type your preferred subdomain, e.g. `maria-naseem` (the full URL becomes `maria-naseem.vercel.app`)
4. Click **Add**

Now your portfolio lives at **`https://maria-naseem.vercel.app`**.

---

## Step 5 — (Optional) Custom domain

If you own a domain (e.g. `marianaseem.com`):

1. **Settings → Domains → Add** → enter `marianaseem.com`
2. Vercel shows you DNS records to add
3. Add them at your domain registrar (Namecheap, GoDaddy, etc.)
4. Wait 5–60 mins for DNS to propagate
5. Done — HTTPS is automatic

---

## Updating your site

Anytime you change content (e.g. edit `lib/data.ts`):

```bash
git add .
git commit -m "update: [describe change]"
git push
```

Vercel auto-deploys within ~60 seconds. No further action needed.

---

## Troubleshooting

**Build fails on Vercel?**
Check the build logs in Vercel dashboard. Most common fix: delete `node_modules` + `package-lock.json` locally, run `npm install` again, commit the new lockfile.

**Local `npm install` is slow?**
That's normal the first time. Subsequent runs use the cache.

**Want to test the production build locally?**

```bash
npm run build
npm start
```

---

## What you can deploy elsewhere

This project also works on:

- **Netlify** — Same process, build cmd `npm run build`, publish dir `.next`
- **Cloudflare Pages** — Same process, framework preset Next.js
- **Render**, **Railway**, **Fly.io** — All support Next.js

Vercel is recommended because it's made by the Next.js team — zero config needed.
