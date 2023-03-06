import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import styles from "./Products.module.css";

const Product = ({ product }) => {

  return (
    <ImageListItem
    sx={{
      mb:'1rem'
    }}
    >
      <div className={styles.container}>
        <img
          src={product.image}
          alt={product.name}
          style={{ height: "160px", width: "200px" }}
          className="product_img"
        ></img>
        <div className={styles.search_icon}>
          <Link
            to={`/products/${product.id}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>
          </Link>
        </div>
      </div>
      <footer style={{ display: "flex", justifyContent:'space-between', width:'200px'}}>
        <p style={{ fontSize: "12px", fontFamily: "cursive" }}>
          {product.name}
        </p>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "var(--spacing)",
            color: "var(--clr-primary-5)",
          }}
        >
          {formatPrice(product.price)}
        </p>
      </footer>
    </ImageListItem>
  );
};


export default Product;
