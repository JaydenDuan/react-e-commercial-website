import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
const ListView = ({ products }) => {
  return (
    <Box>
    <ImageList cols={1} rowHeight={244} >
      {products.map((product) => {
        return (
          <ImageListItem
            key={product.id}
            sx={{
              height: "20%",
              width: "100%",
              mb: "2rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                borderRadius: "var(--radius)",
                width: "50%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            ></img>
            <div style={{ width: "50%", marginLeft: "2rem" }}>
              <p style={{ mt: "0px", fontFamily: "cursive", fontSize: "25px" }}>
                {product.name}
              </p>
              <p
                style={{
                  mb: "0px",
                  fontFamily: "cursive",
                  color: "var(--clr-primary-5)",
                }}
              >
                {formatPrice(product.price)}
              </p>
              <p>{product.description.substring(0, 150)}...</p>
              <Link to={`/products/${product.id}`}>
                <Button
                  sx={{ fontFamily: "cursive", color: "var(--clr-primary-5)" }}
                  variant="text"
                >
                  Detail
                </Button>
              </Link>
            </div>
          </ImageListItem>
        );
      })}
    </ImageList>
    </Box>
  );
};



export default ListView;
