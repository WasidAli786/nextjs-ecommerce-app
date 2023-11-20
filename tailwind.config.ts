import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //* customize tailwind css container class
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xs: "1.25rem",
        sm: "1.25rem",
        md: "2.375rem",
        lg: "2.375rem",
        xl: "4rem",
        "2xl": "5rem",
        "3xl": "10rem",
      },
    },

    //* customize tailwind css breakpoints
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "primary-dark": {
          extend: "dark",
          colors: {
            background: "#111",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#4338ca",
            },
          },
        },
        // light: {
        //   colors: {
        //     background: "#0D001A",
        //     foreground: "#ffffff",
        //     primary: {
        //       DEFAULT: "#4338ca",
        //     },
        //     // secondary: {
        //     //   DEFAULT: '#6622A3',
        //     // }
        //   },
        // },
      },
    }),
  ],
};
export default config;
