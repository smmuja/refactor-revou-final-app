import { BusinessAddForm, BusinessAddHead } from "features/businessAdd";

export function BusinessAddWrapper() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BusinessAddHead />
      <BusinessAddForm />
    </div>
  );
}
