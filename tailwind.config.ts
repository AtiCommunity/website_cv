import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      "synthwave",
    ],
  },
} satisfies Config;
