import React, { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import Button from "@mui/material/Button";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    single_product_loading,
    single_product_error,
    single_product,
  } = useProductsContext();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchSingleProduct(url + id);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [single_product_error]);

  return (
    <React.Fragment>
      {single_product_loading && <Loading />}
      {single_product_error && <Error></Error>}
      {!single_product_loading&& !single_product_error&& <PageHero title={single_product.name} product={true}></PageHero>}
      <Box
        sx={{
          minHeight: "calc(100vh - (20vh + 10rem))",
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
        
        <Link style={{ mt: "3rem" }} to="/products">
          <Button
            variant="text"
            sx={{
              width: "100px",
              fontFamily: "cursive",
              color: "var(--clr-primary-5)",
              mt:'2rem'
            }}
          >
            Back
          </Button>
        </Link>
        <Box
          sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width:'80%',minHeight:'300px' }}
        >
          <ProductImages images={single_product.images}></ProductImages>
          <section style={{width:'450px', ml:'200px', transform: "translate(-15%, 0%)"}}>
            <h2>{single_product.name}</h2>
            <Stars stars={single_product.stars} reviews={single_product.reviews}></Stars>
            <h5 style={{color:'var(--clr-primary-3)'}}>{formatPrice(single_product.price)}</h5>
            <p>{single_product.description}</p>
            <p>
              <span>Available : </span>
              {single_product.stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p>
              <span>Sku : </span>
              {single_product.id}
            </p>
            <p>
              <span>Brand : </span>
              {single_product.company}
            </p>
            <hr></hr>
            {single_product.stock > 0 && <AddToCart product={single_product}></AddToCart>}
          </section>
        </Box>
      </Box>
    </React.Fragment>
  );
};


export default SingleProductPage;
