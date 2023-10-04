import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import mdx from "lume/plugins/mdx.ts";

import allyEmoji from "npm:@fec/remark-a11y-emoji";
import rehypeRemoveComments from "npm:rehype-remove-comments@5";

// === Site configuration ===
const site = lume({
  src: "src",
  includes: "internals",
  dest: "_site",
});

// Assets Configuration
site.copyRemainingFiles();

// === Plugins ===
[
  attributes(),
  base_path(),
  code_highlight(),
  date(),
  jsx_preact(),
  mdx({
    remarkPlugins: [allyEmoji],
    rehypePlugins: [rehypeRemoveComments],
  }),
  multilanguage({
    defaultLanguage: "kr",
    languages: ["kr", "en"],
  }),
  nav(),
  pagefind({
    indexing: {
      rootSelector: ".post-element",
    },
  }),
  tailwindcss(),
  postcss(),
].forEach((plugin) => site.use(plugin));

export default site;
