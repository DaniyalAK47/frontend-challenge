import React from "react";
import {
  Box,
  Modal,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ImageGrid from "../Common/ImageGrid";

export default function FavDialog({ open, setOpen, fav }) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      style={{ top: "20%", height: "50vh", overflow: "auto" }}
    >
      <Container maxWidth="md" style={{ backgroundColor: "white" }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexGrow={1}>
            <Typography variant="h5">Favourites</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <ImageGrid trendingGifs={fav} />
        </Box>
      </Container>
    </Modal>
  );
}
