import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";

export default function Header({ setOpenfav }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Container maxWidth="md">
          <Box display="flex" mr={1} ml={1}>
            <Box flexGrow={1}>
              <Typography variant="h6">Gifs</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpenfav(true)}
              >
                Favourites
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
