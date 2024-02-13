import logo from './logo.svg';
import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import  SignUp from  './javascript/SignUp';
import Login from './javascript/Login';
import Form from './javascript/Form';
import Dashboard from './javascript/Dashboard';
import Content from './javascript/Content'
import FullDetail from './javascript/FullDetail'
function App(){
  return(
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>} ></Route>
        <Route path='/Form' element={<Form/>} ></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Content/:group' element={<Content/>}></Route>
        <Route path='/Content/:group/:name' element={<FullDetail/>}></Route>

      </Routes>
    
      </BrowserRouter>
    </div>
  )
}
export default App;