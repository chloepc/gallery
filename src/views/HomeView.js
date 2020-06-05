import React from "react";
import {Gallery} from "./Gallery";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

export function HomeView() {
  return (
    <Container>
      HomeView
      <Link to="/about">About</Link>
      <Gallery/>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </Container>
  );
}
