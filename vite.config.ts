import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const base = env.VITE_BASE_PATH || "/";
  if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base)) {
    throw new Error("VITE_BASE_PATH must be / or a path such as /repository/.");
  }
  const siteUrl = env.VITE_SITE_URL?.trim();
  let canonical: string | undefined;
  if (siteUrl) {
    const url = new URL(siteUrl);
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.search ||
      url.hash
    ) {
      throw new Error(
        "VITE_SITE_URL must be a public HTTP(S) site URL without credentials, query, or fragment.",
      );
    }
    canonical = url.href;
  }
  const socialImagePath = "assets/Logo.png";
  const socialImageUrl = new URL(
    `${base}${socialImagePath}`,
    canonical || "https://brados.cl/",
  ).href;
  return {
    base,
    plugins: [
      react(),
      {
        name: "brados-public-metadata",
        generateBundle() {
          this.emitFile({
            type: "asset",
            fileName: socialImagePath,
            source: readFileSync(new URL("./src/assets/Logo.png", import.meta.url)),
          });
        },
        transformIndexHtml() {
          const imageTags = [
            {
              tag: "meta",
              attrs: { property: "og:image", content: socialImageUrl },
              injectTo: "head-prepend" as const,
            },
            {
              tag: "meta",
              attrs: { name: "twitter:image", content: socialImageUrl },
              injectTo: "head" as const,
            },
          ];
          return canonical
            ? [
                ...imageTags,
                {
                  tag: "link",
                  attrs: { rel: "canonical", href: canonical },
                  injectTo: "head" as const,
                },
                {
                  tag: "meta",
                  attrs: { property: "og:url", content: canonical },
                  injectTo: "head" as const,
                },
              ]
            : imageTags;
        },
      },
    ],
  };
});
