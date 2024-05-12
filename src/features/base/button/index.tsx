import { ButtonProps } from "./type";
import { twMerge } from "tailwind-merge";

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={twMerge("rounded-md p-3 bg-slate-200 w-full", className)}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}
