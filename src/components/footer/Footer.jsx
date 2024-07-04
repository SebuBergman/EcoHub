import "./footer.scss";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer_newsletter">
                <h3>Subscribe to our newsletter</h3>
                <p>
                    Stay in touch and be part of the sustainability debate. Follow us on social media, subscribe to our newsletter and join our community.
                </p>
                <input className="newsletter_subscribe"></input>
                <button className="newsletter_subscribe_button"></button>
            </div>
            <div className="footer_navlinks">
                <div className="footer_navlinks_logo">
                    {/*<Logo />*/}<h3>EcoHub</h3>
                    <p>Together towards a more sustainable tomorrow.</p>
                </div>
                <div className="footer_navlinks_links">
                    <h4>Learn</h4>
                    <ul>
                        <li>Environmental Issues</li>
                        <li>Sustainable Living Tips</li>
                        <li>Green Innovations</li>
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
                    <h4>Resource</h4>
                    <ul>
                        <li>Downloads & Library</li>
                        <li>Carbon Footprint Tool</li>
                    </ul> 
                    <h4>Engage</h4>
                    <ul>
                        <li>User Profiles</li>
                        <li>Submit Your Story</li>
                    </ul> 
                    <h4>About</h4>
                    <ul>
                        <li>Mission & Team</li>
                        <li>News & Updates</li>
                    </ul> 
                </div>
            </div>
            <div className="footer_copyright&socials">
                <p>© 2023 EcoHub.</p>
                <img>Instagram</img>
                <img>Facebook</img>
                <img>LinkedIn</img>
                <img>Twitter</img>
                <img>Youtube</img>
                <img>Github</img>
            </div>
        </div>
    )
}

export default Footer;