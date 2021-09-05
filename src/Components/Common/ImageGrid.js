import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function ImageGrid({
  trendingGifs,
  setDetailsModal = false,
  setGifSelect = false,
  gifFav = false,
  addRemoveFav = false,
}) {
  return (
    <ImageList rowHeight={200} cols={5} style={{ justifyContent: "center" }}>
      {trendingGifs.map((val, index) => (
        <ImageListItem
          key={val.id}
          cols={index % 3 ? 2 : index % 2 ? 2 : 1}
          style={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <img
            style={{ objectFit: "cover" }}
            src={val.images.fixed_height_small.url}
            alt="loading"
            onClick={
              setDetailsModal &&
              (() => {
                setDetailsModal(true);
                setGifSelect(val);
              })
            }
          />
          {gifFav && (
            <ImageListItemBar
              actionIcon={
                <IconButton onClick={() => addRemoveFav(val)}>
                  {gifFav.filter((e) => e.id === val.id).length > 0 ? (
                    <StarIcon color="primary" />
                  ) : (
                    <StarBorderIcon color="primary" />
                  )}
                </IconButton>
              }
            />
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
