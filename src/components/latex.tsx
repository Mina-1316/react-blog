"use client";
import NextLatex from "react-latex-next";

export default function Latex({ children }: { children: string }) {
  return (
    <NextLatex>
      {children}
    </NextLatex>
  )
}