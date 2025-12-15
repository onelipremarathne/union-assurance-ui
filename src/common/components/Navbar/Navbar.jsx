import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import UAlogo from '../../../assets/UAlogo.png';
import './styles.css'
import CommonButton from '../CommonButton/CommonButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useNavigate } from "react-router-dom";

export default function Navbar({progress, displayProgress, heading, value, whichPage}) {

  const navigate= useNavigate();
  return (
    <Box>
      <AppBar style={{boxShadow:'none',backgroundColor:'white',zIndex: 1200}}>
        <Toolbar style={{display:'flex', justifyContent:'space-between', alignContent:'center', }}>
          <img style={{width:'220px'}} src={UAlogo}></img>

          <ProgressBar progress={progress} displayProgress={displayProgress} heading={heading} value={value} />

          <CommonButton bgColor={'white'} borderColor={'rgb(255, 81, 0)'} textColor={'rgb(255, 81, 0)'} btnName={'Already have a account'} onClick={()=>{navigate(whichPage)}} />
        </Toolbar>
      </AppBar>      
    </Box>
  );
}

