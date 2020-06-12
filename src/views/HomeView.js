import React from "react";
import { Gallery } from "./Gallery";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";

export function HomeView() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        HomeView
      </Typography>
      <Gallery />
    </Container>
  );
}
