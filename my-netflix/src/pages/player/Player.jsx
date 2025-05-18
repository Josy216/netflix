import React, { useEffect, useState } from 'react'
import './player.css'
import { useNavigate, useParams } from 'react-router-dom'
import backarrow from '../../Asset/assets/back_arrow_icon.png'

const API_KEY = import.meta.env.VITE_API_KEY;
function Player() {
  const navigate = useNavigate();
  const { id } = useParams();
const [apidata, setApidata] = useState({
  name: "",
  key : "",
  published_at: "",
  type: ""
})


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_KEY
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results[0]))
    .catch(err => console.error(err));  
}
, [])

  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="playerInfo">
        <p>{apidata.published_at.slice(0, 10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>

      </div>
    </div>
  )
}

export default Player
