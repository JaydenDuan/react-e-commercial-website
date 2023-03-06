import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "var(--clr-primary-10)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "500px",
        minHeight: "calc(100vh - 10rem)",
        padding: "5rem 0",
      }}
    >
      <Stack spacing={2}>
        <h3 style={{fontFamily:'cursive'}}>Error Occured, Can Not Find The Page.</h3>
        <Link to='/'>
        <Button variant='HomePage' sx={{color:'black', fontFamily:'cursive'}}>HomePage</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
