import React from 'react'
import { Filters, ProductList, Sort, PageHero } from '../components'
import { Box } from '@mui/system'
const ProductsPage = () => {
  return <Box>
    <PageHero title="products"></PageHero>
    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', width:'90vw'}}>
      <Filters ></Filters>
      <Box sx={{ width:'50%'}}>
        <Sort></Sort>
        <ProductList></ProductList>
      </Box>
    </Box>
  </Box>
}



export default ProductsPage
