import { useEffect, useState ,useContext } from "react"
import { DataContext } from "../App"
import { Navigate , useNavigate  , Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';


const Signup = () =>{

    const {useremail, setUseremail, userpassword, setUserpassword,
           userrepassword, setUserrepassword, coloruseremail,  colorpassword, 
           colorrepassword, erroruseremail, setErroruseremail, errorpassword, setErrorpassword,
           errorrepassword, setErorrepassword , userData , setUserData , setUsercheck  } = useContext(DataContext)

    const navigate = useNavigate()       

    const sendtoserver = (e) =>{
        e.preventDefault()

        const newdata = {
                id : uuidv4(),
                Email : useremail,
                password : userpassword
        }

        

        const isemail = () => {
            const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            

            const long = userData.length

            const check = () =>{
                for ( let i  = 0 ; i < long ; i++){
                    if (userData[i].Email.includes(!useremail)) {
                        setUsercheck('correct')
                        console.log('aa')
                    } else {
                        setUsercheck('fail')
                        console.log('bb')
                    }
                } 
            }

            check()


            if (re.test(newdata.Email)){
                    setErroruseremail('correct')
                } else {
                    setErroruseremail('fail')
            }

            if (re.test(newdata.password)){
                setErrorpassword('correct')
            } else {
                setErrorpassword('fail')
            }

            if (userpassword === userrepassword  ){
                setErorrepassword('correct')
            } else {
                setErorrepassword('fail')
            }
                    
            if ([erroruseremail , errorpassword , errorrepassword ].every(x => x == 'correct')){
                setUserData([...userData, newdata])
                setUseremail('')
                setUserpassword('')
                setUserrepassword('')
                setErroruseremail('')
                setErrorpassword('')
                setErorrepassword('')
                alert('Register complete')
                navigate("/")
            }
        }
        
        isemail()
        // }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className="container">
            <form onSubmit={sendtoserver}>
                <div >
                    <div>
                        <h1> Register </h1>
                    </div>
                    <div className="inform">
                        <h3> Email </h3>
                        <input type="text" placeholder="your email" value={useremail} autoComplete="off" onChange={(e) => setUseremail(e.target.value)}  style={{borderColor:coloruseremail}} />
                        <label style={{color:coloruseremail}}>  {erroruseremail}  </label>
                    </div>
                    <div className="inform">
                        <h3> Password </h3>
                        <input type="password" placeholder="your password" value={userpassword} autoComplete="off" onChange={(e) => setUserpassword(e.target.value)} style={{borderColor:colorpassword}}  />
                        <label style={{color:colorpassword}}>  {errorpassword}  </label>
                    </div>
                    <div className="inform">
                        <h3> Repassword </h3>
                        <input type="password" placeholder="confirm your password" value={userrepassword} autoComplete="off" onChange={(e) => setUserrepassword(e.target.value)} style={{borderColor:colorrepassword}}  />
                        <label style={{color:colorrepassword}}>  {errorrepassword}  </label>
                    </div>
                    <br/>
                    <button type="submit" className="submitform"> Submit </button>
                    <div>
                     <Link to="/login" ><label> You are not the member yet? </label></Link >
                    </div>
                </div>
        </form>
        </div>
    )
}

export default Signup
