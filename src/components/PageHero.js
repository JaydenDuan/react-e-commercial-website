import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
const PageHero = ({ title, product }) => {
  return (
    <Box
      sx={{
        background: "var(--clr-primary-10)",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent:'between-space',
        marginBottom:'3rem'
      }}
    >
      <Box sx={{marginLeft:'0rem'}}>
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to='/products'>/Products</Link>}
          /{title}
        </h3>
      </Box>
    </Box>
  );
};


export default PageHero;
