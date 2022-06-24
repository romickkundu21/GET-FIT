import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'129px', xs:'40px'}, pt:{sm: '9px',sx:'20px'}, justifyContent:'none'}} px="20px" bgcolor="#FF8C32" >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{width:'48px',height:'70px', margin:'5px 20px'}} />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end' mb="30px">
        <Link to='/' style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #DDDDDD'}}>Home</Link>
        <a href="exercise" style={{textDecoration:'none', color:'#3A1212'}}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar