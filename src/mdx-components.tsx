import {MDXComponents} from "mdx/types";
import Code from "@/components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const modifiedComponent: MDXComponents = {
    ...components,
    code: ({className, children}) => {
      const language = className ? className.replace(/language-/, "") : "text";
      // ClassName이 존재할 경우 True
      const isInline = !className;

      // CodeBlock을 사용하여 코드 블록을 렌더링합니다.
      return <Code language={language} inlined={isInline}>{children}</Code>
    }
  }
  return modifiedComponent;
}