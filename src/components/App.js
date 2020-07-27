import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Posts from "./Posts/Posts";
import NotFound from "./NotFound/NotFound";
import NavBar from "./NavBar/NavBar";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import Register from "./Register/Register";
import PostPage from "./PostPage/PostPage";
import AddPost from "./AddPost/AddPost";
import EditPost from "./EditPost/EditPost";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/add" component={AddPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
