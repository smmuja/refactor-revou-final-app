import { ReactNode } from "react";

export type BadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  children: ReactNode;
};
