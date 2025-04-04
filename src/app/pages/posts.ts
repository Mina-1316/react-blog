import {normalizePages} from "nextra/normalize-pages";
import {getPageMap} from "nextra/page-map";

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap("/pages"),
    route: "/pages"
  })

  return directories
    .filter(post => post.name !== "index");

}
