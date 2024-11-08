import { defineConfig, rollupVersion } from "vite";
import preact from "@preact/preset-vite";
import mdx from "@mdx-js/rollup";
import fs from "node:fs";
import { Plugin, UserConfig } from "vite";
import path from "node:path";

const pagesFolder = "src/pages";

function customRoutes(): Plugin {
  return {
    name: "custom-routes",
    config(config): UserConfig {
      const input: Record<string, string> = {};

      function convertFileRoute(name: string) {
        return name === "index.mdx" ? "" : name.replace(".mdx", "");
      }

      function addPagesToInput(dir: string) {
        const files = fs.readdirSync(dir, { withFileTypes: true });
        for (const file of files) {
          const fullPath = path.join(dir, file.name);
          if (file.isDirectory()) {
            addPagesToInput(fullPath);
          } else if (file.name.endsWith(".mdx")) {
            // MDX Extension Handling
            const relativePath = path.relative(pagesFolder, dir);
            input[path.join(relativePath, convertFileRoute(file.name))] =
              fullPath;
          }
        }
      }
      addPagesToInput(pagesFolder);

      input["main"] = path.resolve(__dirname, "src/index.html");

      return {
        ...config,
        build: {
          ...config.build,
          rollupOptions: {
            ...config.build?.rollupOptions,
            input,
          },
        },
      };
    },
  };
}

export default defineConfig({
  plugins: [preact(), mdx(), customRoutes()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
