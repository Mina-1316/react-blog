import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  images: {
    unoptimized: true,
  }
};

const withNextra = nextra({
  latex: {
    renderer: "katex",
    options: {
      output: "mathml"
    }
  },
  search: true,
})

export default withNextra(nextConfig);
