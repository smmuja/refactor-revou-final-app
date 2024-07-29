import { useGetBusinessDetail } from "features/businessDetail";

export function BusinessEditBusinessType() {
  const businessTypeValue = [
    { business_type: "food_and_beverage" },
    { business_type: "fashion" },
    { business_type: "education" },
    { business_type: "health_care" },
    { business_type: "finance" },
    { business_type: "entertainment" },
    { business_type: "advertising_and_media" },
    { business_type: "construction" },
    { business_type: "manufacturing" },
    { business_type: "hospitality_and_tourism" },
  ];

  const { data } = useGetBusinessDetail();
  return (
    <>
      <select
        name="business_types"
        id=""
        className="w-full py-3 rounded-md"
        defaultValue={data.business_types}
      >
        {businessTypeValue.map((item) => {
          return (
            <option key={item.business_type} value={item.business_type}>
              {item.business_type.split("_").join(" ")}
            </option>
          );
        })}
      </select>
    </>
  );
}
