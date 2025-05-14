import React, { useState } from 'react'
import logo from '../../Asset/assets/logo.png'
import {login, signup} from '../../Firebase'
import './login.css'
import netflixspinner from '../../Asset//assets/netflix_spinner.gif'
function Login() {


  const [sign, setSign] = useState("Sign In");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_outh = async (event) => {
    event.preventDefault();
    setLoading(true)
    if(sign === "Sign In"){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
    setLoading(false)
  }


 
  return (
    loading ? <div className='loading'>
      <img src={netflixspinner} alt="" />
      <h1>Loading...</h1>
    </div> :
    <div className='login'>
      <img src={logo} className='logonlogo' alt="" />
      <div className="loginform">
        <h1>{sign}</h1>
        <form >
        {sign==="Sign Up"?<input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name' /> : <></> }
          
          <input type="email" value={email} placeholder=' Email' onChange={(e)=>{setEmail(e.target.value)}}  />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder=' password' />
          <button onClick={user_outh} type='submit'>{sign}</button>
          <div className="formhelp">
            <div className="remember">

              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="formswitch">
        {sign === "Sign In"? <p>New to Netflix? <span onClick={()=>{setSign("Sign Up") }}>Sign Up Now</span></p>: <p>Already have account? <span onClick={()=>{setSign("Sign In") }}>Sign In Now</span></p> } 
        </div>
      </div>
    </div>
  )
}

export default Login
