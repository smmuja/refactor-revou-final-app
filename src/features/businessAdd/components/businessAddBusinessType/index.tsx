export function BusinessAddBusinessType() {
  return (
    <>
      <div className="mb-5">
        <label htmlFor="">Business Type</label>
        <br />
        <select name="business_types" id="" className="w-full py-3 rounded-md">
          <option value="food_and_beverage">Food and Beverage</option>
          <option value="fashion">Fashion</option>
          <option value="education">Education</option>
          <option value="health_care">Health care</option>
          <option value="finance">Finance</option>
          <option value="entertainment">Entertainment</option>
          <option value="advertising_and_media">Advertising and Media</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="hospitality_and_tourims">
            Hospitality and Tourism
          </option>
        </select>
      </div>
    </>
  );
}
