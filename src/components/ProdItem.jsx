import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";

export const ProdItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <h4>{item.name}</h4>
          <img src={item.image} alt="" height={200} width={150} />
          <h4>{item.category}</h4>
          <Button variant="contained" color="success">
            {item.price}
          </Button>
          <br />
          <Rating value={item.rating} />
        </CardContent>
      </Card>
    </Grid>
  );
};
