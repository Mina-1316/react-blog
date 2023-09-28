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

const site = lume({
  src: "src",
  includes: "internals",
  dest: "_site"
});

site.use(attributes());
site.use(base_path());
site.use(code_highlight());
site.use(date());
site.use(esbuild());
site.use(jsx_preact());
site.use(multilanguage());
site.use(nav());
site.use(pagefind());
site.use(tailwindcss());
site.use(postcss());

export default site;
