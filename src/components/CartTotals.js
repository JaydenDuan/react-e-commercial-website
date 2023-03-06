import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Box
      sx={{
        border: "1px solid black",
        width: "20vw",
        mr: "1rem",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <Box>
        <article>
          <h5 style={{ fontFamily: "cursive" }}>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p style={{ fontFamily: "cursive" }}>
            Shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr></hr>
          <h4 style={{ fontFamily: "cursive" }}>
            Order Total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser && (
          <Link
            to="/checkout"
            style={{ fontFamily: "cursive", color: "purple" }}
          >
            proceed to checkout
          </Link>
        )}
        {!myUser && <button onClick={loginWithRedirect}>Login</button>}
      </Box>
    </Box>
  );
};



export default CartTotals;
