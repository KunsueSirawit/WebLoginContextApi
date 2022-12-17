import Table from "./component/table";
import { createContext , useState } from "react";
import Login from "./component/Login";
import Home from './component/Home';
import { Route , Routes } from "react-router-dom";
import Signup from "./component/Signup";

export const DataContext = createContext()

function App() {

  const [ userData ,  setUserData] = useState([
    {
      id : 'kunsue12345689',
      Email : 'kunsue123@gmail.com',
      password : '123456798qQ'
    }
  ])

  const [ useremail , setUseremail ] = useState('')
  const [ userpassword , setUserpassword ] = useState('')
  const [ userrepassword , setUserrepassword ] = useState('')

  const [ currentTime, setCurrentTime ] = useState('')

  const [ currentUser , setCurrentUser ] = useState('')
  const [ currentPage , setCurrentPage ] = useState('')

  const [ coloruseremail , setColoruseremail ] = useState('')
  const [ colorpassword , setColorpassword ] = useState('')
  const [ colorrepassword , setColorrepassword ] = useState('')
  

  const [ erroruseremail ,setErroruseremail] = useState('')
  const [ errorpassword ,setErrorpassword] = useState('')
  const [ errorrepassword , setErorrepassword ] = useState('')
  const [ erroruserlogin , setErroruserlogin ] = useState('')
  const [ usercheck , setUsercheck ] = useState('') 

  return (
    <div className="App">
    <DataContext.Provider value={{ useremail , setUseremail , userpassword  ,setUserpassword  ,
        userrepassword, setUserrepassword  ,coloruseremail , setColoruseremail ,colorpassword , setColorpassword,
        colorrepassword, setColorrepassword  ,erroruseremail ,setErroruseremail , errorpassword ,setErrorpassword ,
        errorrepassword, setErorrepassword  , userData , setUserData , currentUser , setCurrentUser , currentTime, setCurrentTime,
        erroruserlogin , setErroruserlogin , usercheck , setUsercheck , currentPage , setCurrentPage  }}>
    <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/signup" element={<Signup/>} /> 
    <Route path = "/login" element={<Login/>} />
    <Route path = "/table" element={<Table/>} /> 
    </Routes>
        </DataContext.Provider>
    </div>
  );
}

export default App;
