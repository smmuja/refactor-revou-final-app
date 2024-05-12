import { twMerge } from "tailwind-merge";
import { InputProps } from "./type";

export function Input(props: InputProps) {
  const { className, containerClassName, labelClassName, label, ...rest } =
    props;

  return (
    <div className={twMerge("", containerClassName)}>
      {label && <p className={twMerge("", labelClassName)}>{label}</p>}

      <input className={twMerge("", className)} {...rest} />
    </div>
  );
}
