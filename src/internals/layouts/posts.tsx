import { FunctionalComponent } from "npm:preact@10.17.1";
import DefaultPostProps from "../types/posttype.ts";

const Post: FunctionalComponent<DefaultPostProps> = ({
  url,
  title,
  children,
  tags,
  nav,
  date,
}) => {
  const breadcrumbs = nav.breadcrumb(typeof url === "string" ? url : "/");

  return (
    <div>
      {breadcrumbs.map((breadcrumb) => (
        <p>{breadcrumb.slug}</p>
      ))}
      <h1>{title}</h1>
      <p>{date?.toLocaleString()}</p>
      <p>{tags.join(", ")}</p>
      <div>{children}</div>
    </div>
  );
};

export default Post;
