import logo from './logo.svg';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

function App() {
  const [page, setPage] = React.useState('');
  const [dataRows, setDataRows] = React.useState([] as User[]);
  const handleChange = (event: SelectChangeEvent) => {
    setPage(event.target.value);
  };
  React.useEffect(() => {
    let pageNumber = page ? page : 10;
    axios({
      url: `https://reqres.in/api/users?page=${pageNumber}`, 
      method: "GET",
    })
    .then((res: any) => { setDataRows(res.data.data); })
    .catch((err: any) => { console.log(err); });
  }, [page])
  return (
    <div className='container'>
      <div>page : {page}</div>
      <Box sx={{ width: 120 , padding: 2}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={page}
            label="Page"
            onChange={handleChange}
          >
            <MenuItem value={1}>First Page</MenuItem>
            <MenuItem value={2}>Second Page</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper} sx={{ width: '50%' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>ID</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="center">Email</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="center">First Name</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="center">Last Name</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="center">Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                {/* <TableCell align="right">{row.id}</TableCell> */}
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.first_name}</TableCell>
                <TableCell align="center">{row.last_name}</TableCell>
                <TableCell align="center">{row.avatar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );  
}

export default App;


