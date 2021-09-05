import React from "react";
import { TextField, InputAdornment, Box } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Search as SearchIcon } from "@material-ui/icons";
import UseSearch from "./UseSearch";
import DetailsDialog from "../Dialogs/DetailsDialog";

export default function SearchBar() {
  const {
    loading,
    options,
    handleChange,
    gifSelect,
    setGifSelect,
    detailsModal,
    setDetailsModal,
    data,
  } = UseSearch();

  return (
    <>
      <Box m={1}>
        <Autocomplete
          freeSolo
          disableClearable
          onInputChange={handleChange}
          options={options}
          loading={loading}
          onChange={(event, selectedEvent) => {
            console.log(selectedEvent);
            setGifSelect(data.filter((e) => e.title === selectedEvent)[0]);
            setDetailsModal(true);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="dense"
              placeholder="Search"
              width={300}
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <InputAdornment position="start" className="searchIcons">
                    <SearchIcon style={{ fill: "#545454" }} />
                  </InputAdornment>
                ),
              }}
            />
          )}
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
    </>
  );
}
