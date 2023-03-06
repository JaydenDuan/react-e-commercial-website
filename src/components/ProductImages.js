import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMainImage] = useState(images[0]);
  useEffect(() => {
    setMainImage(images[0])
  }, [images]);
  return (
    <Box sx={{transform: "translate(10%, 0%)", height:'550px'}}>
      <img
        src={main.url}
        alt="mainImage"
        style={{
          width: "70%",
          display: "block",
          objectFit: "cover",
          height:'70%'
        }}
      ></img>

      <Grid
        container
        spacing={0.5}
        sx={{ display: "flex", flexDirection: "row", mt: "1rem" }}
      >
        {images.map((image, index) => {
          return (
            <Grid key={index} item sx={{ width: "14.05%" }}>
              <img
                src={image.url}
                style={{
                  cursor: "pointer",
                  height: "100px",
                  width: "100%",
                  objectFit: "cover",
                  
                }}
                alt={`${index}`}
                onClick={() => {
                  setMainImage(images[index]);
                }}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};



export default ProductImages;
