import { Routes, Route, useNavigate } from 'react-router-dom'


  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/login/Login.jsx'
import Player from './pages/player/Player.jsx'
 import { onAuthStateChanged } from 'firebase/auth'
import {  useEffect } from 'react'
import { auth } from './Firebase.js' 

function App() {
  


  const navigate = useNavigate();
useEffect(() => {  
 
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  });
}, []);



  return (
    <div className="app">
         <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
