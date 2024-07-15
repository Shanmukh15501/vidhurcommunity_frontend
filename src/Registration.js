import React from 'react'

function Registration() {

    const onsubmit =(event) => {

        event.preventDefault(); // Prevent default form submission
        
    }
  return (
    <div>


<form className="flex-column" novalidate onSubmit={onsubmit}>
<div className="col-p-4 m-2">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-p-4 m-2">
  <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-p-4 m-2">
  <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-p-4 m-2">
  <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-p-4 m-2">
  <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-p-4 m-2">
  <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-p-4 m-2">
  <div className="form-check mt-2 p-2">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback m-3">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-p-4 m-2">
  <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>


    </div>
  )
}

export default Registration