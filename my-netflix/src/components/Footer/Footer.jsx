import './footer.css'
import youtubeIcon from '../../Asset/assets/youtube_icon.png'
import twiterIcon from '../../Asset/assets/twitter_icon.png'
import instagramIcon from '../../Asset/assets/instagram_icon.png'
import facebookIcon from '../../Asset/assets/facebook_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footerIcon">
        <a href="https://www.facebook.com/joseph  Teka">
        <img src={facebookIcon} alt="" />
        </a>
        <a href="https://www.instagram.com/joseph teck/">
        <img src={instagramIcon} alt="" />
        </a>
        <a href="https://twitter.com/Joseph326533100">
        <img src={twiterIcon} alt="" />
        </a>
        <a href="https://www.youtube.com/@Netflix">
        <img src={youtubeIcon} alt="" /></a>
      </div>
      <ul>
        <li>Audio discription </li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>media center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie preference</li>
        <li>Corporate Information</li>
        <li>Contact us </li>
      </ul>
      <p className="copyrighttext">
        &copy; 1997-2023    Netflix, Inc. 
      2025 | Joseph Teka
      </p>
      
    </div>
  )
}

export default Footer
