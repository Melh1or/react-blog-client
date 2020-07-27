import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";

import { registerUser } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";

const Register = ({ user, registerUser, error, history, clearErrors }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    registerUser({ name, email, password, password2 })
  }

  useEffect(() => {
    clearErrors()

    if(user) {
      history.push('/')
    }
  }, [user])

  return (
    <div className="row">
      <form className="card p-3 mx-auto col-md-6" onSubmit={onSubmit}>
        <h2 className="text-center">Register</h2>

        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {error && <div className="text-danger">{error.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && <div className="text-danger">{error.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-danger">{error.password}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
          {error && <div className="text-danger">{error.password2}</div>}
        </div>

        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.error
})

const mapDispatchToProps = {
  registerUser,
  clearErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)