import * as React from "react";
import { Box } from "@mui/material";
import "./Innerpage.css";
export default function Statistics() {
  return (
    <Box>
      <Box
        sx={{
          boxShadow: "10px 10px 24px rgba(0,0,0,0.1)",
          background: "white",
          padding: "10px 15px",
        }}
      >
        <div className="Statistics1">Statistics</div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "15px",
          }}
        >
          <Box
            sx={{
              fontFamily: "poppins",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "500",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              width: "100%",
              textAlign: "center",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Pending</span>
            <span>59/120</span>
          </Box>
          <Box
            sx={{
              fontFamily: "poppins",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "500",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              width: "100%",
              textAlign: "center",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Paid</span>
            <span>28/120</span>
          </Box>
          <Box
            sx={{
              fontFamily: "poppins",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "500",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              width: "100%",
              textAlign: "center",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Partially Paid</span>
            <span>18/120</span>
          </Box>
          <Box
            sx={{
              fontFamily: "poppins",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "500",
              border: "1px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              width: "100%",
              textAlign: "center",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Over Due</span>
            <span>15/120</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
