import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/Banner2.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg: '212px', xs:'70px'}, ml:{sm:'50px'}}} postion="relative" p='20px'>
      <Typography color="#FF8C32" fontWeight="600" fontSize="26px">
        FITNESS CENTER
      </Typography>
      <Typography fontWeight="700" sx={{fontSize:{lg:'44px',sx:'40px'}}} mb="23px" mt="30px" color="#DDDDDD">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} color="#DDDDDD">
        Check out the most Effective Exercises
      </Typography>
      <Button variant="contained" href="#exercises" sx={{backgroundColor:'#FF8C32', padding:'10px'}}>Explore Exercises</Button>
      <Typography fontWeight="600" sx={{opacity:0.2, display:{lg:'block', xs:'none'}}} fontSize="200px" color="#FF8C32" pt="20px">
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner