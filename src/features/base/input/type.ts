import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
};
