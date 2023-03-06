import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const Stars = ({stars, reviews}) => {


  const [showStars, setShowStars] = useState(0);
  useEffect(()=>{
    setShowStars(stars);
  }, [stars])
  
  return (
    <Stack spacing={1}>
      <Rating name="simple-controlled" value={showStars} precision={0.1} onChange={(e)=>{
        console.log('eeeee')
        console.log(e.target.value)
      }}/>
      <p>({reviews} customer reviews)</p>
    </Stack>
  );
};


export default Stars;
