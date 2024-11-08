import {
  TextLight,
  SectionSubtitle,
  SectionTitle,
} from "@components/ui/Typography/Typography";
import HeroBox from "@components/HomePage/HeroBox";
import Header from "@components/Header/";
import Footer from "@components/Footer/";
import HomePageHeroImage from "./assets/homePage1.webp";
import HomeImage1 from "./assets/homeImage1.webp";
import Carousel from "@components/HomePage/Carousel";
import ImageBox1 from "./assets/homeImage2.webp";
import ImageBox2 from "./assets/homeImage3.webp";

// import styles
import "./styles.scss";

const FrontPage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <img alt="coverImage" src={HomePageHeroImage}></img>
      <HeroBox />
      <div className="frontPage_container1">
        <div className="frontPage_container1_boxContainers">
          <div className="frontPage_container1_box">
            <SectionTitle>
              Connect with Nature, Connect with EcoHub
            </SectionTitle>
            <TextLight>
              At EcoHub, we're more than just a website - we're a community
              united by a shared passion for the planet. Whether you're a
              seasoned environmental advocate or just beginning your journey
              towards sustainability, EcoHub is your go-to destination for
              inspiration, education, and action.
            </TextLight>
          </div>
          <div className="frontPage_container1_boxes">
            <div>
              <SectionSubtitle className="forestGreen">
                A Platform for Change
              </SectionSubtitle>
              <TextLight>
                EcoHub isn't just about learning - it's about taking action.
                Join us in our mission to create a greener, more sustainable
                world by participating in our interactive challenges, engaging
                in meaningful discussions, and connecting with like-minded
                individuals from around the globe.
              </TextLight>
            </div>
            <div className="divider"></div>
            <div>
              <SectionSubtitle className="forestGreen">
                Discover Endless Possibilities
              </SectionSubtitle>
              <TextLight>
                Explore our vast collection of resources designed to inform,
                inspire, and empower you on your sustainability journey. From
                informative articles and thought-provoking documentaries to
                practical tips and tools, there's something for everyone at
                EcoHub.
              </TextLight>
            </div>
          </div>
          <div className="frontPage_container1_boxes">
            <div>
              <SectionSubtitle className="forestGreen">
                Measure Your Impact, Make a Difference
              </SectionSubtitle>
              <TextLight>
                Take control of your environmental footprint with our
                easy-to-use calculators and assessment tools. Gain insights into
                your daily habits, identify areas for improvement, and make
                positive changes that benefit both you and the planet.
              </TextLight>
            </div>
            <div className="divider"></div>
            <div>
              <SectionSubtitle className="forestGreen">
                Community, Connection, Collaboration
              </SectionSubtitle>
              <TextLight>
                Become part of our vibrant community of changemakers and
                environmental enthusiasts. Share your experiences, celebrate
                your achievements, and inspire others to join the movement
                towards a more sustainable future.
              </TextLight>
            </div>
          </div>
        </div>
      </div>
      <div className="frontPage_container2">
        <img
          src={HomeImage1}
          alt="Start Your Journey Today"
          className="frontPage_container2_image"
        ></img>
        <div className="frontPage_container2_textContainer">
          <div>
            <h1>Start Your Journey Today</h1>
            <p>
              Ready to make a difference? Dive into EcoHub and discover the
              endless possibilities for positive change. Together, we can create
              a world where people and the planet thrive in harmony.
            </p>
            <p>
              Stay in touch with us and be part of the sustainability debate.
              Follow us on social media, subscribe to our newsletter and join
              our community.
            </p>
          </div>
          <div className="frontPage_container2_inputContainer">
            <div>
              <label htmlFor="exampleInputPassword1">Email</label>
            </div>
            <div className="frontPage_container2_inputGroup">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email here"
              />
              <button className="button_green">Tilaa</button>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="frontPage_squares">
        <div className="frontPage_squares_row">
          <div className="frontPage_squares_boxes">
            <h2 className="frontPage_squares_text">
              Join us in building a greener tomorrow
            </h2>
            <div className="green_divider"></div>
            <p className="frontPage_squares_text">
              Together we can make a difference. Join EcoHub and become part of
              the global movement towards a more sustainable and environmentally
              conscious future.
            </p>
            <button className="button_green">Join</button>
          </div>
          <div className="frontPage_squares_boxesImage">
            <img
              src={ImageBox1}
              alt="A park with a path leading to a round table"
            ></img>
          </div>
        </div>
        <div className="frontPage_squares_row">
          <div className="frontPage_squares_boxesImage">
            <img src={ImageBox2} alt="A park with a path with trees"></img>
          </div>
          <div className="frontPage_squares_boxes">
            <h2 className="frontPage_squares_text">
              Get involved and tell your story
            </h2>
            <p className="frontPage_squares_text">
              Create a profile, earn badges for your sustainable actions and
              participate in our community by sharing your success stories.
              Whether you're taking small steps or leading major initiatives,
              your journey matters.
            </p>
            <button className="button_green">Tell Your Story</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
