import React from 'react'
import { Box } from '@mui/system'
const CartColumns = () => {
  return <Box>
    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', mt:'2rem'}}>
      <h5 style={{fontFamily:'cursive'}}>item</h5>
      <h5 style={{fontFamily:'cursive'}}>price</h5>
      <h5 style={{fontFamily:'cursive'}}>quantity</h5>
      <h5 style={{fontFamily:'cursive'}}>subtotal</h5>
      <span></span>
    </Box>
    <hr/>
  </Box>
}



export default CartColumns
