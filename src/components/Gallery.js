import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import $ from "jquery";
const Gallery = () => {
  const [keyWord, setKeyWord] = useState("");
  const handleKetWordChange = (e) => {
    setKeyWord(e.target.value);
  };
  const handleFlickrApi = () => {
    const dataUrl =
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=" +
      keyWord +
      "&tagmode=any&format=json&per_page=400&jsoncallback=?";
    const data = $.getJSON(dataUrl);
    
  };

  return (
    <Grid>
      <TextField
        label="Keyword"
        placeholder="Enter Keyword"
        onChange={handleKetWordChange}
        fullWidth
        required
      />
      <Button
        type="Search"
        color="primary"
        variant="contained"
        onClick={handleFlickrApi}
      >
        Search
      </Button>

    </Grid>
  );
};
export default Gallery;
