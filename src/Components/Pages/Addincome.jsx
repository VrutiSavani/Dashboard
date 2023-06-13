import React from 'react';
import Grid from '@mui/material/Grid';
import './Addincome.css'
import Box from '@mui/material/Box';
import Textarea from '@mui/joy/Textarea';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Addincome = () => {
  return (
    <div>
      <div className="addincome-1">Add Income & Transactions</div>
      <div className="addupdate-1">Add/Update Income</div>
      <Box sx={{ background: "white", width: "Auto", height: "Auto", p: 4, boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.06)", borderRadius: "16px" }} >

        <Grid container >
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Income Category" variant="outlined" sx={{ pt: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Date" type='date' variant="outlined" sx={{ pt: 5, pl: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={12} >
            <TextField placeholder="Income From" variant="outlined" sx={{ pt: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={12} >
            <Textarea placeholder="Description" maxRows={5} sx={{ marginTop: "40px", pb: 10, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Amount" variant="outlined" sx={{ pt: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} spacing={3}>
            <TextField placeholder="Currency" variant="outlined" sx={{ pl: 5, pt: 5, width: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField placeholder="Transaction" variant="outlined" sx={{ pt: 5, width: '100%' }} />
          </Grid>
          <div className='btn-1'>
            <Button size='large' sx={{ background: "#555170", marginTop: "100px", pl: 5, pr: 5, color: "white" }} >Submit</Button>
            <Button size='large' sx={{ background: "#D24817", marginTop: "100px", marginLeft: "20px", pl: 5, pr: 5, color: "white" }} >Cancel</Button>
          </div>
        </Grid>
      </Box>

    </div>
  )
}

export default Addincome
