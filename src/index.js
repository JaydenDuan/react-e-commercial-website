import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//React E-Commercial-platform
//dev-ja273f1aa4v6bpz5.au.auth0.com
//n3pVzo2x1iHA2b1ogsNpuRM9JzFhlnwp
//JeNHcSWJOolAn_uZJigtyGb761hh5oZmy8wutqXU1zjBY5X7oK7pskRVdcypH94p
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
