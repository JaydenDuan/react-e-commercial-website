import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const {id, color, amount, product} = action.payload
    const tempItem = state.cart.find((i)=> i.id === id + color)
    if(tempItem){
        const tempCart = state.cart.map((cartItem)=>{
          if(cartItem.id === id + color){
            let newAmount = cartItem.amount + amount
            if(newAmount > cartItem.max){
              newAmount = cartItem.max
            }
            return {...cartItem, amount: newAmount}
          }else{
            return cartItem
          }
        })
        return {...state, cart:tempCart}
 
    }else{
      const newItem = {
          id: id+color,
          name: product.name,
          color: color,
          image: product.images[0].url,
          amount,
          price:product.price,
          max:product.stock 
      }
      return {...state, cart:[...state.cart, newItem]}
    }
  }
  if(action.type === REMOVE_CART_ITEM){
      const tempCart = state.cart.filter((item)=>{
        return item.id !== action.payload
      })
      return {...state, cart: tempCart}
  }
  if(action.type === CLEAR_CART){
      
      return {...state, cart: [], total_items: 0,
        total_amount: 0}
  }
  if(action.type === TOGGLE_CART_ITEM_AMOUNT){
      let tempCart
      if(action.payload.value === 1){
          tempCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                item.amount = item.amount + 1
                if(item.amount > item.max){
                  item.amount = item.max
                }
                return item
            }else{
              return item
            }
          })
      }
      if(action.payload.value === 0){
        tempCart = state.cart.map((item)=>{
          if(item.id === action.payload.id){
              item.amount = item.amount - 1
              if(item.amount < 1){
                item.amount = 1
              }
              return item
          }else{
            return item
          }
        })
      }
      return {...state, cart: tempCart}
  }
  if(action.type === COUNT_CART_TOTALS){
    const {total_items, total_amount} = state.cart.reduce((total, cartItem)=>{
      const {amount, price} = cartItem
      total.total_items += amount
      total.total_amount += amount * price
        return total
    },{
      total_items:0, total_amount:0
    })
    return {...state, total_items, total_amount}

  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
