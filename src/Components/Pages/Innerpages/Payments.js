import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Innerpage.css";
import { Link } from "react-router-dom";


function createData(invoiceID, Client, Payment, Date, Amount) {
  return { invoiceID, Client, Payment, Date, Amount };
}

const rows = [
  createData("#GL-001", "Radhe Creations", "Cash", "11 Mar 2019", "$12,000"),
  createData("#GL-002", "Krishna Creations", "Bank", "3 Feb 2021", "$6,000"),
  createData("#GL-003", "Unique Creations", "Cash", "16 April 2022", "$10,000"),
];
const invoiceid = (id) => {
  if (id !== null)
    return {
      color: "red",
    };
  else {
    return {
      color: "white",
    };
  }
};
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

export default function Payment() {
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
        <h3 className="Invoice1">Payments</h3>
        <div className="divider"/>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>InvoiceID</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Payment Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.invoiceID}>
                <TableCell component="th" scope="row">
                  <span className="invoiceid" style={invoiceid(row.invoiceID)}>
                    {row.invoiceID}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="Client" style={Client(row.Client)}>
                    {row.Client}
                  </span>
                </TableCell>
                <TableCell>{row.Payment}</TableCell>
                <TableCell>{row.Date}</TableCell>
                <TableCell>{row.Amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <center>
          <button className="btn"><Link to='/Alltrans' className="link1">View All Payments</Link></button>
        </center>
      </TableContainer>
    </div>
  );
}
