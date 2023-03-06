import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { Box } from '@mui/system'
const CartContent = () => {
  const {cart, clearCart} = useCartContext()
  return <Box>
    <CartColumns>
      
    </CartColumns>
    {cart.map((item)=>{
        console.log(item)
        return <CartItem key={item.id} {...item}>
        </CartItem>
      })}
    <Box sx={{mt:'4rem', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', mb:'3rem'}}>
      <Link to='/products' style={{fontFamily:'cursive', color:'purple'}}>Continue Shopping</Link>
      <button onClick={clearCart} style={{width:'120px', backgroundColor:'var(--clr-primary-6)', border:'none', cursor:'pointer'}}>Clear Cart</button>
    </Box>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <div></div>
      <CartTotals></CartTotals>
    </div>
    
  </Box>
}

export default CartContent
