// import React, { useState, useEffect } from "react";
// import { CatList } from "./CatList";

// import axios from "axios";
// import { Card, CardContent, Grid } from "@mui/material";
// import { ProdItem } from "./ProdItem";

// export const ProdList = () => {
//   const [data, setData] = useState([]);
//   const [copyData, setcopyData] = useState([]);
//   const [SelectCat, setSelectCat] = useState([]);

//   const getData = async () => {
//     const result = await axios.get("http://localhost:2121/mcq");
//     setData(result.data);
//     setcopyData(result.data);
//   };

//   useEffect(() => {
//     const filtered = copyData.filter((item) => item.category === SelectCat);
//     setData(filtered);
//   }, [SelectCat]);

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <React.Fragment>
//       <Card>
//         <CardContent>
//           <Grid container spacing={2} align="center">
//             <Grid item xs={12}>
//               <CatList setSelectCat={setSelectCat} />
//             </Grid>
//             {data.map((item) => (
//               <ProdItem item={item} />
//             ))}
//           </Grid>
//         </CardContent>
//       </Card>
//     </React.Fragment>
//   );
// };

import React, { useState, useEffect } from "react";
import { CatList } from "./CatList";

import axios from "axios";
import { Card, CardContent, Grid, Rating, TextField } from "@mui/material";
import { ProdItem } from "./ProdItem";

export const ProdList = () => {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [text, setText] = useState("");
  const [rate, setrate] = useState("");
  console.log("rating", rate);
  console.log(data);

  const getApi = async () => {
    const result = await axios.get("http://localhost:2121/ele");
    setData(result.data);
    setDataCopy(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  const handleClick = (item) => {
    console.log("filtdata", item);
    const filt = dataCopy.filter((elem) => elem.category === item);
    setData(filt);
  };
  useEffect(() => {
    const search = dataCopy.filter(
      (item) =>
        item.name.toUpperCase().includes(text.toUpperCase()) ||
        item.price.toString().includes(Number(text))
    );
    setData(search);
  }, [text]);
  useEffect(() => {
    const filt = dataCopy.filter((elem) => elem.rating === Number(rate));
    setData(filt);
  }, [rate]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
          label="Search..."
        />
      </Grid>
      <Grid item xs={4}>
        <Rating onChange={(e) => setrate(e.target.value)} />
      </Grid>
      <CatList handleClick={handleClick} />
      {data.map((item) => {
        return <ProdItem item={item} />;
      })}
    </Grid>
  );
};
