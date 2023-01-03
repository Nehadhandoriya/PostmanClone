import {Box, Typography} from '@mui/material';
import response from './response-error.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    component:{
       width:['70%', '!important'],
       margin:'auto',
       objectPosition:'center 0%'
    }
})

const ErrorScreen = () => {
   const classes = useStyles();
    return(
        <Box>
   <Typography mt={2} mb={2}>Response</Typography>
   <Box className={classes.component}
   style={{display:'flex'}}
   >
    <img className={classes.component} src={response} alt="error"/>
   </Box>
  </Box>
    )
}
export default ErrorScreen;