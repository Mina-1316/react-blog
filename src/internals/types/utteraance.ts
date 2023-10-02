/**
 * The theme of utterance. See https://utteranc.es/ for more details.
 */
export enum UtteranceTheme {
  github_light = "github-light",
  github_dark = "github-dark",
  preferred_color_scheme = "preferred-color-scheme",
  github_dark_orange = "github-dark-orange",
  icy_dark = "icy-dark",
  dark_blue = "dark-blue",
  photon_dark = "photon-dark",
  boxy_light = "boxy-light",
  gruvbox_dark = "gruvbox-dark",
}

/**
 * The policy to map the issue to the page. Excluded options are not supported bcause of the limitations of lume/utterances.
 */
export enum UtteranceIssueMappingPolicy {
  page_pathname = "pathname",
  page_url = "url",
  page_title = "title",
}
