import { useContext } from "react"
import { DataContext } from "../App"
import {useEffect, useState} from 'react'
import axios from 'axios'



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from "./navbar";
import { Container } from "@mui/system";


const Tabledata = () => {

    const {useremail, setUseremail, userpassword, setUserpassword,
        userrepassword, setUserrepassword, coloruseremail, setColoruseremail, colorpassword, setColorpassword,
        colorrepassword,  erroruseremail, setErroruseremail, errorpassword, setErrorpassword,
        errorrepassword, currentUser , setCurrentUser ,  erroruserlogin , setErroruserlogin  , currentPage , setCurrentPage } = useContext(DataContext)
        
    const [ userdata , setUserData ] = useState([])
            const baseurl = 'https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt'
        
        
    const getdata  = async() =>{
            const response = await axios.get(baseurl)
            const correctdata =   (response.data).slice(11, -3)
            const correctdata2 =  JSON.parse(correctdata)
            setUserData(correctdata2)
            }

        const checkusername = () => {
            if ( currentUser !== ('')){
                getdata()
            } else {
                alert('please login')
                window.location.href = '/'
            }
    }

    useEffect(()=>{
      setCurrentPage('table')
    },[])

    checkusername()
    
        return (
          <>
          <Navbar/>
          <Container component="main" maxWidth="lg" sx={{ mt: 5}}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> ID </TableCell>
                  <TableCell align="right"> Class </TableCell>
                  <TableCell align="right"> Big-Class </TableCell>
                  <TableCell align="right"> Country </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userdata.map((data , index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="data">
                      {index}
                    </TableCell>
                    <TableCell align="right">{data.make_id}</TableCell>
                    <TableCell align="right">{data.make_display}</TableCell>
                    <TableCell align="right">{data.make_country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Container>
          </>
        )
}

export default Tabledata