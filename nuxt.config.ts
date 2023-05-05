import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ],
  components: ["~/components", "~/views"],
  css: ["~/assets/variable.scss", "@unocss/reset/tailwind.css", "~/assets/main.scss"],

  colorMode: {
    classSuffix: "",
  },

  devtools: {
    // Enable devtools (default: true)
    enabled: false,
  },

  googleFonts: {
    download: true,
    overwriting: false,
    families: {
      Inter: true,
      Roboto: true,
      Mulish: true,
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", type: "image/png", href: "/logo-96.png" },
        { rel: "apple-touch-icon", href: "/logo-48.png" },
      ],
      titleTemplate: (title) => `ZZH | ${title}`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Nuxt Starter" },
      ],
      script: [
        {
          type: "text/javascript",
          src: "/tilt.js",
        },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
  },

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  devServer: {
    port: 3060,
    host: "localhost",
  },

  imports: {
    dirs: ["~/composables"],
  },

  runtimeConfig: {
    github: {
      user: process.env.GITHUB_USER_NAME,
      token: process.env.GITHUB_TOKEN,
    },
    issueToken: process.env.ISSUETOKEN,
  },
});
