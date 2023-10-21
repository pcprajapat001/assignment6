import React from "react";
import { ProdList } from "./components/ProdList";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card>
      <CardContent>
        <ProdList />
      </CardContent>
    </Card>
  );
}

export default App;
