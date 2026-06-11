# Fix Vercel 404 NOT_FOUND

## Why it's broken

Your app is **TanStack Start** (SSR framework), not a plain Vite SPA. The template's build is configured to target **Cloudflare Workers** (see `vite.config.ts` → uses `@lovable.dev/vite-tanstack-config` which sets nitro preset = cloudflare).

When you selected **Vite** preset on Vercel, Vercel just looked for a static `dist/` folder to serve as an SPA. But TanStack Start doesn't output a plain SPA — it outputs a server bundle for Cloudflare. Vercel has no server to run it and no SPA fallback, so every route returns **404 NOT_FOUND**.

This is also why I now recommend a different approach than "Vite preset" — your project isn't a classic Vite app.

## Fix options (pick one)

### Option A — Easiest: stay on Lovable hosting (recommended)
Your site already works perfectly at **https://zanebio.lovable.app**. Delete the Vercel project. Lovable hosting natively supports TanStack Start SSR with zero config.

### Option B — Deploy to Vercel properly
Switch the build target from Cloudflare to Vercel:

1. **Edit `vite.config.ts`** — add a Vercel nitro preset:
   ```ts
   export default defineConfig({
     tanstackStart: { server: { entry: "server" } },
     nitro: { preset: "vercel" },
   });
   ```
2. **Vercel project settings:**
   - Framework Preset: **Other** (not Vite)
   - Build Command: `bun run build`
   - Output Directory: `.vercel/output` (leave blank — nitro writes Vercel's expected structure here automatically)
   - Install Command: `bun install`
3. **Add env vars** in Vercel → Settings → Environment Variables (if you use Lovable Cloud/Supabase, copy `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, etc. from your local `.env`).
4. Redeploy.

### Option C — Deploy to Cloudflare Pages instead
Your build already targets Cloudflare. On Cloudflare Pages:
- Build command: `bun run build`
- Output: `dist`
- Done. Closest to zero-config of the three.

## My recommendation

Go with **Option A**. Vercel adds friction for no benefit here — your app is already live on Lovable hosting and that's the path of least resistance. If you specifically need Vercel (e.g. for a team workflow), do Option B.

## Which would you like me to do?

Tell me A, B, or C and I'll proceed. For B, I'll edit `vite.config.ts`; for A/C no code changes are needed (I'll just give you the click-by-click).