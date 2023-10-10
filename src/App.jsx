
import {BrowserRouter , Routes ,Route}  from 'react-router-dom'
import Home from './pages/Home.jsx' 
import Singin from './pages/Singin';
import About from './pages/About';
import SingUp from './pages/SingUp';
import Profile from './pages/Profile';

export default function App() {
  
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/'  element={<Home />}/>
       <Route path='/sign-in'  element={<Singin />}/>
       <Route path='/about'  element={<About />}/>
       <Route path='/sign-up'  element={<SingUp />}/>
       <Route path='/profile'  element={<Profile />}/>
       
    </Routes>
    </BrowserRouter> );

}
