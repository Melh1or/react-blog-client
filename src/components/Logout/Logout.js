import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logoutUser } from "../../store/actions/authActions";

const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(logoutUser())
    history.push('/login')
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout