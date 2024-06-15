import businessImg from "assets/business.png";

export function ProductsHead() {
  return (
    <div className="flex gap-5 items-center mb-5">
      <img
        src={businessImg}
        alt="business picture"
        className="size-10 rounded-full"
      />
      <p>Business Name</p>
    </div>
  );
}
