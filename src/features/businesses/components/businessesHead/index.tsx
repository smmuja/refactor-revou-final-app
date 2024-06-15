import userImg from "assets/user.png";

export function BusinessesHead() {
  return (
    <div className="flex gap-5 items-center">
      <img src={userImg} alt="User Image" className="size-10 rounded-full" />
      <p>User Name</p>
    </div>
  );
}
