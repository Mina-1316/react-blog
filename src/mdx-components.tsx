import {MDXComponents} from "mdx/types";
import { useMDXComponents as getThemeComponents } from "nextra-theme-blog";
import {  useMDXComponents as getDocThemeComponents } from "nextra-theme-docs";

const themeComponents = getThemeComponents();
const docThemeComponents = getDocThemeComponents();

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const modifiedComponent: MDXComponents = {
    ...components,
    ...themeComponents,
    code: docThemeComponents.code
  }
  return modifiedComponent;
}