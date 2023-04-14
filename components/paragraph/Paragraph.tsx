import { ParagaphProps } from "./Paragraph.props";
import classNames from "classnames";
import cn from "classnames";
import styles from "./Paragraph.module.css";
export const Paragraph = ({ children, size = "normal", className = "", ...props }: ParagaphProps): JSX.Element => {
  return (
    <p
      className={cn(
        {
          [styles["font-size-small"]]: size === "small",
          [styles["font-size-normal"]]: size === "normal",
          [styles["font-size-large"]]: size === "large",
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
