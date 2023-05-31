import typescript from "@rollup/plugin-typescript";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [typescript()],
  },
});
