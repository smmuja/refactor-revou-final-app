import { twMerge } from "tailwind-merge";
import { DataPairProps } from "./type";

export function DataPair(props: DataPairProps) {
  const { label, data, className } = props;

  return (
    <div className={twMerge("flex w-full gap-1", className)}>
      <span className="w-2/5 ">{label}</span>
      <span className="w-3/5 ">{data}</span>
    </div>
  );
}
