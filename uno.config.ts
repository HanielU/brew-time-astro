import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
  theme: {
    colors: {
      primary: "#D3AD7F",
      accent: "#5E361C",
      dark: "#101011",
      light: "#FFF6EB",
    },

    fontFamily: {
      bebas: "sans-serif",
      outfit: "sans-serif",
      poppins: "sans-serif",
      inter: "sans-serif",
    },
  },

  configDeps: ["./my-preset.ts"],

  rules: [],

  shortcuts: [],

  variants: [],

  preflights: [
    {
      getCSS: () => `
        :root {
          -webkit-tap-highlight-color: transparent;
        }

        body {
          position: relative;
          overflow-x: hidden;
        }
      `,
    },
  ],

  presets: [
    myPreset,
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetWebFonts({
      fonts: {
        bebas: "Bebas Neue",
        outfit: {
          name: "Outfit",
          weights: ["400", "500", "600", "700", "800", "900"],
        },
        poppins: {
          name: "Poppins",
          weights: ["400", "500", "600", "700", "800", "900"],
        },
        inter: {
          name: "Inter",
          weights: ["400", "500", "600", "700", "800", "900"],
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
