import React from 'react'
import { Box,  TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';



const Addinvoice = () => {
  return (
    <div>
      <Box sx={{ background: "white", width: "Auto", height: "Auto", p: 4, boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.06)", borderRadius: "16px" }} >
        <Grid container>
          <Grid item xs={12} mdOffset={6} sm={6} spacing={3}>
            <TextField placeholder="Date" type='date' variant="outlined" sx={{ pt: 5,pl: 25,width:"100%" }} />
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Client's name" variant="outlined" sx={{ pt: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Email ID" variant="outlined" sx={{ pt: 5, pl: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} spacing={3} >
            <TextField placeholder="Client's Firm Name" variant="outlined" sx={{ pt: 5, width: '100%' }} />
          </Grid>

          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Contact No" variant="outlined" sx={{ pt: 5, pl: 5, width: '100%' }} />
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default Addinvoice