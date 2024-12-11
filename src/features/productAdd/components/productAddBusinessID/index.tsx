import { useGetUser } from "features/profile/hooks";

export function ProductAddBusinessID() {
  const { UserBusiness } = useGetUser();

  return (
    <>
      <div className="mb-5">
        <label htmlFor="">Business ID</label>
        <br />
        <select name="business_id" id="" className="w-full py-3 rounded-md">
          {UserBusiness?.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.business_name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
