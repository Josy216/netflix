import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='OuterHeader'>
        <div className='Headerconainer'>
            <div className='Headerleft'>
            <ul>
                <li>Netflix</li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by language</li>
            </ul>
            </div>
            <div className="hearderright">
                <ul>
                    <li><SearchIcon /> </li>
                    <li><NotificationsNoneIcon /> </li>
                    <li> <AccountBoxIcon /> </li>
                    <li> <ArrowDropDownIcon /> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
