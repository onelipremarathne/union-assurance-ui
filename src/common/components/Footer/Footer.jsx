import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography,Box  } from '@mui/material';
import './styles.css'

export default function Footer() {

    const iconStyle = {
    bgcolor: 'grey.400',
    color: 'grey.600',
    borderRadius: '50%',
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    
  };

  return (

    
    <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
      <Box sx={{ display: 'flex', gap: 2, color: 'grey', fontSize: '2rem', marginLeft:8, marginTop:-4 }}>
        <Box sx={iconStyle}><FacebookIcon /></Box>
        <Box sx={iconStyle}><InstagramIcon /></Box>
        <Box sx={iconStyle}><LinkedInIcon /></Box>
        <Box sx={iconStyle}><TwitterIcon /></Box>
      </Box>
            <div style={{marginRight:50,marginTop:-30}} >
                <Typography sx={{fontWeight:600}}>
                    Find your Needs
                </Typography>
            </div>
        </div>      
    </div>
  )
}
