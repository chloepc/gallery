import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {ImageView} from "./views/ImageView";

export function Main() {
  return (
    <Switch>
      <Route path="/" component={HomeView} exact/>
      <Route path="/image" component={ImageView} exact/>
      <Redirect to="/" />
    </Switch>
  );
}
