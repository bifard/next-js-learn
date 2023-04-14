import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type SizeType = "small" | "normal";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: SizeType;
  children: ReactNode;
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
