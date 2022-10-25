import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutApp from "../../components/Layout";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Product from "../../components/Product";

const Home = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3030/products");
        setProductData(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getAllProducts();
  }, []);

  return (
    <LayoutApp>
      <Grid container spacing={3}>
        {productData.map((ele) => (
          <Grid item key={ele._id} xs={12} sm={6} md={2}>
            <Product product={ele} />
          </Grid>
        ))}
      </Grid>
    </LayoutApp>
  );
};

export default Home;
