import React, { useEffect, useRef } from 'react'
import './Header.css'
import logo from '../../Asset/assets/logo.png'
import searchIcon from '../../Asset/assets/search_icon.svg'
import bellIcon from '../../Asset/assets/bell_icon.svg'
import profileIcon from '../../Asset/assets/profile_img.png'
import dropIcon from '../../Asset/assets/caret_icon.svg'
import { logout } from '../../Firebase'
function Header() {
    const navRef = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('navblack')
            } else {
                navRef.current.classList.remove('navblack')
            }
        }
        )
    }, [])
  return (
    <div className='navbar' ref={navRef}>
        <div className="navbarleft">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & pupular</li>
                <li>My List</li>
                <li>Browse by language</li>
            </ul>
        </div>
        <div className="navbarright">
            <img src={searchIcon} alt="" className='icons' />
            <p>Children</p>
            <img src={bellIcon} alt="" className='icons' />

            <div className="navbarprofile">
            <img src={profileIcon} alt="" className='profile' />
            <img src={dropIcon} alt=""  />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>sign out of netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header
