import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Image from '../Images/handshake.png'
import './Cards.css'

export default function DashboardCards() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box >
         <div className='sixtynine' >
          <div className='card'>
        <CardMedia component="img" sx={{ width: 70,height: 90,alignContent: 'center' }} image={Image} alt="Handshake"/>
        </div>
        <div >69</div>
        <div>Clients</div>
        </div>


        {/* <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display:"flex",justifyContent: 'space-between'}}>
          Mac Miller
        </Typography> */}

      </Box>

    </Card>
  );
}