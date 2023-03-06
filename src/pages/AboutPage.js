import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import { bgcolor, Container } from "@mui/system";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
const AboutPage = () => {
  return (
    <React.Fragment>
      <PageHero title="About"></PageHero>
      <Box
        sx={{
          minHeight: "calc(100vh - (20vh + 10rem))",
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          Container
          spacing={2}
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
            marginTop: "4rem",
          }}
        >
          <Grid item xs={6}>
            <img
              src={aboutImg}
              alt="nice desl"
              style={{
                height: "300px",
                width: "300px",
                objectFit: "cover",
                borderRadius: "var(--radius)",
              }}
            ></img>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              minHeight: "60vh",
              display: "flex",
              minWidth: "25rem",
              justifyContent: "center",
              marginTop:'8rem'
            }}
          >
            <ariticle>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "2.5rem" }}>Our Story</h2>
                <div
                  style={{
                    width: "6rem",
                    height: "0.25rem",
                    background: "var(--clr-primary-5)",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {" "}
                </div>
                <p
                  style={{
                    maxWidth: "25em",
                    marginTop: "2rem",
                    fontSize: "1rem",
                    fontFamily: "cursive",
                  }}
                >
                  Paragraphs can contain many different kinds of information. A
                  paragraph could contain a series of brief examples or a single
                  long illustration of a general point. It might describe a
                  place.
                </p>
              </div>
            </ariticle>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};


export default AboutPage;
