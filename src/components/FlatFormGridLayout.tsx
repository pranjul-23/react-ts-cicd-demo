export default function FlatFormGridLayout() {
  return (
    <form className="form-grid">
      <input type="text" className="col-4" placeholder="First Name" />
      <input type="text" className="col-4" placeholder="Middle Name" />
      <input type="text" className="col-4" placeholder="Last Name" />

      {/* <!-- Next group (e.g. 2 inputs sharing a className like .col-half) --> */}
      <input type="email" className="col-6" placeholder="Email Address" />
      <input type="tel" className="col-6" placeholder="Phone Number" />

      {/* <!-- Full width input --> */}
      <input type="text" className="col-12" placeholder="Street Address" />

      {/* <!-- Another row with 3 or 4 inputs with another shared className --> */}
      <input type="text" className="col-4" placeholder="City" />
      <input type="text" className="col-4" placeholder="State" />
      <input type="text" className="col-4" placeholder="Zip Code" />

      {/* <!-- Submit button --> */}
      <button type="submit" className="col-12">
        Submit
      </button>
    </form>
  );
}
