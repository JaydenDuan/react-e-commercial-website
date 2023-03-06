import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Sort = () => {
  const {
    filtered_products: products,
    setGridView,
    setListView,
    sort,
    updateSort
  } = useFilterContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "10vh",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={setGridView}>
          <GridViewIcon></GridViewIcon>
        </IconButton>
        <IconButton onClick={setListView}>
          <ViewListIcon></ViewListIcon>
        </IconButton>
      </Box>
      <p style={{ fontFamily: "cursive", marginTop: "1.5rem" }}>
        {products.length} products found
      </p>
      <hr></hr>
      <FormControl
        sx={{ borderBlockColor: "black", width: "120px" }}
        color="secondary"
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontFamily: "cursive" }}
        >
          Sort By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort By"
          onChange={updateSort}
        >
          <MenuItem value="price-lowest" sx={{ fontFamily: "cursive" }}>
            price-lowest
          </MenuItem>
          <MenuItem value="price-highest" sx={{ fontFamily: "cursive" }}>
            price-highest
          </MenuItem>
          <MenuItem value="name-a" sx={{ fontFamily: "cursive" }}>
            name-a-z
          </MenuItem>
          <MenuItem value="name-z" sx={{ fontFamily: "cursive" }}>
            name-z-a
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};



export default Sort;
