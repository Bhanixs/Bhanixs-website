// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
//
// The Lovable config's nitro deploy plugin only runs inside the Lovable sandbox unless
// `nitro` is explicitly set here — so a plain `vite build` (e.g. Vercel's git-triggered
// build) would otherwise skip it entirely. Passing an explicit preset enables it for both
// targets: Vercel sets process.env.VERCEL during its build, everything else keeps the
// existing Cloudflare Workers output.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: process.env.VERCEL ? "vercel" : "cloudflare-module",
  },
});
