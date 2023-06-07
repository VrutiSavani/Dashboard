import React from "react";
import { Box, Container,  Grid } from "@mui/material";
import DashboardCards from "../Commons/Cards";

const Dashboard = () => {
  return (
    <Box>
      <Container>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCards/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
           vruti
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
           vruti
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
