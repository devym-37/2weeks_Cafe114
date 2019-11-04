import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import AddCafe from "../Routes/AddCafe";
import EditProfile from "../Routes/EditProfile";
import LoggedinHome from "../Routes/LoggedinHome";

import SocialLogin from "../Routes/SocialLogin";
import VerifyPhone from "../Routes/VerifyPhone";
import Settings from "../Routes/Settings";
import EditMessage from "../Routes/SendMessage";
import Messages from "../Routes/Messages";
// import Signup from "../Modal/Signup";
import FindPassword from "../Routes/FindPassword";

export const LoggedOutRoutes: React.SFC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search/:term" exact component={Search} />
      <Route path="/cafe/:id" exact component={Detail} />
      {/* <Route path="/login" exact component={Login} /> */}
      <Route path="/auth/find" exact component={FindPassword} />
      <Route path="/social-login" exact component={SocialLogin} />
      <Route path="/verify-phone" exact component={VerifyPhone} />
      {/* <Route path="/signup" exact component={Signup} /> */}
      <Route path="/messages" exact component={Messages} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export const LoggedInRoutes: React.SFC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LoggedinHome} />
      <Route path="/search/:term" exact component={Search} />
      <Route path="/cafef/:id" exact component={Detail} />
      <Route path="/cafe/:id/save" exact component={AddCafe} />
      <Route path="/social-login" exact component={SocialLogin} />
      <Route path="/messages" exact component={Messages} />
      <Route path="/messages/edit" exact component={EditMessage} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/profile/edit" exact component={EditProfile} />

      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
