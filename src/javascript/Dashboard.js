import react from 'react'
import '../css/Dashboard.css';
import DashNav from './DashNav'
import background from '../images/background.jpg'
import it from '../images/it.jpg'
import ece from '../images/ece.jpg'
import eee from '../images/eee.jpg'
import ft from '../images/ft.jpg'
import agri from '../images/agri.jpg'
import mech from '../images/mech.jpg'
import {Link} from 'react-router-dom'

function Main(){
    return(
     <div>
         <div className='parent'>
        <div className='form'>  <img  alt='image' className='backgroundd' src={background}></img></div>
        <div className='form'> <DashNav/>
         <div className='container'>
            <div className='item'><div className='miniOut' ><Link to="/Content/IT"><img  className='miniImage' src={it} ></img></Link></div> <div className='miniOut'>
                IT Based Companies
                </div></div>
                <div className='item'><div className='miniOut' ><Link to="/Content/ECE"><img  className='miniImage' src={ece} ></img></Link></div> <div className='miniOut'>
                ECE core Companies
                </div></div>
                <div className='item'><div className='miniOut' ><Link to="/Content/EEE"><img  className='miniImage' src={eee} ></img></Link></div> <div className='miniOut'>
                EEE Core Companies
                </div></div>
                <div className='item'><div className='miniOut' ><Link to="/Content/FT"><img  className='miniImage' src={ft} ></img></Link></div> <div className='miniOut'>
                FT Core Companies
                </div></div>
                <div className='item'><div className='miniOut' ><Link to="/Content/MECH"><img  className='miniImage' src={mech} ></img></Link></div> <div className='miniOut'>
                Mech Core Companies
                </div></div>
                <div className='item'><div className='miniOut' ><Link to="/Content/AGRI"><img  className='miniImage' src={agri} ></img></Link></div> <div className='miniOut'>
                Agri Core Companies
                </div></div>
         </div>
        </div>
        </div>
     </div>
    )
}
export default Main;

