import React, { useState } from "react";
import Table from "@mui/material/Table";
import {
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Box,
  Container,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Data } from "../Commons/Data";
import "./Transaction.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Transactions = () => {
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

  const settings = ["Edit", "View"];

  const makeStyle = (Account) => {
    if (Account === "Credit") {
      return {
        background: "green",
        color: "white",
      };
    } else {
      return {
        background: "red",
        color: "white",
      };
    }
  };

  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
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
      <div className="one">
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

        <div className="filter">
          Filter
          <ArrowDropDownIcon className="filtericon" />
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 5px #80808029" }}
      >
        <Table>
          <TableHead>
            <TableRow className="line2">
              <TableCell>ID</TableCell>
              <TableCell>Income From</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Account</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records
              .filter((user) => user.Type.includes(Query))
              .map((row) => (
                <TableRow>
                  <TableCell scope="row">{row.ID}</TableCell>
                  <TableCell>{row.Income}</TableCell>
                  <TableCell>{row.Type}</TableCell>
                  <TableCell>{row.Currency}</TableCell>
                  <TableCell>{row.Amount}</TableCell>
                  <TableCell>{row.Date}</TableCell>
                  <TableCell>
                    <span className="Account" style={makeStyle(row.Account)}>
                      {row.Account}
                    </span>
                  </TableCell>
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
          <Box sx={{ display: "flex", justifyContent: "end", padding: "10px" }}>
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

export default Transactions;
