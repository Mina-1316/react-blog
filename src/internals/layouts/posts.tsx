import { FunctionalComponent } from "npm:preact@10.17.1";
import DefaultPostProps from "../types/posttype.ts";

const Post: FunctionalComponent<DefaultPostProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Post;
