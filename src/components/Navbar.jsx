import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">
      Emart
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className='buttons'>
        <NavLink to="/login" className='btn btn-outline-dark ms-2'><i className='fa fa-sign-in me-1'></i>Login</NavLink>
        <NavLink to="/register" className='btn btn-outline-dark ms-2'><i className='fa fa-user-plus me-1'></i>Register</NavLink>
        <NavLink to="/cart" className='btn btn-outline-dark ms-2'><i className='fa fa-shopping-cart me-1'></i>cart (0)</NavLink>
      </div>
    </div>
  </div>
</nav>

    </>

  )
}
