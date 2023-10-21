import { Grid, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const CatList = ({ handleClick }) => {
  const [cate, setCate] = useState([]);
  const getApi = async () => {
    const result = await axios.get("http://localhost:2121/category");
    setCate(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid item xs={12}>
      {cate.map((item) => {
        return (
          <Button
            sx={{ marginRight: 4 }}
            onClick={() => {
              handleClick(item);
            }}
            variant="contained"
          >
            {item}
          </Button>
        );
      })}
    </Grid>
  );
};
