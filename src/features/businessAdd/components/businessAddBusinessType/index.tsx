export function BusinessAddBusinessType() {
  return (
    <>
      <div className="mb-5">
        <label htmlFor="">Business Type</label>
        <br />
        <select name="business-type" id="" className="w-full py-3 rounded-md">
          <option value="">Fashion</option>
          <option value="">Education</option>
          <option value="">Health care</option>
          <option value="">Finance</option>
          <option value="">Entertainment</option>
          <option value="">Advertising and Media</option>
          <option value="">Manufacturing</option>
          <option value="">Hospitality and Tourism</option>
        </select>
      </div>
    </>
  );
}
