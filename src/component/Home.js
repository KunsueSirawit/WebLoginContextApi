import Navbar from "./navbar";
import Body from './body'
import Footer from "./footer";
import { useContext } from "react"
import { DataContext } from "../App"


const Home = () =>{

    return (
        <>
            <Navbar/>
            <Body/>
        </>
    )
}

export default Home 