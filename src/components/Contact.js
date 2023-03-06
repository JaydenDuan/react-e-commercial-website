import React from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from '@formspree/react';
const Contact = () => {
  const [state, submitHandler] = useForm("mknabrkb")
  if(state.succeeded){
    return <p>Thanks for joining!</p>
  }
  return (
    <Box
      sx={{
        marginBottom: "5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          textAlign: "center",
          ml: "5rem",
        }}
      >
        <h4 style={{ textTransform: "none", fontFamily: "cursive" }}>
          Join our newsletter and get 20% off
        </h4>
        <p style={{ maxWidth: "25rem" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
          ea.
        </p>
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "center" }}
        onSubmit={submitHandler}
        method="POST"
      >
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          sx={{ width: "150px" }}
          name="email"
        />
        <Button
          variant="text"
          startIcon={<SendIcon></SendIcon>}
          sx={{
            color: "black",
            padding: "0.5rem 1rem",
            borderBlockColor: "black",
            top: "10px",
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};


export default Contact;
