import "./frontpage.scss";
import NavBar from "../../components/navbar/Navbar";


const FrontPage = () => {
    return (
        <div className="PageBody">
            <NavBar />
            <img alt="coverImage" src="Etusivu1.webp"></img>
        </div>
    )
}

export default FrontPage;