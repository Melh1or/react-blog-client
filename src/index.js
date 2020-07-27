import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwtDecode from "jwt-decode";
import jsCookie from "js-cookie";

import App from './components/App'

import store from "./store";
import { logoutUser, setCurrentUser} from "./store/actions/authActions";


const jwt = jsCookie.get('jwt')
if (jwt) {
  const decoded = jwtDecode(jwt)
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000

  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
