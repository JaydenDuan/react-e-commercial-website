import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <article>
        <h1 style={{fontFamily:'cursive'}}>
          Design Your<br></br>
          Comfort Zone
        </h1>
        <p
          style={{
            maxWidth: "25rem",
            color: "var(--clr-grey-5)",
            fontSize: "1rem",
            fontFamily: "cursive",
          }}
        >
          {" "}
          Paragraphs can contain many different kinds of information. A
          paragraph could contain a series of brief examples or a single long
          illustration of a general point. It might describe a place.
        </p>
        <Link to="/products">
          <Button variant="outlined" sx={{ fontFamily: "cursive" }}>
            Shop Now
          </Button>
        </Link>
      </article>
      <Box style={{ display: "block", position: "relative", marginLeft:'2rem' }}>
        <img
          src={heroBcg}
          alt="nice table"
          style={{
            width: "210px",
            height: "225px",
            position: "relative",
            borderRadius: "var(--radius)",
            display: "block",
            objectFit: "cover",
          }}
        ></img>
        <img
          src={heroBcg2}
          alt="person working"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "130px",
            transform: "translateX(-50%)",
            borderRadius: "var(--radius)",
            height:'85px'
          }}
        ></img>
      </Box>
    </Box>
  );
};


export default Hero;
