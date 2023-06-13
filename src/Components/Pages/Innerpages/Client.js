import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

function createData(Name, Email, dots) {
  return { Name, Email, dots };
}

const settings = ["Edit", "View"];
const rows = [
  createData("John Due", "radhecreation@gmail.com", <MoreVertIcon />),
  createData("David John", "krishnacreation@gmail.com", <MoreVertIcon />),
  createData("JK Patel", "uniquecreation@gmail.com", <MoreVertIcon />),
];
const name = (id) => {
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
const Email = (Email) => {
  if (Email !== null)
    return {
      color: "blue",
    };
  else {
    return {
      color: "white",
    };
  }
};

export default function Clienttab() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 5px #80808029" }}
      >
        <h3 className="Invoice1">Clients</h3>
        <div className="divider" />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Name}>
                <TableCell component="th" scope="row">
                  <span className="name" style={name(row.Name)}>
                    {row.Name}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="Email" style={Email(row.Email)}>
                    {row.Email}
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
                      sx={{ mt: "20px", ml: "10px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "end",
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
                          <Typography textAlign="right">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <center>
          <button className="btn">
            <Link to="/Viewclient" className="link1">
              View All Clients
            </Link>
          </button>
        </center>
      </TableContainer>
    </div>
  );
}
