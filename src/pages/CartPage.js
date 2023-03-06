import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { Box } from "@mui/system";
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Box sx={{mt:'10rem', mb:'20rem', display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h3 style={{fontFamily:'cursive', color:'purple',}}>Your cart is empty.</h3>
          <Link style={{fontFamily:'cursive', color:'purple'}} to="/products">Fill It</Link>
        </div>
      </Box>
    );
  }
  return (
    <Box>
      <PageHero title="Cart">
        

      </PageHero>
      <Box>
          <CartContent></CartContent>
        </Box>
    </Box>
  );
};


export default CartPage;
