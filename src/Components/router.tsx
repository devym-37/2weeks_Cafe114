import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Routes/Home";
import AddCafe from "../Routes/AddCafe";
import EditProfile from "../Routes/EditProfile";
import SocialLogin from "../Routes/SocialLogin";
import VerifyPhone from "../Routes/VerifyPhone";
import Settings from "../Routes/Settings";
import EditMessage from "../Routes/SendMessage";
import Messages from "../Routes/Messages";
import FindPassword from "../Routes/FindPassword";
import Search from "../Routes/Search";

interface IProps {
  handleCafePosition: any;
}
export const LoggedOutRoutes: React.SFC<IProps> = ({ handleCafePosition }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/search"
          Component={Search}
          props={route => ({ query: route.query.q })}
        />
        <Route path="/auth/find" exact component={FindPassword} />
        <Route path="/social-login" exact component={SocialLogin} />
        <Route path="/verify-phone" exact component={VerifyPhone} />
        <Route path="/messages" exact component={Messages} />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </Router>
  );
};

export const LoggedInRoutes: React.SFC<IProps> = handleCafePosition => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cafe/:id/save" exact component={AddCafe} />
      <Route path="/messages" exact component={Messages} />
      <Route path="/messages/edit" exact component={EditMessage} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/profile/edit" exact component={EditProfile} />
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  </Router>
);
