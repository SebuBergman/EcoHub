import "./frontpage.scss";
import NavBar from "../../components/navbar/Navbar";


const FrontPage = () => {
    return (
        <div className="PageBody">
            <NavBar />
            <img alt="coverImage" src="Etusivu1.webp"></img>
            <div className="container1">
                <p>
                    Connect with Nature, Connect with EcoHub
                    At EcoHub, we're more than just a website - we're a community united by a shared passion for the planet.
                    Whether you're a seasoned environmental advocate or just beginning your journey towards sustainability,
                    EcoHub is your go-to destination for inspiration, education, and action.
                </p>
                <p>
                    A Platform for Change
                    EcoHub isn't just about learning - it's about taking action. Join us in our mission to create a greener,
                    more sustainable world by participating in our interactive challenges, engaging in meaningful discussions,
                    and connecting with like-minded individuals from around the globe.
                </p>
                <p>
                    Measure Your Impact, Make a Difference
                    Take control of your environmental footprint with our easy-to-use calculators and assessment tools.
                    Gain insights into your daily habits, identify areas for improvement, and make positive changes that benefit both you and the planet.
                </p>
                <p>
                    Discover Endless Possibilities
                    Explore our vast collection of resources designed to inform, inspire, and empower you on your sustainability journey.
                    From informative articles and thought-provoking documentaries to practical tips and tools, there's something for everyone at EcoHub.
                </p>
                <p>
                    Community, Connection, Collaboration
                    Become part of our vibrant community of changemakers and environmental enthusiasts.
                    Share your experiences, celebrate your achievements, and inspire others to join the movement towards a more sustainable future.
                </p>
            </div>
            <div className="container2">
                <img alt="Start Your Journey Today" src=""></img>
                <p>
                    Start Your Journey Today
                    Ready to make a difference? Dive into EcoHub and discover the endless possibilities for positive change.
                    Together, we can create a world where people and the planet thrive in harmony.

                </p>
            </div>
            <div className="carousel">

            </div>
            <div className="carousel">

            </div>
            {/*<Footer />*/}
        </div>
    )
}

export default FrontPage;