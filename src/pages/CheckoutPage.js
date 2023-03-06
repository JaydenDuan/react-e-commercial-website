import React from "react";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <React.Fragment>
      <PageHero title="CheckOut"></PageHero>
      {cart.length < 1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom:'10rem',
          }}
        >
          {" "}
          <h1 style={{ fontFamily: "cursive", color: "purple" }}>
            Your Cart Is Empty
          </h1>
          <Link to="/" style={{ fontFamily: "cursive", color: "purple" }}>Back Home</Link>
        </div>
      )}
      <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt:'10rem'
          }}>
      <StripeCheckout />
      </div>

    </React.Fragment>
  );
};

export default CheckoutPage;
