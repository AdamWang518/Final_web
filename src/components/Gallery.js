import React, { useState } from "react";
import { Grid, TextField, Button, Container } from "@material-ui/core";
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
    data.done(function (msg) {
      $.each(msg.items, function (i, item) {});
      
    });
    data.fail(function (msg) {
      console.log(msg);
    });
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
      <Container></Container>
    </Grid>
  );
};
export default Gallery;
