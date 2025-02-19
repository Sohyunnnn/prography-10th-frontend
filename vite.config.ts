import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
});
