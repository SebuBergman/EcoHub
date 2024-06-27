import "./frontpage.scss";
import NavBar from "../../components/navbar/Navbar";


const FrontPage = () => {
    return (
        <div className="PageBody">
            <NavBar />
            <img alt="coverImage" src="Etusivu1.webp"></img>
            <div className="frontPage_coverImageBox">
                <h1 className="frontPage_coverImageBoxH1">EcoHub: Centre for Sustainable Living</h1>
                <p>
                    At EcoHub, we believe in the power of collective action to bring about positive change on our planet.
                    Our mission is to empower people of all ages to adopt sustainable lifestyles and promote a healthier and greener future.
                </p>
                <div className="frontPage_coverImageBox_buttons">
                    <button className="frontPage_coverImageBox_buttons">WAYS TO GET INVOLVED</button>
                    <button className="frontPage_coverImageBox_buttons">TELL US YOUR STORY</button>
                </div>
            </div>
            <div className="frontPage_container1">
                <h2>Connect with Nature, Connect with EcoHub</h2>
                <p>
                    At EcoHub, we're more than just a website - we're a community united by a shared passion for the planet.
                    Whether you're a seasoned environmental advocate or just beginning your journey towards sustainability,
                    EcoHub is your go-to destination for inspiration, education, and action.
                </p>
                <h3 className="frontPage_container1_h4">A Platform for Change</h3>
                <p>
                    EcoHub isn't just about learning - it's about taking action. Join us in our mission to create a greener,
                    more sustainable world by participating in our interactive challenges, engaging in meaningful discussions,
                    and connecting with like-minded individuals from around the globe.
                </p>
                <h3>Measure Your Impact, Make a Difference</h3>
                <p>
                    Take control of your environmental footprint with our easy-to-use calculators and assessment tools.
                    Gain insights into your daily habits, identify areas for improvement, and make positive changes that benefit both you and the planet.
                </p>
                <h3>Discover Endless Possibilities</h3>
                <p>
                    Explore our vast collection of resources designed to inform, inspire, and empower you on your sustainability journey.
                    From informative articles and thought-provoking documentaries to practical tips and tools, there's something for everyone at EcoHub.
                </p>
                <h3>Community, Connection, Collaboration</h3>
                <p>
                    Become part of our vibrant community of changemakers and environmental enthusiasts.
                    Share your experiences, celebrate your achievements, and inspire others to join the movement towards a more sustainable future.
                </p>
            </div>
            <div className="frontPage_container2">
                <img src="Image1.webp" alt="Start Your Journey Today"></img>
                <h1>Start Your Journey Today</h1>
                <p>
                    Ready to make a difference? Dive into EcoHub and discover the endless possibilities for positive change.
                    Together, we can create a world where people and the planet thrive in harmony.

                </p>
            </div>
            <div className="frontPage_carousel">
                <div id="carouselExample" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel_flex">
                                <div>
                                    <img src="Carousel1.webp" className="frontPage_carousel_image" alt="..." />
                                </div> 
                                <div>
                                    <h3>Explore, learn and act</h3>
                                    <p>
                                        Discover a wealth of information on environmental issues from climate change to biodiversity.
                                        Explore a collection of educational videos, success stories and sustainable living tips.
                                        Take part in interactive quizzes and challenges and join a lively discussion forum to exchange ideas with a like-minded community.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel_flex">

                            </div>
                        <img src="Carousel2.webp" className="frontPage_carousel_image" alt="..." />
                        <h3>Calculate your impact</h3>
                        <p>
                            Are you curious about your carbon footprint? With our user-friendly tools you can calculate your environmental impact.
                            Explore ways to reduce your footprint and make eco-conscious choices in your daily life.
                        </p>
                        </div>
                        <div className="carousel-item">
                        <img src="Carousel3.webp" className="frontPage_carousel_image"  alt="..." />
                        <h3>Resources for action</h3>
                        <p>
                            Access a wealth of downloadable resources and external links to reputable sustainability organisations.
                            Stay informed, get involved in local initiatives and take meaningful steps towards a more sustainable lifestyle.
                        </p>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
            <div className="frontPage_squares">
                <div>
                    <h2>Join us in building a greener tomorrow</h2>
                    <p>
                        Together we can make a difference.
                        Join EcoHub and become part of the global movement towards a more sustainable and environmentally conscious future.
                    </p>
                    <button className="button_join">Join</button>
                </div>
                <div>
                    <img src="Image2.webp" alt="A park with a path leading to a round table"></img>
                </div>
                <div>
                    <img src="Image3.webp" alt="A park with a path with trees"></img>
                </div>
                <div>
                    <h2>Get involved and tell your story</h2>
                    <p>
                        Create a profile, earn badges for your sustainable actions and participate in our community by sharing your success stories.
                        Whether you're taking small steps or leading major initiatives, your journey matters.
                    </p>
                    <button className="button_join">Tell Your Story</button>
                </div>
            </div>
            {/*<Footer />*/}
        </div>
    )
}

export default FrontPage;