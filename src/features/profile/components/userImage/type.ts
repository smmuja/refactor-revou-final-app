import { ImgHTMLAttributes } from "react";

export type UserImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string | undefined;
};
