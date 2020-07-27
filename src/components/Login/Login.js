import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";

const Login = ({ user, loginUser, error, history, clearErrors }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    loginUser({ email, password })
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

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.error
})

const mapDispatchToProps = {
  loginUser,
  clearErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)