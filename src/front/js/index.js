import React from "react";
import ReactDOM from "react-dom";
import { CartProvider } from './components/CartContext.js';

import "../styles/index.css";
import Layout from "./layout";

// Render your react application with CartProvider wrapping the Layout component
ReactDOM.render(
  <CartProvider>
    <Layout />
  </CartProvider>,
  document.querySelector("#app")
);
