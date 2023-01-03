import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled, Typography } from '@mui/material';

const useStyles = makeStyles({
    logo:{
        width: 45,
       
    }
})
const Head = styled(Typography)`
  display:inline;
  color:#5E2D79;
  font-weight:600;
   
`



const Header = () => {
    const classes = useStyles();
    
    const logo="https://cdn.dribbble.com/users/95644/screenshots/16319523/media/d6dc801a61505fbba2b55f32619e24eb.jpg?compress=1&resize=400x300";
  return (
    <div>
       <img src={logo} alt="logo" className={classes.logo} />
     <Head variant='h4'>LinkCheck</Head>
    </div>
  )
}

export default Header;