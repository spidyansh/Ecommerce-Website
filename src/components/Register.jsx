import React from "react";

export default function Register() {
  return (
    <>
    <div className="container">
    <div className="form-signin w-25 m-auto login-form" >
      <form>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" 
      color="#cef00c"fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>
        <h1 className="h3 mb-3 fw-normal">Please Register </h1>
        <div className="form-floating">
          <input
            type="trext"
            className="form-control"
            id="floatingInput"
            placeholder="your name"
          style={{backgroundColor:"white"}}/>
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          style={{backgroundColor:"white"}}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        
        <button className="w-100 btn btn-lg btn-primary my-2" type="submit">
          Register
        </button>
      </form>
      </div>
      </div>
    </>
  );
}
