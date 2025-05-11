import React from 'react'
import './footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
function Footer() {
  return (
      <div className="footer">
        <div className="icon">
        <div className="icons">
          <ul>
            <li> <FacebookOutlinedIcon /> </li>
            <li> <YouTubeIcon /> </li>
            <li> <InstagramIcon /> </li>
          </ul>
        </div>
        </div>
        <div>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="servicescode">
          <p>service code</p>
        </div>
        <div className="copyright">
          <p>© 1997-2023 Netflix, Inc.</p>
        </div>
      </div>
  )
}

export default Footer
