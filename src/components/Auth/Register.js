import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { registerUser } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector(state => state.auth.user)
  const error = useSelector(state => state.error)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    dispatch(registerUser({ name, email, password, password2 }))
  }

  useEffect(() => {
    dispatch(clearErrors())

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

export default Register