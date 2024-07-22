import { twMerge } from "tailwind-merge";
import { BadgeProps } from "./type";

export function Badge(props: BadgeProps) {
  const { children, className, ...rest } = props;

  return (
    <span
      {...rest}
      className={twMerge("w-fit px-3 py-0 rounded-xl bg-rose-400", className)}
    >
      {children}
    </span>
  );
}
