import react, { useState } from 'react';
import '../css/SignUp.css'
import  background from '../images/background.jpg'
import {Link,useNavigate} from 'react-router-dom';
import Header from './Header'
import axios from 'axios'
function Detail(){
  const page=useNavigate();
    var [email,setEmail] = useState()
    const [password,setPassword] = useState();
    const [role,setRole]=useState();

    async function submit(e){
        e.preventDefault();
        try{
             await axios.post("http://localhost:8000/signup",{
              email,password,role
             })
             .then(res=>{
              if(res.data==='exists'){
                page('/Login')
                alert("Account alreday exists")
              }
              else if(res.data==='inserted'){
               page('/SignUp')
                alert('Account created sucessfully')
              }
              else{
                alert("Error ");
              }
             })
        }
        catch(err){
         console.log(err)
        }
    }
    return(
       
        <div>
            <div className='parent'>
            
              <div className='form'>  <img  alt='image' className='background' src={background}></img></div>
              <div className='form'>  <Header/></div>
                <div className='form'>
                    
                     <div className='boxS'>
                     <form   action='signup' method='post'>
                        <div className='formTop'>SignUp Account</div>
                          <div>
                            <input  onChange={(e)=>setEmail(e.target.value)}  type='Email' id='email' name='email' placeholder='Email'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setPassword(e.target.value)} type='password' id='password' name='password' placeholder='Password'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setRole(e.target.value)} type='text' id='role' name='role' placeholder='role'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='submit' onClick={submit}  placeholder='Submit'></input>
                          </div>
                          <div className='sign'>
                            Already have an account?<Link to="/Login" style={{color:'#043a38 '}}>Login</Link>
                        </div>
                        </form>
                    
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;