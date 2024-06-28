import "./frontpage.scss";
import NavBar from "../../components/navbar/Navbar";


const FrontPage = () => {
    return (
        <div className="PageBody">
            <NavBar />
            <img alt="coverImage" src="Etusivu1.webp"></img>
            <div className="frontPage_coverImageBox">
                <div className="frontPage_coverImageBox_textContainer">
                    <div>
                        <h1 className="frontPage_coverImageBox_h1">EcoHub: Centre for Sustainable Living</h1>
                        <p>
                            At EcoHub, we believe in the power of collective action to bring about positive change on our planet.
                            Our mission is to empower people of all ages to adopt sustainable lifestyles and promote a healthier and greener future.
                        </p>
                    </div>
                    <div className="frontPage_coverImageBox_buttons">
                        <button className="frontPage_coverImageBox_button">WAYS TO GET INVOLVED</button>
                        <button className="frontPage_coverImageBox_button">TELL US YOUR STORY</button>
                    </div>
                </div>
            </div>
            <div className="frontPage_container1">
                <div className="frontPage_container1_boxContainers">
                    <div className="frontPage_container1_box">
                        <h2>Connect with Nature, Connect with EcoHub</h2>
                        <p>
                            At EcoHub, we're more than just a website - we're a community united by a shared passion for the planet.
                            Whether you're a seasoned environmental advocate or just beginning your journey towards sustainability,
                            EcoHub is your go-to destination for inspiration, education, and action.
                        </p>
                    </div>
                    <div className="frontPage_container1_boxes">
                        <div>
                            <h3>A Platform for Change</h3>
                            <p>
                                EcoHub isn't just about learning - it's about taking action. Join us in our mission to create a greener,
                                more sustainable world by participating in our interactive challenges, engaging in meaningful discussions,
                                and connecting with like-minded individuals from around the globe.
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div>
                            <h3>Discover Endless Possibilities</h3>
                            <p>
                                Explore our vast collection of resources designed to inform, inspire, and empower you on your sustainability journey.
                                From informative articles and thought-provoking documentaries to practical tips and tools, there's something for everyone at EcoHub.
                            </p>
                        </div>
                    </div>
                    <div className="frontPage_container1_boxes">
                        <div>
                            <h3>Measure Your Impact, Make a Difference</h3>
                            <p>
                                Take control of your environmental footprint with our easy-to-use calculators and assessment tools.
                                Gain insights into your daily habits, identify areas for improvement, and make positive changes that benefit both you and the planet.
                            </p>
                        </div>
                        <div className="divider"></div>
                        <div>
                            <h3>Community, Connection, Collaboration</h3>
                            <p>
                                Become part of our vibrant community of changemakers and environmental enthusiasts.
                                Share your experiences, celebrate your achievements, and inspire others to join the movement towards a more sustainable future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frontPage_container2">
                <img src="Image1.webp" alt="Start Your Journey Today" className="frontPage_container2_image"></img>
                <div className="frontPage_container2_textContainer">
                    <div>
                        <h1>Start Your Journey Today</h1>
                        <p>
                            Ready to make a difference? Dive into EcoHub and discover the endless possibilities for positive change.
                            Together, we can create a world where people and the planet thrive in harmony.

                        </p>
                        <p>
                            Stay in touch with us and be part of the sustainability debate.
                            Follow us on social media, subscribe to our newsletter and join our community.
                        </p>
                    </div>
                    <div className="frontPage_container2_inputContainer">
                        <div>
                            <label for="exampleInputPassword1">Email</label>
                        </div>
                        <div className="frontPage_container2_inputGroup">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter email here" />
                            <button className="button_green">Tilaa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frontPage_carousel">
                <div id="carouselExample" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel_container">
                                <div className="carousel_flex">
                                    <div>
                                        <img src="Carousel1.webp" className="frontPage_carousel_image" alt="..." />
                                    </div> 
                                    <div className="carousel_textContainer">
                                        <h3>Explore, learn and act</h3>
                                        <p>
                                            Discover a wealth of information on environmental issues from climate change to biodiversity.
                                            Explore a collection of educational videos, success stories and sustainable living tips.
                                            Take part in interactive quizzes and challenges and join a lively discussion forum to exchange ideas with a like-minded community.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel_container">
                                <div className="carousel_flex">
                                    <div>
                                        <img src="Carousel2.webp" className="frontPage_carousel_image" alt="..." />
                                    </div>
                                    <div className="carousel_textContainer">
                                        <h3>Calculate your impact</h3>
                                        <p>
                                            Are you curious about your carbon footprint? With our user-friendly tools you can calculate your environmental impact.
                                            Explore ways to reduce your footprint and make eco-conscious choices in your daily life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel_container">
                                <div className="carousel_flex">
                                    <div>
                                        <img src="Carousel3.webp" className="frontPage_carousel_image"  alt="..." />
                                    </div>
                                    <div className="carousel_textContainer">
                                        <h3>Resources for action</h3>
                                        <p>
                                            Access a wealth of downloadable resources and external links to reputable sustainability organisations.
                                            Stay informed, get involved in local initiatives and take meaningful steps towards a more sustainable lifestyle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="frontPage_squares">
                <div className="frontPage_squares_row">
                    <div className="frontPage_squares_boxes">
                        <h2 className="frontPage_squares_text">Join us in building a greener tomorrow</h2>
                        <div className="green_divider"></div>
                        <p className="frontPage_squares_text">
                            Together we can make a difference.
                            Join EcoHub and become part of the global movement towards a more sustainable and environmentally conscious future.
                        </p>
                        <button className="button_green">Join</button>
                    </div>
                    <div className="frontPage_squares_boxesImage">
                        <img src="Image2.webp" alt="A park with a path leading to a round table"></img>
                    </div>
                </div>
                <div className="frontPage_squares_row">
                    <div className="frontPage_squares_boxesImage">
                        <img src="Image3.webp" alt="A park with a path with trees"></img>
                    </div>
                    <div className="frontPage_squares_boxes">
                        <h2 className="frontPage_squares_text">Get involved and tell your story</h2>
                        <p className="frontPage_squares_text">
                            Create a profile, earn badges for your sustainable actions and participate in our community by sharing your success stories.
                            Whether you're taking small steps or leading major initiatives, your journey matters.
                        </p>
                        <button className="button_green">Tell Your Story</button>
                    </div>
                </div>
                
            </div>
            {/*<Footer />*/}
        </div>
    )
}

export default FrontPage;