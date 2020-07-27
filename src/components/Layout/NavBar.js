import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector(state => state.auth.user)

  const guestLinks = (
    <Fragment>
      <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
      <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
    </Fragment>
  )

  const loginLinks = (
    <Fragment>
      <Link className="nav-item nav-link" to="#">{user && user.name}</Link>
      <Link className="nav-item nav-link" to="/logout">Logout</Link>
    </Fragment>
  )

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">Blog</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/add">Add</NavLink>
          {user ? loginLinks : guestLinks}
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar