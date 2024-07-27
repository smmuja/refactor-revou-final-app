import { UserImageProps } from "./type";

export function UserImage(props: UserImageProps) {
  const { src, ...rest } = props;

  return (
    <>
      <img {...rest} src={src} alt="User Profile" />
    </>
  );
}
