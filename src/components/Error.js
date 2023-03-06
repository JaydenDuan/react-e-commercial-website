
import React from 'react'
import { Box } from '@mui/system'
import ErrorIcon from '@mui/icons-material/Error';

const Error = () => {
  return <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
  <ErrorIcon sx={{width:'150px', height:'150px',top:'80px'}}></ErrorIcon>
</Box>}


export default Error
