import { Fab,Container,Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React , {useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import './Viewinvoice.css';
import { Data2 } from '../Commons/Data2';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";



const Viewinvoice = () => {
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
  

    function createData(InvoiceID, ClientName, DueDate, Amount, Currency, Status, dots) {
        return { InvoiceID, ClientName, DueDate, Amount, Currency, Status, dots };
    }

    const settings = ["Edit", "View"]

  
const makeStyle = (status) => {
  if (status === "Paid") {
    return {
      background: "#1F935A",
      color: "white",
    };
  } else if (status === "Pending") {
    return {
      background: "yellow",
      color: "white",
    };
  } else {
    return {
      background: "red",
      color: "white",
    };
  }
};
    const records = Data2.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Data2.length / recordsPerPage);
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
            <div className='addbtn'>
                <div className='searchbar'><input placeholder='search' className='search01' />
                    <SearchIcon />
                </div>
                <div ><Link to="/Addinvoice"><Fab color="white" aria-label="add">
                    <AddIcon />
                </Fab></Link></div>
            </div>

            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 5px #80808029" }}
            >
                <Table>
                    <TableHead>
                        <TableRow className='line1'>
                            <TableCell>Invoice ID</TableCell>
                            <TableCell>Client Name</TableCell>
                            <TableCell>Due Date</TableCell>
                            <TableCell>Firm Name</TableCell>
                            <TableCell>Currency</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records              .filter((user) => user.Type.includes(Query))
.map((row) => (
                            <TableRow>
                                <TableCell scope="row" className='invoice01'>
                                    {row.InvoiceID}
                                </TableCell>
                                <TableCell>{row.ClientName}</TableCell>
                                <TableCell>{row.DueDate}</TableCell>
                                <TableCell>{row.Amount}</TableCell>
                                <TableCell>{row.Currency}</TableCell>
                                <TableCell><span className="Status" style={makeStyle(row.Status)}>
                    {row.Status}
                  </span></TableCell>
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
                        horizontal: 'right'
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
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
          </Box>
                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                < Container>
        <Box sx={{display: "flex", justifyContent:"right"}}>
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
    )
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
}

export default Viewinvoice