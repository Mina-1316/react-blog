import { FunctionalComponent, Ref } from "npm:preact@10.17.1";
import {
  UtteranceIssueMappingPolicy,
  UtteranceTheme,
} from "../types/utteraance.ts";

interface Props {
  mappingPolicy: UtteranceIssueMappingPolicy;
  label?: string;
  theme: UtteranceTheme;
}

const Comments: FunctionalComponent<Props> = ({
  mappingPolicy,
  label,
  theme,
}) => {
  return (
    <>
      <script
        src="https://utteranc.es/client.js"
        // @ts-ignore: Utterances use custom attributes withoout prefixing them with data-
        repo="Mina-1316/react-blog"
        issue-term={mappingPolicy}
        label={label}
        theme={theme}
      ></script>
    </>
  );
};

export default Comments;
