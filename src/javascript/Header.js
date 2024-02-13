import React from "react"
import { FaBookOpen, FaUser } from "react-icons/fa";
import { FaInfinity} from "react-icons/fa";
import {  Link } from "react-router-dom";
import '../css/Header.css';
function Main(){
    const icon={
        fontSize:'50px',
        marginTop:'14px',
        marginLeft:'30px',
        color:'white'
    }
    const user={
        fontSize:'30px',
        marginTop:'22px',
        marginLeft:'30px',
        color:'white',
        marginLeft:'200px'
    }
    return(
      <div className="nav">
      <FaInfinity style={icon} />
      <p className="imp"  style={{marginRight:"200px"}}><span className="top">C</span>areer<span className="top">C</span>onnect</p>
           
       <div className="navItem">      <Link to="/Login">Login</Link></div> 
       <div className="navItem">     <Link to="/SignUp ">Signup</Link></div>
       <div className="navItem">      <Link to="/Form">Company Form</Link></div>  
       <div className="navItem">     <Link to="/Dashboard">Dashboard</Link></div>
       </div>
    )
}
export default Main;