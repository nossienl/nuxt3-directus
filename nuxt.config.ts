export default defineNuxtConfig({
  css: [
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],
  modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
  directus: {
    url: "https://directus.nossie.nl/",
  },
});
