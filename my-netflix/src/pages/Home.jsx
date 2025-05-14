import React from 'react'
import './home.css'
import Header from '../components/Header/Header'
import hero from '../Asset/assets/hero_banner.jpg'
import herotitle from '../Asset/assets/hero_title.png'
import playIcon  from '../Asset/assets/play_icon.png'
import infoIcon  from '../Asset/assets/info_icon.png'
import TitleCard from '../components/titleCards/TitleCard'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
        <Header />
        <div className="hero">
          <img src={hero} className='bannerimage' alt="" />
          <div className="herocaption">
            <img src={herotitle} className='captionimage' alt="" />
            <p>Discovering his ties to ancient order, a young man living in modern Istabul embarks o a quest to save a city from an imortal enemy</p>
            <div className="herobtn"> 
              <button className='btn'><img src={playIcon} alt="" />play</button>
              <button className='btn darkbtn'><img src={infoIcon} alt="" />More Info</button>
            </div>
            <div className="cardstitle">
            <TitleCard  />  
            </div>
          </div>
        </div>
        <div className="morecards">
          <TitleCard  title={"Blockbuster movie"} category={"top_rated"}/>
          <TitleCard  title={"upComing"} category={"upcoming"}/>
          <TitleCard  title={"Top pics for you"} category={"popular"}/>
        </div>
        <Footer />
    </div>
  )
}

export default Home
