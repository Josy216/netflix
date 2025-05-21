import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import Header from '../components/Header/Header'
// import hero from '../Asset/assets/hero_banner.jpg'
// import herotitle from '../Asset/assets/hero_title.png'
import playIcon  from '../Asset/assets/play_icon.png'
import infoIcon  from '../Asset/assets/info_icon.png'
import TitleCard from '../components/titleCards/TitleCard'
import Footer from '../components/Footer/Footer'
const API_KEY = import.meta.env.VITE_API_KEY;

function Home() {
  const navigateto = useRef()
  const [togle, setTogle] = useState(false);

  const moreInfo=(e)=>{
    e.preventDefault();
    setTogle(!togle)
  }

  
    const [movie, setMovie] = useState(null);
    const [apiData, setApiData] = useState([]);

    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  let singleCard;
  if(apiData.length > 0){
    singleCard = apiData[Math.floor(Math.random() * apiData.length)]; 
  }
  
   const handleplay = (async (id)=>{
const results = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
const data = await results.json()
let trainler = data.results.find(
          (v) => v.site === 'YouTube' && v.type === 'Trailer'
        );
        if(trainler){
          setMovie(trainler.key)
        }
        setTimeout(() => {
navigateto.current?.scrollIntoView({
  behavior: "smooth",
})  }, 100);
    })

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  
    }, [])
  return (
    <div className='home'>
        <Header />
        <div className="hero">
          {singleCard && <img src={`https://image.tmdb.org/t/p/original${singleCard.backdrop_path}`} className='bannerimage' alt="" />}
          <div className="herocaption">
            <h1>{singleCard?singleCard.title:""}</h1>
            <p className={togle?"overview":"underview"}>{singleCard?singleCard.overview : ""}</p>
            <div className="herobtn"> 
              <button className='btn' onClick={()=>handleplay(singleCard.id)}><img src={playIcon} alt="" />play</button>
              <button className='btn darkbtn' onClick={moreInfo}><img src={infoIcon} alt="" />More Info</button>
            </div>
            <div className="cardstitle">
            <TitleCard isposter = {true}/>  
            </div>
          </div>

        </div>
        <div className="morecards">
          
      {movie?<iframe width="100%" height="350px" ref={navigateto}
       src={`https://www.youtube.com/embed/${movie}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>:""}
          <TitleCard  title={"Pupular on Netflix"} category={"popular"}/>
          <TitleCard  title={"Blockbuster movie"} category={"top_rated"}/>
          <TitleCard  title={"upComing"} category={"upcoming"}/>
          <TitleCard  title={"Top pics for you"} category={"popular"}/>
        </div>
        <Footer />
    </div>
  )
}

export default Home
