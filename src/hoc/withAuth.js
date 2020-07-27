import React, {useEffect} from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  const WithAuth = ({user, history, ...props}) => {
    useEffect(() => {
      if (!user) {
        history.push('/')
      }
    }, [])

    return <ChildComponent {...props} />
  }

  const mapStateToProps = state => ({
    user: state.auth.user
  })

  return connect(mapStateToProps)(WithAuth)
}