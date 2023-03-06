import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import styles from "./AddtoCart.module.css";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import IconButton from '@mui/material/IconButton';
const Filters = () => {
  const { filters, updateFilters, clearFilters, all_products } =
    useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Box sx={{display:'flex', flexDirection:'column', mt:'2rem', }}>
      <form onSubmit={(event) => event.preventDefault()}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          color="secondary"
          value={filters.text}
          onChange={updateFilters}
          name="text"
        />
        <Box sx={{mt:'15px', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h5 style={{fontFamily:'cursive'}}>Categories</h5>
          <List>
            {categories.map((category, index) => {
              return (
                <ListItem key={index}>
                  <Button onClick={updateFilters} name="category" type="button" sx={{width:'100%', fontFamily:'cursive', color:'purple'}}>
                    {category}
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <FormControl
          sx={{ borderBlockColor: "black", width: "200px", mt:'15px', display:'flex', flexDirection:'column', alignItems:'center' }}
          color="secondary"
        >
          <InputLabel
            id="filter_companies-Inputlabel"
            sx={{ fontFamily: "cursive" }}
          >
            Companies
          </InputLabel>
          <Select
            labelId="filter_companies-label"
            id="filter_companies-select"
            value={filters.company}
            label="Companies"
            onChange={updateFilters}
            name="company"
            sx={{width:'100%'}}
          >
            {companies.map((company, index) => {
              return (
                <MenuItem
                  value={company}
                  sx={{ fontFamily: "cursive" }}
                  key={index}
                >
                  {company}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt:'2rem' }}
        >
          <span style={{ display: "flex", flexDirection: "column" }}>
            Colors :{" "}
          </span>
          <div style={{ marginLeft: "10px", display: "flex", flexDirection: "row", alignItems:'center' }}>
            {colors.map((color, index) => {
              if (color === "all") {
                return (
                  <button
                    className={
                      color === filters.color ? styles.active : styles.button
                    }
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                    key={index}
                    
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  name="color"
                  key={index}
                  style={{
                    background: `${color}`,
                  }}
                  className={
                    color === filters.color ? styles.active : styles.button
                  }
                  onClick={updateFilters}
                  data-color={color}
                >
                  {color === filters.color ? (
                    <CheckIcon sx={{ fontSize: "medium", color: "white" }} />
                  ) : null}
                </button>
              );
            })}
          </div>
        </Box>

        <Box sx={{ width:'80%', mt:'2rem',  display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h5 style={{fontFamily:'cursive'}}>Price</h5>
          <p style={{fontFamily:'cursive', color:'var(--clr-primary-5)'}}>{formatPrice(filters.price)}</p>
          <Slider
            defaultValue={filters.price}
            color="secondary"
            min={filters.min_price}
            max={filters.max_price}
           
            name="price"
            onChange={updateFilters}
            value={filters.price}
          ></Slider>
        </Box>

        <Box sx={{mt:"2rem",display:'flex', flexDirection:'column', alignItems:'center'}}>
          <FormControlLabel
            sx={{ color: "purple" }}
            control={
              <Checkbox
                sx={{ color: "purple", "&.Mui-checked": { color: "purple" } }}
                name="shipping"
                onChange={updateFilters}
                checked={filters.shipping}
              />
            }
            label="Shipping"
          />
        </Box>
      </form>
      <Box sx={{mt:"2rem", display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
      <h5 style={{ fontFamily: "cursive" }}>Clear All</h5>
      <IconButton onClick={clearFilters} sx={{ml:'1rem'}}>
        <ClearAllIcon></ClearAllIcon>
      </IconButton>
      </Box>
      </Box>
      
      
    </Box>
  );
};



export default Filters;
