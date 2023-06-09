import React from 'react'
import Table from '@mui/material/Table';
import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Transaction.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Transactions = () => {
    function createData(ID, Income, Type, Currency, Amount, Date, Account, dots) {
        return { ID, Income, Type, Currency, Amount, Date, Account, dots };
    }

    const rows = [
        createData(1, 'Radhe Textile', 'Cash', 'USD', "12000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(2, 'Radhe Textile', 'Bank', 'USD', "21,000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(3, 'Radhe Textile', 'Bank', 'USD', "22,10,000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(4, 'Radhe Textile', 'Cash', 'USD', "10,000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(5, 'Radhe Textile', 'Cash', 'USD', "12000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(6, 'Radhe Textile', 'Cash', 'USD', "1,2000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(7, 'Radhe Textile', 'Cash', 'USD', "80,000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
        createData(8, 'Radhe Textile', 'Cash', 'USD', "12,000", '19 Nov,2021', 'Credit', <MoreVertIcon />),
    ]
    return (
        <div>
            <div className='one'>
                <div className='searchbar0' >
                    <input placeholder='search' className='search001' />
                    <SearchIcon />
                </div>
                <div className='filter'>Filter
                    <ArrowDropDownIcon className='filtericon' />
                    </div>
                    </div>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 5px #80808029" }}
            >
                <Table>
                    <TableHead>
                        <TableRow className='line2'>
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
                        {rows.map((row) => (
                            <TableRow

                            >
                                <TableCell scope="row">
                                    {row.ID}
                                </TableCell>
                                <TableCell>{row.Income}</TableCell>
                                <TableCell>{row.Type}</TableCell>
                                <TableCell>{row.Currency}</TableCell>
                                <TableCell>{row.Amount}</TableCell>
                                <TableCell>{row.Date}</TableCell>
                                <TableCell>{row.Account}</TableCell>
                                <TableCell>{row.dots}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div >
                <nav aria-label="Page navigation example" className='pagination-2'>
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

export default Transactions