import { ReactNode } from "react";

export type DataPairProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  label: string;
  data: string | ReactNode;
};
