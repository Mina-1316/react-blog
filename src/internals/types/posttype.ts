import PageProps from "./pagetypes.ts";
import { NavPluginProps, SearchPluginProps } from "./plugintypes.ts";

export default interface DefaultPostProps
  extends PageProps, NavPluginProps, SearchPluginProps {
  title: string;
  layout: string;
  writer: string;
  tags: string[];
  children: string;
}
