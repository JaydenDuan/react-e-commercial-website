import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";



const Nav = () => {
  const {myUser} = useUserContext()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          height: "4rem",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "max-content",
            color: "red",
            lineHeight: "4rem",
            padding: "0 0.5rem",
          }}
        >
          <Link to="/">
            <img src={logo} style={{ height: "100%" }} alt='confy sloth'></img>
          </Link>
        </Box>
        <Toolbar
          sx={{
            background: "white",
            height: "100%",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={logo}
            style={{ width: "175px", marginLeft: "200px", display: "flex" }}
          ></Image> */}
          <Box
            sx={{
              background: "white",
              height: "4rem",
              display: "flex",
              alignItems: "center",
              width: "40vw",
            }}
          >
            {links.map((link)=>
              <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "gray", fontFamily:'cursive' }}
              key={link.id}
            >
              <Link to={link.url} sx={{}}>{link.text}</Link>
            </Typography>
            )}
            {myUser && <Typography  variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "gray", fontFamily:'cursive' }}
              ><Link to='/checkout' sx={{}}>Checkout</Link></Typography>}
          </Box>
        </Toolbar>
        <CartButtons></CartButtons>
        
      </AppBar>
    </Box>
  );
};



export default Nav;
