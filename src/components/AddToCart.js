import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import styles from "./AddtoCart.module.css";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const AddToCart = ({ product }) => {

  const {addToCart} = useCartContext()
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  
  const increaseHandler = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decreaseHandler = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Box >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <span style={{ display: "flex", flexDirection: "column" }}>
          Colors :{" "}
        </span>
        <div style={{ marginLeft: "10px" }}>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{
                  background: `${color}`,
                }}
                className={
                  color === mainColor ? styles.active : styles.button
                }
                onClick={() => {
                  setMainColor(colors[index]);
                }}
              >
                <CheckIcon sx={{ fontSize: "medium", color: "white" }} />
              </button>
            );
          })}
        </div>
      </Box>
      <Box sx={{display: "flex", flexDirection: "row"}}>
        <AmountButtons
          amount={amount}
          increase={increaseHandler}
          decrease={decreaseHandler}
          sx={{width:'50%'}}
        ></AmountButtons>
        <Link key={id} to="/cart" style={{width:'50%' }} onClick={()=>{addToCart(id, mainColor, amount, product)}}>
         <IconButton>
          <AddShoppingCartIcon></AddShoppingCartIcon>
         </IconButton>
        </Link>
      </Box>
    </Box>
  );
};


export default AddToCart;
