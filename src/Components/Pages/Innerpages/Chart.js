import { CChart } from "@coreui/react-chartjs";
  import React from "react";

const Chart = () => {
  return (
    <div className="chart">
          
                      <CChart
                          
                type="doughnut"
                data={{
                  labels: ["Cash", "Bank"],
                  datasets: [
                    {
                      backgroundColor: ["#000000", "#FFEBB9"],
                      data: ["50", "50"],
                    },
                  ],
                }}
              />
           
    </div>
  );
};

export default Chart;
