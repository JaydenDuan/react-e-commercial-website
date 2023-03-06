import React from 'react'
import Grid from '@mui/material/Grid';
import styles from './AmountButton.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
const AmountButtons = ({increase, decrease, amount}) => {
  return (<Grid  sx={{ flexGrow: 1 }} container spacing={2}>
       <Grid item><IconButton onClick={decrease} className={styles.button}><RemoveIcon/></IconButton></Grid>
       <Grid item><h3 style={{color:'var(--clr-primary-5)'}}>{amount}</h3></Grid>
       <Grid item><IconButton onClick={increase}><AddIcon/></IconButton></Grid>
  </Grid>)
}



export default AmountButtons
