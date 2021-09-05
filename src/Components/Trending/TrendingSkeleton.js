import React from "react";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default function TrendingSkeleton() {
  return (
    <>
      <Box m={1}>
        <Typography>Trending</Typography>
      </Box>
      <Box>
        <ImageList rowHeight={200} cols={5}>
          <ImageListItem cols={1}>
            <Skeleton height={200} variant="rect" />
          </ImageListItem>

          <ImageListItem cols={2}>
            <Skeleton height={200} variant="rect" />
          </ImageListItem>

          <ImageListItem cols={2}>
            <Skeleton height={200} variant="rect" />
          </ImageListItem>

          <ImageListItem cols={1}>
            <Skeleton height={200} variant="rect" />
          </ImageListItem>

          <ImageListItem cols={1}>
            <Skeleton height={200} variant="rect" />
          </ImageListItem>

          <ImageListItem cols={3}>
            <Skeleton height={200} variant="rect" />
          </ImageListItem>
        </ImageList>
      </Box>
    </>
  );
}
