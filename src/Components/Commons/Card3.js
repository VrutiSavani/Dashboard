import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "../Images/spending-money.png";
import './cards.css'
import { Grid } from "@mui/material";

export default function Card3() {

  return (
    <Card sx={{ display: "flex" }}>
      <Grid container alignItems={"center"}>
      <Grid item xs={6} sm={6} md={6}>
        <CardMedia
          component="img"
          sx={{ width: 70, marginLeft:"20px"}}
          image={Image}
          alt="Spending-money"
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className="card3item" >
           $5000
          </Typography>
          <Typography className="card3itemword">
            Expense
          </Typography>
          </CardContent>
        </Grid>
        </Grid>
    </Card>
  );
}
