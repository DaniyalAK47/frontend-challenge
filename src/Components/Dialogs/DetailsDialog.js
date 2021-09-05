import React from "react";
import {
  Box,
  Modal,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function DetailsDialog({
  open,
  setOpen,
  title,
  url,
  userName,
  embedUrl,
}) {
  return (
    <Modal open={open} onClose={() => setOpen(false)} style={{ top: "20%" }}>
      <Container maxWidth="md" style={{ backgroundColor: "white" }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexGrow={1}>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Box mr={1}>
            <img height={400} width={400} src={url} alt="Loading..." />
          </Box>
          <Box>
            <Box>
              <Typography variant="h6">Username:</Typography>
              <Typography>{userName}</Typography>
            </Box>

            <Box>
              <Typography variant="h6">Embed Url:</Typography>
              <Typography>{embedUrl}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
}
