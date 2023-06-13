import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "../Images/wallet.jpg";
import './cards.css'
import { Grid } from "@mui/material";

export default function Card2() {

  return (
    <Card sx={{ display: "flex" }}>
            <Grid container alignItems={"center"}>

      <Grid item xs={6} sm={6} md={6}>
        <CardMedia
          component="img"
          sx={{ width: 70, marginLeft:"20px"}}
          image={Image}
                  alt="Wallet"
                  
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className="card2item" >
           $3600
          </Typography>
          <Typography className="card2itemword">
            Income
          </Typography>
          </CardContent>
        </Grid>
        </Grid>
    </Card>
  );
}
