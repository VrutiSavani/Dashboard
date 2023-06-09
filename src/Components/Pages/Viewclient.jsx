import React from 'react'
import Table from '@mui/material/Table';
import { Box } from '@mui/system';
import { Fab, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Transaction.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Viewclient.css'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';



const Viewclient = () => {

    function createData(ID, Clientname, Contact, Firmname, Orders,  dots) {
        return { ID, Clientname, Contact, Firmname, Orders,  dots };
    }

    const rows = [
        createData(1, 'J.K Patel', '+91 8832832382', 'Radhe Trades', "5",   <MoreVertIcon />),
        createData(2, 'Rajesh Patel', '+91 8832832382', 'Radhe Trades', "1",   <MoreVertIcon />),
        createData(3, 'David John', '+91 8832832382', 'Radhe Trades', "3",   <MoreVertIcon />),
        createData(4, 'Jackey Patel', '+91 8832832382', 'Radhe Trades', "2",   <MoreVertIcon />),
        createData(5, 'Hareshbhai Patel', '+91 8832832382', 'Radhe Trades', "5",   <MoreVertIcon />),
        createData(6, 'Ronak patel', '+91 8832832382', 'Radhe Trades', "7",   <MoreVertIcon />),
        createData(7, 'Roshan Patel', '+91 8832832382', 'Radhe Trades', "5",   <MoreVertIcon />),
        createData(8, 'Jayesh Gohel', '+91 8832832382', 'Radhe Trades', "8",   <MoreVertIcon />),
    ]
    return (
        <div>
            <div className='main001'>
                <div className='s1'>
                    <input placeholder='search' className='search0' />
                    <SearchIcon />
                </div>
                <div className='add'>
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
                        <TableRow className='line'>
                            <TableCell>ID</TableCell>
                            <TableCell>Client Name </TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell>Firm Name</TableCell>
                            <TableCell>Orders</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow

                            >
                                <TableCell scope="row">
                                    {row.ID}
                                </TableCell>
                                <TableCell>{row.Clientname}</TableCell>
                                <TableCell>{row.Contact}</TableCell>
                                <TableCell>{row.Firmname}</TableCell>
                                <TableCell>{row.Orders}</TableCell>
                                <TableCell>{row.dots}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div >
                <nav aria-label="Page navigation example" className='pagination-1'>
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
            </TableContainer>

        </div>
    )
}

export default Viewclient