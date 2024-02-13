import react, { useEffect, useState } from 'react'
import DashNav from '../javascript/DashNav'
import axios from 'axios'
import background from '../images/background.jpg'
import '../css/Content.css'
import { useParams,Link } from 'react-router-dom'
function Main(){
    const [company,Content]=useState([])
    const {group}=useParams();
   useEffect(()=>{
     axios.get(`http://localhost:8000/Content/${group}`)
         .then(company=>Content(company.data))
         .catch(err=>console.log(err))
    },[group])
   
    
    return(
   <div>
     <div className='parent'>
        <div className='form'>  <img  alt='image' className='backgroundd' src={background}></img></div>
        <div className='form'> <DashNav/>
         <table>
            <thead>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Location</th>
                <th>Package</th>
                <th>Domain</th>
                <th>More</th>
            </tr>
            </thead>
            <tbody>
                {
                    company.map(comp=>{
                       return <tr>
                            <td>{comp.group} companies</td>
                            <td>{comp.name} </td>
                            <td>{comp.location} </td>
                            <td>{comp.lpa} </td>
                            <td>{comp.domain} </td>
        
                            <td><Link style={{color:`black`}} to={`/Content/${group}/${comp._id}`}>More</Link></td>
                        </tr>
                    })
                }
            </tbody>
         </table>
        </div>
        </div>
   </div>
    )
}
export default Main;
