import React from "react";
import { Grid, Button } from "@mui/material";

export const CatItem = ({ item, setSelectCat }) => {
  return (
    <Grid item xs={3}>
      <Button
        onClick={() => setSelectCat(item)}
        color="warning"
        variant="contained"
        fullWidth
      >
        {item}
      </Button>
    </Grid>
  );
};
