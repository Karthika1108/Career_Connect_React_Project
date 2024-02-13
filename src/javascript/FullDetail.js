import react, { useEffect, useState } from 'react'
import DashNav from '../javascript/DashNav'
import axios from 'axios'
import background from '../images/background.jpg'
import '../css/FullDetail.css'
import { useParams,Link } from 'react-router-dom'
function Main(){
    const [company,Content]=useState([])
    const {group,name}=useParams();
       useEffect(()=>{
        axios.get(`http://localhost:8000/Content/${group}/${name}`)
            .then(company=>Content(company.data))
            .catch(err=>console.log(err))
       },[name])
    return(
        <div className='parentt'>
       <div className='formm'>  <img  alt='image' className='back' src={background}></img></div>
         <div className='formm'> <DashNav/>
        <div >
                <div>
                    <p>{
                         company.map(comp=>{
                          return  <div >
                            <p className='contain'>You are here to see the details of the {comp.name} company,in which you can get the clear understanding about the company about their 
                          requirement,interview process,Recently asked interview questions and etx.</p>
                            <div className='tab'>
                                
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Location</th>
                                                <th>Package</th>
                                                <th>Domain</th>
                                                <th>requirement</th>
                                                <th>Department allowed</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>{comp.name}</td>
                                            <td>{comp.location}</td>
                                            <td>{comp.lpa}</td>
                                            <td>{comp.domain}</td>
                                            <td>{comp.requirement}</td>
                                            <td>{comp.department}</td>
                                        </tbody>
                                    </table>
                                    </div>
                                    <dl className='head'>
                                    <dt>Company Name     : {comp.name} </dt>

                                    <dt>Company location : {comp.location}</dt>
                                    <dt>Company Package  : {comp.lpa}</dt>
                                    <dt>Domain : {comp.domain}</dt>
                                    <dt>requirement : {comp.requirement}</dt>
                                    <dt>Departments allowed : {comp.department}</dt>
                                    </dl>
                                <table className='tab'>
                                    <thead>
                                        <tr>
                                            <th>About</th>
                                            <th>Interview process</th>
                                            <th>Technical Hr questions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>{comp.about}</td>
                                        <td>{comp.process}</td>
                                        <td>{comp.question}</td>
                                    </tbody>
                                </table>
                                   
                                </div>
                         
                         })
                    }
                    
                    </p>
                </div>
        </div>
        </div>
        </div>
/* //    <div>
//      <div className='parent'>
//         <div className='form'>  <img  alt='image' className='backgroundd' src={background}></img></div>
//         <div className='form'> <DashNav/>
//          <table>
//             <thead>
//             <tr>
//                 <th>group</th>
//                 <th>name</th>
//                 <th>location</th>
//                 <th>lpa</th>
//                 <th>domain</th>
//                 <th>requirement</th>
//                 <th>department</th>
//                 <th>link</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {
//                     company.map(comp=>{
//                        return <tr>
//                             <td>{comp.group} </td>
//                             <td>{comp.name} </td>
//                             <td>{comp.location} </td>
//                             <td>{comp.lpa} </td>
//                             <td>{comp.domain} </td>
//                             <td>{comp.requirement} </td>
//                             <td>{comp.department} </td>
//                             <td>{comp.link} </td>
//                         </tr>
//                     })
//                 }
//             </tbody>
//          </table>
//         </div>
//         </div>
//    </div> */
    )
}
export default Main;
