// import businessImg from "assets/business.png";
import { BusinessImageProps } from "./type";

export function BusinessImage(props: BusinessImageProps) {
  const { src, ...rest } = props;

  return <img {...rest} src={src} alt="Business image" />;
}
