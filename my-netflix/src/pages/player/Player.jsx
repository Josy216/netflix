import React, { useEffect, useState } from 'react'
import './player.css'
import { useNavigate, useParams } from 'react-router-dom'
import backarrow from '../../Asset/assets/back_arrow_icon.png'
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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY4ODc5NDRkMDc1YzQzMTdjMjdjZGI0ZWFhZjJiOCIsIm5iZiI6MTc0Njk2NDE5OC40ODEsInN1YiI6IjY4MjA4ZWU2YTliY2UwZTU4NjczOGMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rdO74ME72p523uCMfaT2HzQ7-6OJhdcU5dSG57HDzfw'
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
