import React from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import UseTrending from "./UseTrending";
import DetailsDialog from "../Dialogs/DetailsDialog";
import TrendingSkeleton from "./TrendingSkeleton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ImageGrid from "../Common/ImageGrid";
import FavDialog from "../Dialogs/FavDialog";

export default function Trending({ openFav, setOpenFav }) {
  const {
    loading,
    trendingGifs,
    detailsModal,
    setDetailsModal,
    gifSelect,
    setGifSelect,
    initialLoad,
    gifFav,
    setGifFav,
    ordering,
    setOrdering,
    addRemoveFav,
  } = UseTrending();

  return (
    <>
      {initialLoad ? (
        <TrendingSkeleton />
      ) : (
        <>
          <Box m={1} display="flex" alignItems="center">
            <Box display="flex" flexGrow={1}>
              <Typography variant="h6">Trending</Typography>
            </Box>
            <Box mr={1}>
              <Typography>Order by trending date:</Typography>
            </Box>
            <Box>
              <Select
                value={ordering}
                onChange={(event) => setOrdering(event.target.value)}
              >
                <MenuItem value="random">Random</MenuItem>
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box m={1}>
            <ImageGrid
              addRemoveFav={addRemoveFav}
              gifFav={gifFav}
              setDetailsModal={setDetailsModal}
              setGifSelect={setGifSelect}
              trendingGifs={trendingGifs}
            />
          </Box>

          <DetailsDialog
            open={detailsModal}
            setOpen={setDetailsModal}
            title={gifSelect.title ? gifSelect.title : ""}
            url={gifSelect.images ? gifSelect.images.original.url : ""}
            embedUrl={gifSelect.embed_url ? gifSelect.embed_url : ""}
            userName={gifSelect.username ? gifSelect.username : ""}
          />

          <FavDialog open={openFav} setOpen={setOpenFav} fav={gifFav} />

          <Backdrop style={{ zIndex: 10 }} open={loading}>
            <CircularProgress color="white" />
          </Backdrop>
        </>
      )}
    </>
  );
}
