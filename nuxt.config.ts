export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: false },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
  ],
  content: { contentHead: false },
  build: {
    transpile: ["gsap"],
  },
  googleFonts: {
    display: "swap",
    families: {
      Poppins: {
        wght: [400, 800],
      },
      Montserrat: {
        wght: [300, 400, 500, 800],
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
  gtag: {
    id: "G-CGSR4GB4GN",
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  site: {
    url: "https://portfolio.matteozucchetti.it",
    trailingSlash: true,
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
});
