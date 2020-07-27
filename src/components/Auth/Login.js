import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router";

import { loginUser } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector(state => state.auth.user)
  const error = useSelector(state => state.error)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    dispatch(loginUser({ email, password }))
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
        <h2 className="text-center">Login</h2>
        <div className="form-group">
          <label className="email">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && <div className="text-danger">{error.email}</div>}
        </div>

        <div className="form-group">
          <label className="password">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-danger">{error.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      </form>
    </div>
  );
}

export default Login