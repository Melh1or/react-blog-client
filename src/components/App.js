import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Posts from "./Post/Posts";
import NotFound from "./NotFound/NotFound";
import NavBar from "./Layout/NavBar";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Register from "./Auth/Register";
import PostPage from "./Post/PostPage";
import AddPost from "./Post/AddPost";
import EditPost from "./Post/EditPost";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => (
  <div>
    <NavBar/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Posts}/>
        <Route path="/posts/:id" component={PostPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/add" component={AddPost}/>
        <PrivateRoute path="/edit/:id" component={EditPost}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </div>
);

export default App;
