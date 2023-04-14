import { ReactNode } from "react";

type TypeTag = "h1" | "h2" | "h3";

export interface HtagProps {
  tag: TypeTag;
  children: ReactNode;
}
