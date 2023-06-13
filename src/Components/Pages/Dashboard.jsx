import React from "react";
import { Container, Grid } from "@mui/material";
import Card1 from "../Commons/Card1";
import Card2 from "../Commons/Card2";
import Card3 from "../Commons/Card3";
import Invoicetab from "./Innerpages/Invoicetab";
import Statistics from "./Innerpages/Statistics";
import Chart from "./Innerpages/Chart";
import Payment from "./Innerpages/Payments";
import Clienttab from "./Innerpages/Client";
import Orders from "./Innerpages/Orders";
import "./Dashboard.css";

const Dashboard = () => {
  return (
<Container maxWidth="100%">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card1 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card2 />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card3 />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={9}>
            <div className="grid-1">
              <Invoicetab />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <div className="grid-1">
              <Statistics />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems={"center"} className="grid-2">
          <Grid item xs={12} sm={9} md={4} lg={3}>
          <div className="grid-1">
              <Chart />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
          <div className="grid-1">
              <Payment />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="grid-3">
          <Grid item xs={12} sm={12} md={8}>
          <div className="grid-1">
              <Clienttab />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <div className="grid-1">
              <Orders />
            </div>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Dashboard;
