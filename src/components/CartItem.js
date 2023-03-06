import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";
import { Box } from "@mui/system";
import styles from "./AddtoCart.module.css";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = ({ id, name, image, color, amount, price }) => {
  console.log(color)
  console.log(name);
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 1)
  }
  const decrease = () => {
    toggleAmount(id, 0)
  }
  return (
    <Box sx={{ height: "200px", mt:'3rem', width:'80vw' }}>
      <Box sx={{ height: "100%", display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
        <Box sx={{ height: "100%", display: "flex", width:'25%' }}>
          <img src={image} alt={name} style={{ height: "100%", width:'200px', minWidth:'200px', borderRadius:'15px' }}></img>
          <div>
            <h5 style={{fontFamily:'cursive'}}>{name}</h5>
            <p style={{fontFamily:'cursive'}}>
              color :
              <button
                name="color"
                style={{
                  background: `${color}`,
                }}
                className={styles.button}
              ></button>
            </p>
            <h5 style={{fontFamily:'cursive', color:'var(--clr-primary-5)'}}>{formatPrice(price)}</h5>
          </div>
        </Box>
        <h5 style={{width:'25%', transform: "translate(40%, 0%)",  color:'var(--clr-primary-5)'}}>{formatPrice(price)}</h5>
        <div style={{width:'25%', transform: "translate(40%, 0%)"}}>
        <AmountButtons amount={amount} increase={increase} decrease={decrease}></AmountButtons>

        </div>
        <h5 style={{ width:'25%', transform: "translate(55%, 0%)",  color:'var(--clr-primary-5)'}}>
          {formatPrice(price * amount)}
        </h5>
        <IconButton onClick={()=>{removeItem(id)}}>
              <DeleteIcon></DeleteIcon>
        </IconButton>
      </Box>
    </Box>
  );
};



export default CartItem;
