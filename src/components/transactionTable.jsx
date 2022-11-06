import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hidden } from '@mui/material';

function createData(
  hash,
  from,
  to,
  value,
  fee,
) {
  return { hash, from, to, value, fee };
}

const rows = [
  createData('0x3d23672bc488badcf56b6ee822bf308....', "0xe1a5a8307489b0b4f52651feb33982...", "0x490c51566c2afb71c4e39421146fea68...", 0.001, 0.00012520497767106),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];




export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style ={{background: "rgb(34, 132, 180)", borderRadius: "25px", color: "#fff"}}>
            <TableCell style={{color: "#fff"}}>Txn Hash</TableCell>
            <TableCell style={{color: "#fff"}} align="middle">From</TableCell>
            <TableCell style={{color: "#fff"}} align="middle">To</TableCell>
            <TableCell style={{color: "#fff"}} align="middle">Value</TableCell>
            <TableCell style={{color: "#fff"}} align="middle">[Txn Fee]</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.hash}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } , overflow: "hidden", textOverflow: "clip" }} 
            >
              <TableCell style={{overflow: "hidden", width: "5rem", textOverflow: "clip"}} component="th" scope="row">
                {row.hash}
              </TableCell>
              <TableCell align="middle">{row.from}</TableCell>
              <TableCell align="middle">{row.to}</TableCell>
              <TableCell align="middle">{row.value}</TableCell>
              <TableCell align="middle">{row.fee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
