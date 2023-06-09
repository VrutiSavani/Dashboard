import { Fab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import './Viewinvoice.css'
import SearchIcon from '@mui/icons-material/Search';



const Viewinvoice = () => {
    function createData(InvoiceID, ClientName, DueDate, Amount, Currency, Status, dots) {
        return { InvoiceID, ClientName, DueDate, Amount, Currency, Status, dots };
    }

    const rows = [
        createData("#Gl-001", 'J.K. Patel', '21 Mar 2021', '10,200', "USD", "Paid", <MoreVertIcon />),
        createData("#Gl-002", 'Rajesh Patel', '21 Jun,2023', '25,10,200', "INR", "Pending", <MoreVertIcon />),
        createData("#Gl-003", 'David John', '12 Feb,2019', '36,000', "USD", "Unpaid", <MoreVertIcon />),
        createData("#Gl-004", 'Hareshbhai Patel', '24 Mar,2022', '42,000', "USD", "Paid", <MoreVertIcon />),
        createData("#Gl-005", 'Ronak Patel ', '21 Mar,2023', '29,000', "USD", "Paid", <MoreVertIcon />),
        createData("#Gl-006", 'Rohan Patel', ' 1 Jun,2023', '14,00,000', "INR", "Paid", <MoreVertIcon />),
        createData("#Gl-007", 'Jecky Patel', '28 Jan,2018', '18,54.000', "INR", "Paid", <MoreVertIcon />),
        createData("#Gl-008", 'Jayesh Gohel', '30 Apr,2021', '9,00,800', "INR", "Paid", <MoreVertIcon />),
    ]
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
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell scope="row" className='invoice01'>
                                    {row.InvoiceID}
                                </TableCell>
                                <TableCell>{row.ClientName}</TableCell>
                                <TableCell>{row.DueDate}</TableCell>
                                <TableCell>{row.Amount}</TableCell>
                                <TableCell>{row.Currency}</TableCell>
                                <TableCell>{row.Status}</TableCell>
                                <TableCell>{row.dots}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div >
                <nav aria-label="Page navigation example" className='pagination-3'>
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

export default Viewinvoice