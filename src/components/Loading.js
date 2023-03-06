import React from 'react'
import { Box } from '@mui/system'
import DownloadingIcon from '@mui/icons-material/Downloading';
const Loading = () => {
  return <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <DownloadingIcon sx={{width:'150px', height:'150px',top:'80px'}}></DownloadingIcon>
  </Box>}

export default Loading
