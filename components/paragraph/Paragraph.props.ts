import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type SizeType = "small" | "large" | "normal";

export interface ParagaphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  classNames?: string;
  size?: SizeType;
}
