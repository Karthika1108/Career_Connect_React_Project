import react, { useState } from 'react';
import '../css/Login.css'
import  background from '../images/background.jpg'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
function Detail(){
  const page=useNavigate();
   const[email,checkEmail]=useState();
   const[password,checkPassword]=useState();
   async function check(e){
      e.preventDefault();
      try{
        await axios.post("http://localhost:8000/Login",{
         email,password
        })
        .then(res=>{
          if(res.data==='existsUser'){
            alert('Login sucessful  as User')
            page('/Dashboard')
          }
          else if(res.data==='existsAdmin'){
            alert('Login Sucessful as Admin')
            page('/Form')
          }
          else if(res.data==='Password incorrect'){
            alert('Password is incorrect')
          }
          else if(res.data==='Account not found'){
            alert('No matching account found,signup  now');
            page('/Login')
          }
        })
        
   }catch(e){
     console.log(e);
   }
}
    return(
        <div>
            <div className='parent'>
              <div className='form'>  <img  alt='image' className='background' src={background}></img></div>
                <div className='form'>
                    <div className='box'>
                       
                         </div>
                     <div className='box'>
                     <form   action='login' method='post'>
                        <div className='formTop'>Login </div>
                          <div>
                            <input   onChange={(e)=>checkEmail(e.target.value)}   type='Email' id='email' name='email' placeholder='Email'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input  onChange={(e)=>checkPassword(e.target.value)}  type='password' id='password' name='password' placeholder='Password'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='submit' onClick={check} placeholder='Submit'></input>
                          </div>
                          
                        </form>
                    
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;