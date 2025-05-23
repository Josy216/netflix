import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import '../components/titleCards/titleCard.css'
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
  const [isLoading, setIsLoading] = useState(false);

  const moreInfo=(e)=>{
    e.preventDefault();
    setTogle(!togle)
  }

  
    const [movie, setMovie] = useState("");
    const [apiData, setApiData] = useState([]);

    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  let singleCard;
  
   const handleplay = (async (id)=>{
    setIsLoading(true)
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
        setIsLoading(false) 
    })

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
    .then(res => res.json())

    .then(res => {
      const randomIndex = Math.floor(Math.random() * res.results.length);
      singleCard = res.results[randomIndex];
      setApiData(singleCard)
      
    })
    .catch(err => console.error(err));
  
    }, [])



  return (
    <div className='home'>
        <Header />
        <div className="hero">
          {apiData && <img src={`https://image.tmdb.org/t/p/original${apiData?.backdrop_path}`} className='bannerimage' alt="" />}
          <div className="herocaption">
            <h1>{apiData?.original_title}</h1>
            <p className={togle?"overview":"underview"}>{apiData?.overview}</p>
            <div className="herobtn"> 
              <button className='btn' onClick={()=>handleplay(apiData.id)}><img src={playIcon} alt="" />play</button>
              <button className='btn darkbtn' onClick={moreInfo}><img src={infoIcon} alt="" />More Info</button>
            </div>
            <div className="cardstitle">
            <TitleCard isposter = {true}/>  
            </div>
          </div>

        </div>
        <div className="morecards">
          {console.log(movie)}
          
      {movie&&!isLoading&& <div className="rapped"><iframe width="100%" height="350px" ref={navigateto}
       src={`https://www.youtube.com/embed/${movie}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
       <button className='close' onClick={()=>setMovie(null)}>
        
      </button>
       </div>}
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
