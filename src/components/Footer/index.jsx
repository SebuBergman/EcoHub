import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";

import "./styles.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_newsletter">
                    <div className="footer_newsletter_text">
                        <h3>Subscribe to our newsletter</h3>
                        <p>
                            Stay in touch and be part of the sustainability debate. Follow us on social media, subscribe to our newsletter and join our community.
                        </p>
                    </div>
                    <div className="footer_newsletter_input">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email here" />
                        <button className="button_green">Tilaa</button>
                    </div>
                </div>
                <div className="footer_navlinks">
                    <div className="footer_navlinks_logo">
                        {/*<Logo />*/}<h3>EcoHub</h3>
                        <p>Together towards a more sustainable tomorrow.</p>
                    </div>
                    <div className="footer_navlinks_links">
                        <h4>Learn</h4>
                        <ul>
                            <li><a href="/environmental-issues">Environmental Issues</a></li>
                            <li><a href="/sustainable-living-tips">Sustainable Living Tips</a></li>
                            <li><a href="/green-innovations">Green Innovations</a></li>
                        </ul>  
                        <h4>Watch</h4>
                        <ul>
                            <li>Videos</li>
                            <li>Success Stories</li>
                        </ul>
                        <h4>Interact</h4>
                        <ul>
                            <li>Quizzes & Challenges</li>
                            <li>Discussion Forum</li>
                        </ul>
                    </div>
                    <div className="footer_navlinks_links">
                        <h4>Resource</h4>
                        <ul>
                            <li>Downloads & Library</li>
                            <li>Carbon Footprint Tool</li>
                            <li>Environmental Impact Assessment</li>
                        </ul>
                        <h4>Engage</h4>
                        <ul>
                            <li>User Profiles</li>
                            <li>Signs & Achievements</li>
                            <li>Submit Your Story</li>
                        </ul> 
                    </div>
                    <div className="footer_navlinks_links">
                        
                        <h4>About</h4>
                        <ul>
                            <li>Mission & Team</li>
                            <li>News & Updates</li>
                        </ul>
                        </div>
                </div>
                <div className="footer_copyright_socials">
                    <div className="footer_copyright">
                        <p>© 2024 EcoHub.</p>
                    </div>
                    <div className="footer_socials">
                        <IconContext.Provider value={{padding: '0px 20px 0px 20px', size: 24}}>
                            <FaInstagram/>
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaXTwitter/>
                            <FaYoutube/>
                        </IconContext.Provider>
                        
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
