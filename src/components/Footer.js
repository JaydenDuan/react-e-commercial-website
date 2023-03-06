import React from "react";
import { Box } from "@mui/system";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--clr-black)",
        height: "5rem",
        justifyContent: "center",
        textAlign: "center",
        mt:'3rem'
      }}
    >
      <h5 style={{ color: "var(--clr-white)" }}>
        &copy; {new Date().getFullYear()}
        <span style={{ color: "var(--clr-primary-5)", marginLeft:'5px' }}>ComfySloth</span>
      </h5>
      <h5 style={{ color: "var(--clr-white)" }}>All rights reserved</h5>
    </Box>
  );
};

export default Footer;
