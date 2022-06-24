import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="100px" bgcolor="#FF8C32">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width:'48px',height:'70px' }} /> */}
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '22px', xs: '16px' } }} mt="6px" textAlign="center" pb="16px">Copyright © 2022 (By Romick)</Typography>
  </Box>
);

export default Footer