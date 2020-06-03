import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import {HomeView} from "./views/HomeView";
import {ImageView} from "./views/ImageView";
import {AboutView} from "./views/AboutView";
import {HelpView} from "./views/HelpView";

export function Main() {
  return (
    <Switch>
      <Route path="/" component={HomeView} exact/>
      <Route path="/images/:imageId" component={ImageView} exact/>
      <Route path="/about" component={AboutView} exact/>
      <Route path="/help" component={HelpView} exact/>

      <Redirect to="/" />
    </Switch>
  );
}
