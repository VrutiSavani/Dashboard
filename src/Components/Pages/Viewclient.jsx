import React, { useState } from "react";
import Table from "@mui/material/Table";
import { Box } from "@mui/system";
import {
  Fab,
  Container,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { Data1 } from "../Commons/Data1";
import "./Transaction.css";
import "./Viewclient.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import "bootstrap/dist/css/bootstrap.css";

const Viewclient = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  function createData(ID, Clientname, Contact, Firmname, Orders, dots) {
    return { ID, Clientname, Contact, Firmname, Orders, dots };
  }

  const settings = ["Edit", "View"];

  const records = Data1.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data1.length / recordsPerPage);
  const [Query, setQuery] = useState("");

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div className="main001">
          <TextField
            label="Search.."
            onChange={(e) => setQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        <div className="add">
          <Link to="/Addclient">
            <Fab color="white" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 5px #80808029" }}
      >
        <Table>
          <TableHead>
            <TableRow className="line">
              <TableCell>ID</TableCell>
              <TableCell>Client Name </TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Firm Name</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records
              .filter((user) => user.Clientname.includes(Query))
              .map((row) => (
                <TableRow>
                  <TableCell scope="row">{row.ID}</TableCell>
                  <TableCell>{row.Clientname}</TableCell>
                  <TableCell>{row.Contact}</TableCell>
                  <TableCell>{row.Firmname}</TableCell>
                  <TableCell>{row.Orders}</TableCell>
                  <TableCell>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          {row.dots}
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "1px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        PaperProps={{
                          style: {
                            width: 80,
                          },
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <button onClick={handleClick2} className="previousbtn">
              <Link className="page-link" onClick={prePage}>
                Previous
              </Link>
            </button>
            &nbsp;&nbsp;{counter}&nbsp;&nbsp;
            <button onClick={handleClick1} className="nextbtn">
              <Link className="page-link" onClick={NextPage}>
                Next
              </Link>
            </button>
          </Box>
        </Container>
      </TableContainer>
    </div>
  );
  function NextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
};

export default Viewclient;
