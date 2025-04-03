"use client"

import {atomOneDark, atomOneLight, Code as InlineCode, CopyBlock} from "react-code-blocks"

export interface CodeProps {
  language?: string;
  children: string;
  inlined?: boolean;
}

// TODO: Light/Dark 테마 추가 시, 아래 내용이 스위칭 될 수 있도록 프로그래밍 할 것
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LIGHT_THEME = atomOneLight
const DARK_THEME = atomOneDark

export default function Code({
  language = "plain",
  inlined = false,
  children
                             }:CodeProps) {
  if (inlined) {
    return (
      <InlineCode language={language} text={children} theme={DARK_THEME}/>
    )
  }
  return (
    <CopyBlock language={language} text={children} theme={DARK_THEME} />
  )

}