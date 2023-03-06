import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from '@mui/icons-material/Logout';
const CartButtons = () => {
  const {myUser, loginWithRedirect, logout} = useUserContext()
  const {total_items, clearCart} = useCartContext()
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "225px",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          ml: 2,
          color: "purple",
          width: "70px",
          height: "100%",
          float: "right",
          fontSize: "15px",
          display: "flex",
        }}
      >
        <span style={{fontFamily:'cursive'}}>Cart</span>
        <Link to="/cart">
          <Badge badgeContent={total_items} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </IconButton>
      {!myUser &&  <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          ml: 2,
          color: "purple",
          width: "70px",
          height: "100%",
          float: "right",
          fontSize: "15px",
          display: "flex",
        }}
        onClick={loginWithRedirect}
      >
        <span style={{fontFamily:'cursive'}}>Login</span>
        <PersonAddIcon />
      </IconButton>}
      

      {myUser &&  <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          ml: 2,
          color: "purple",
          width: "70px",
          height: "100%",
          float: "right",
          fontSize: "15px",
          display: "flex",
        }}
        onClick={()=>{
          clearCart()
          logout({returnTo: window.location.origin})
        }}
      >
        <span style={{fontFamily:'cursive'}}>Logout</span>
        <LogoutIcon />
      </IconButton>}
     
    </Grid>
  );
};

export default CartButtons;
