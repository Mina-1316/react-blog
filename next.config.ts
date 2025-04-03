import type { NextConfig } from "next";
import createMdx from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "md", "mdx"]
};

const withMdx = createMdx({

})

export default withMdx(nextConfig);
