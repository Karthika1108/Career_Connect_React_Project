import react, { useState } from 'react';
import '../css/Form.css'
import  background from '../images/background.jpg'
import {Link} from 'react-router-dom';
import Header from './Header'
import axios from 'axios'
function Detail(){
   const[group,setGroup]=useState()
   const[name,setName]=useState()
   const[location,setLocation]=useState()
   const[lpa,setLpa]=useState()
   const[domain,setDomain]=useState()
   const[requirement,setRequirement]=useState()
   const[department,setDepartment]=useState()
   const[link,setLink]=useState()
   const[about,setAbout]=useState()
   const[process,setProcess]=useState()
   const[question,setQuestion]=useState()
   async function formSubmit(e){
    e.preventDefault()
    try{
      await axios.post('http://localhost:8000/form',{
        group,name,location,lpa,domain,requirement,department,link,about,process,question
      }) 
      .then(res=>{
        if(res.data==='inserted'){
          alert("Company record inserted")
        }
        else{
          alert("error");
        }
      })
    }catch(err){
      console.log(err);
    }
   }
    return(
        
        <div>
            
            <div className='parent'>
           
              <div className='form'>  <img  alt='image' className='backgroundd' src={background}></img></div>
              <div className='form'>  <Header/></div>
                <div className='form'>
                    <div className='boxx'>
                       
                         </div>
                     <div className='boxx'>
                     <form   action='form' method='post'>
                        <div className='formTop'>Company  Details</div>
                        <select onChange={(e)=>setGroup(e.target.value)} id="group" value="group">
                          <option >Select</option>
                            <option value="IT">IT based Companies</option>
                            <option value="ECE">ECE based Companies</option>
                            <option value="EEE">EEE based Companies</option>
                            <option value="MECH">Mech based Companies</option>
                            <option value="FT">FT based Companies</option>
                            <option value="AGRI">Agri based Companies</option>
                            </select>
                          <div>
                            <input  onChange={(e)=>setName(e.target.value)}  type='text' id='name' name='name' placeholder='Name'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setLocation(e.target.value)} type='text' id='location' name='location' placeholder='location'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setLpa(e.target.value)} type='text' id='lpa' name='lpa' placeholder='lpa'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setDomain(e.target.value)} type='text' id='domain' name='domain' placeholder='domain'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setRequirement(e.target.value)} type='text' id='requirement' name='requirement' placeholder='requirement'></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setDepartment(e.target.value)} type='text' id='department' name='department' placeholder='department' ></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <textarea onChange={(e)=>setAbout(e.target.value)} type='text' id='about' name='about' placeholder='about' ></textarea>
                            <div className='error'></div>
                          </div>
                          <div>
                            <textarea rows="4" cols="40" onChange={(e)=>setProcess(e.target.value)} type='text' id='process' name='process' placeholder='process' ></textarea>
                            <div className='error'></div>
                          </div>
                          <div>
                            <textarea onChange={(e)=>setQuestion(e.target.value)} type='text' id='question' name='question' placeholder='question' ></textarea>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input onChange={(e)=>setLink(e.target.value)} type='text' id='link' name='link' placeholder='link' ></input>
                            <div className='error'></div>
                          </div>
                          <div>
                            <input type='submit' onClick={formSubmit}  placeholder='Submit'></input>
                          </div>
                
                        </form>
                    
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;