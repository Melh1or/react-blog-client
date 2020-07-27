import React, {useEffect} from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../store/actions/authActions";

const Logout = ({ logoutUser, history }) => {
  useEffect(() => {
    logoutUser()
    history.push('/login')
  }, [])

  return (
    <div>Logout</div>
  )
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(Logout)