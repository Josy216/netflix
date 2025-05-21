import React, { useEffect, useRef, useState } from 'react'
import './titleCard.css'
// import cardsData from '../../Asset/assets/cards/Cards_data'
const API_KEY = import.meta.env.VITE_API_KEY;


function TitleCard({title,isposter,  category}) {
  const [apiData, setApiData] = useState([]);
  const [movie, setMovie] = useState(null);
  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

  const handleclick = (event)=>{
  event.preventDefault(); 
  cardsRef.current.scrollLeft += event.deltaY;

  }
  useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleclick)
  }, [movie])



   const handlevedios = (async (id)=>{
    if(isposter) return 
const results = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
const data = await results.json()
let trainler = data.results.find(
          (v) => v.site === 'YouTube' && v.type === 'Trailer'
        );
        if(trainler){
          setMovie(trainler.key)
        }
        setTimeout(() => {
          cardsRef.current.scrollIntoView({
            behavior: "smooth",
          })  
        }, 100);
        
    })

  return (
    <div className='cardtitle'>
      <h2>{title?title:"Pupular on Netflix"}</h2>
      <div className="cardlist" ref={cardsRef}>
        {apiData.map((card, index)=>{
          
          return <div  className="card" onClick={()=>handlevedios(card.id)} key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${isposter? card.poster_path: card.backdrop_path}`} className = { isposter ? `poster` : ""} alt="" />
             <p>{card.original_title}</p>
          </div >
        })}
      </div>
      {movie&&<><iframe width="100%" height="350px" src={`https://www.youtube.com/embed/${movie}`} title='trailer' frameBorder='0' allowFullScreen ></iframe> 
      <span className='close' onClick={()=>setMovie(null)}>
        X
      </span>
      </>}
      
    </div>
  )
}

export default TitleCard

