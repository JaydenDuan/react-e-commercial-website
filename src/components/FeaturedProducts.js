import React from "react";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  return (
    <Box sx={{mb:'3rem'}}>
      
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb:'2rem' }}
      >
        <h3 style={{ fontFamily: "cursive" }}>Featured Products</h3>
        <div
          style={{
            width: "6rem",
            height: "0.25rem",
            background: "var(--clr-primary-5)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
      </Box>
      {loading && <Loading></Loading>}
      {error &&<Error></Error>}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ImageList
          sx={{ width: 650, height: 450, mt: "1rem" }}
          cols={3}
          rowHeight={200}
        >
          {featured.map((product) => (
           <Product key={product.id} product={product}></Product>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};



export default FeaturedProducts;
