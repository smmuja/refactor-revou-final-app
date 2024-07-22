import notFoundComponentImg from "assets/notFoundComponent.png";

import { Card } from "features/base";
import { NotFoundComponentProps } from "./type";
import { twMerge } from "tailwind-merge";

export function NotFoundComponent(props: NotFoundComponentProps) {
  const { message, imgUrl, className } = props;

  const messageProp = message ? message : "Nothing found";

  const imgUrlProp = imgUrl ? imgUrl : notFoundComponentImg;
  return (
    <>
      <Card className={twMerge("flex flex-col border-none", className)}>
        <h2>{messageProp}</h2>
        <img src={imgUrlProp} alt="Not found" />
      </Card>
    </>
  );
}
