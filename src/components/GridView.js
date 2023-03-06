import React from 'react'
import Product from './Product'
import ImageList from '@mui/material/ImageList';
const GridView = ({products}) => {
  return <ImageList cols={3} rowHeight={164}>
    {products.map((product)=>{
      return <Product key={product.id} product={product}>

      </Product>
    })}
    </ImageList>
}



export default GridView
