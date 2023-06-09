import { Textarea } from '@mui/joy'
import {  Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Addclient.css'


const Addclient = () => {
  return (
    <div>
    <Box sx={{ background: "white", width: "Auto", height: "Auto", p: 4, boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.06)", borderRadius: "16px" }} >

      <Grid container >
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Income Category" variant="outlined" sx={{ pt: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Last name"  variant="outlined" sx={{ pt: 5, pl: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} spacing={3} >
          <TextField placeholder="Contact No" variant="outlined" sx={{ pt: 5, width: '100%' }} />
        </Grid>
       
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Email Id" variant="outlined" sx={{ pt: 5,pl:5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Client's Firm Name" variant="outlined" sx={{  pt: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField placeholder="GST Number" variant="outlined" sx={{ pt: 5,pl: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} >
          <Textarea placeholder="Address" maxRows={5} sx={{ marginTop: "40px", pb: 10, width: '100%' }} />
        </Grid>
        <div className='btn-3' >
          <Button size='large' sx={{ background: "#555170", marginTop: "100px", pl: 5, pr: 5, color: "white" }} >Submit</Button>
          <Button size='large' sx={{ background: "#D24817", marginTop: "100px", marginLeft: "20px", pl: 5, pr: 5, color: "white" }} >Cancel</Button>
        </div>
      </Grid>
    </Box>

  </div>  )
}

export default Addclient