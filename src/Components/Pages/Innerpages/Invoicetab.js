import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import './Innerpage.css'
import { Divider } from "@mui/material";


function createData(invoiceID, Client, DueDate, Total, Status) {
  return { invoiceID, Client, DueDate, Total, Status };
}

const rows = [
  createData("#GL-001", "Radhe Creations", "11 Mar 2019", "$12,000", "Pending"),
  createData("#GL-002", "Krishna Creations", "3 Feb 2021", "$6,000", "Paid"),
  createData(
    "#GL-003",
    "Unique Creations",
    "16 April 2022",
    "$10,000",
    "Pending"
  ),
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

const makeStyle = (status) => {
  if (status === "Paid") {
    return {
      background: "#1F935A",
      color: "white",
    };
  } else if (status === "Pending") {
    return {
      background: "#FFEBB9",
      color: "Black",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function Invoicetab() {
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
        <h3 className="Invoice1">Invoices</h3>
        <div className="divider"/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>InvoiceID</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
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
                <TableCell>{row.DueDate}</TableCell>
                <TableCell>{row.Total}</TableCell>
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
              <button className="btn"><Link to='/Viewinvoice'className="link1">View All Invoices</Link></button>
            </center>
      </TableContainer>
    </div>
  );
}
