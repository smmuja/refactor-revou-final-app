import { BusinessDetailEditButton } from "features/businessDetail";

export function BusinessDetailHead() {
  return (
    <div className="flex justify-between mb-5 items-center">
      <h2 className="font-semibold">Business Information</h2>
      <BusinessDetailEditButton />
    </div>
  );
}
