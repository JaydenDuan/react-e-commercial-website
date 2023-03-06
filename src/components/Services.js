import React from "react";
import { services } from "../utils/constants";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
const Services = () => {
  return (
    <Box
      sx={{
        background: "var(--clr-primary-10)",
        display: "flex",
        // justifyContent: "center",
        gap: "2rem",
        alignItems: "center",
        flexDirection: "column",
        // position:'relative',
        height: "400px",
        mb: "400px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
          // position:'absolute',
          // top:'-25px'
          bottom: "0px",
        }}
      >
        <h3 style={{ fontFamily: "cursive", padding: "2rem" }}>
          Custom Furniture <br></br>
          Built Only For You
        </h3>
        <p
          style={{
            maxWidth: "15rem",
            minWidth: "15rem",
            fontSize: "12px",
            fontFamily: "cursive",
          }}
        >
          Paragraphs can contain many different kinds of information.
        </p>
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "relative",
          width: "80vw",
          top: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              bgcolor: "var(--clr-primary-7)",
              textAlign: "center",
              padding: "2.5rem 2rem",
              borderRadius: "var(--radius)",
              width: "260px",
              // maxHeight:'400px'
            }}
          >
            <span
              className="icon"
              style={{
                width: "4rem",
                height: "4rem",
                display: "grid",
                margin: "0 auto",
                placeItems: "center",
                marginBottom: "1rem",
                borderRadius: "50%",
                background: "var(--clr-primary-10)",
                color: "var(--clr-primary-1)",
              }}
            >
              {service.icon}
            </span>
            <h4>{service.title}</h4>
            <p style={{ fontFamily: "cursive" }}>{service.text}</p>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Services;
