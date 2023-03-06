import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ fontFamily: "cursive", textTransform: "none" }}>
        Sorry, no products matched your filtering.
      </h5>
    );
  }
  return (
    <> {grid_view && <GridView products={products}>product list</GridView>}
    {!grid_view && <ListView products={products}></ListView>}
    </>
  );
};

export default ProductList;
