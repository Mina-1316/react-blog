import { FunctionalComponent } from "npm:preact@10.17.1";
import PageProps from "../types/pagetypes.ts";

const Index: FunctionalComponent<PageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Index;
