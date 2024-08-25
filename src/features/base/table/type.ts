import { ReactNode, TableHTMLAttributes } from "react";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  children?: ReactNode;
  label?: string;
  data?: string | number | ReactNode;
};
