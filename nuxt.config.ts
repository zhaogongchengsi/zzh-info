import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/color-mode"],
  components: ["~/components"],
  css: ["~/assets/variable.scss", "@unocss/reset/tailwind.css", "~/assets/main.scss"],
  // @ts-ignore
  colorMode: {
    classSuffix: "",
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
      noscript: [{ children: "JavaScript is required" }],
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
