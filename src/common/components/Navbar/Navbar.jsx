import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import UAlogo from '../../../assets/UAlogo.png';
import MainButton from '../MainButton/MainButton';
import './styles.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{boxShadow:'none',backgroundColor:'white',zIndex: 1200}}>
        <Toolbar style={{display:'flex', justifyContent:'space-between', alignContent:'center', }}>
            <img style={{width:'220px'}} src={UAlogo}></img>
          <MainButton/>
        </Toolbar>
      </AppBar>      
    </Box>
  );
}

