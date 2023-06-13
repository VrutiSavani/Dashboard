import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./Innerpage.css"


function createData(ClientID, Order, Status) {
  return { ClientID, Order, Status };
}

const rows = [
  createData("#0029", "01", "In Progress"),
  createData("#0029", "01", "Ready to Deliver"),
  createData("#0029", "01", "Completed"),
];
const Client = (Client) => {
  if (Client !== null)
    return {
      color: "blue",
    };
  else {
    return {
      color: "white",
    };
  }
};

const makeStyle = (status) => {
  if (status === "In Progress") {
    return {
      background: "#FFB800",
      color: "white",
    };
  } else if (status === "Ready to Deliver") {
    return {
      background: "#D24817",
      color: "white",
    };
  } else {
    return {
      background: "#1F935A",
      color: "white",
    };
  }
};

export default function Orders() {
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 5px #80808029" }}
        >
        <h3 className="Invoice1">Recent Orders</h3>
        <div className="divider"/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client ID</TableCell>
              <TableCell>Order Quantity</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ClientID}>
                <TableCell>
                  <span className="Client" style={Client(row.ClientID)}>
                    {row.ClientID}
                  </span>
                </TableCell>
                <TableCell>{row.Order}</TableCell>
                <TableCell>
                  <span className="status" style={makeStyle(row.Status)}>
                    {row.Status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <center>
          <button className="btn1">
            <Link to="/Viewaccounts" className="link1">View All Recent Orders</Link>
          </button>
        </center>
      </TableContainer>
    </div>
  );
}
