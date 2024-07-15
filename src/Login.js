import React, { useState } from 'react';
import Registration from './Registration'


function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // You can add form handling logic here (e.g., validation, submission)
  };
  const handletoggle =() =>
    {
      set_registration(!registration)
    } 
    const [registration,set_registration]  = useState(false)

  return (
    <div className='container-fluid'>
    
    <div class="form-check m-2 p-2 form-switch">
        <input class="form-check-input" onChange={handletoggle}  type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
        <label class="form-check-label" for="flexSwitchCheckChecked">
          {registration?(<div className='container-fluid'><h4>Register User</h4></div>):(<div className='container-fluid m-2'><h4>Login User</h4></div>)}
        </label>
    </div>

    <div className="p-3 mt-5 bg-white text-dark border border-dark">
      {registration ? (
        <Registration />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="m-4" style={{ fontSize: '150%' }}>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="m-4" style={{ fontSize: '150%' }}>
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              name="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              {' '}
              Remember me
            </label>
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </center>
        </form>
      )}
    </div>
    </div>
  );
}

export default Login;