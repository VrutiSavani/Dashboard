import Button from '@mui/material/Button';
import { Textarea } from '@mui/joy'
import { Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Addexpense.css'


const Addexpense = () => {
  return (
    <div>  <div className="addexpense-2">Add Expense</div>
    <div className="addupdate-2">Add/Update Expense</div>
    <Box sx={{ background: "white", width: "Auto", height: "Auto", p: 4, boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.06)", borderRadius: "16px" }} >

      <Grid container >
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Expense Category" variant="outlined" sx={{ pt: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Date" type='date' variant="outlined" sx={{ pt: 5, pl: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} >
          <TextField placeholder="Expense For" variant="outlined" sx={{ pt: 5, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={12} >
          <Textarea placeholder="Description" maxRows={5} sx={{ marginTop: "40px", pb: 10, width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
          <TextField placeholder="Amount" variant="outlined" sx={{ pt: 5, width: '100%' }} />
        </Grid>
        <div className='btn-2'>
            <Button size='large' sx={{ background: "#555170", marginTop: "100px", pl: 5, pr: 5, color: "white" }} >Submit</Button>
            <Button size='large' sx={{ background: "#D24817", marginTop: "100px", marginLeft: "20px", pl: 5, pr: 5, color: "white" }} >Cancel</Button>
          </div>
      </Grid>
    </Box></div>
  )
}

export default Addexpense