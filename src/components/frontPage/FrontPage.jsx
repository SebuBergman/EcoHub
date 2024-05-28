import "./frontpage.scss";


const FrontPage = () => {
    return (
        <div className="coverImage">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Sebastian Bergman</h2>
                    <h1>Web developer and UI/UX Designer</h1>
                    <div className="buttons">
                        <a href="#Projects"><button>See my latest work</button></a>
                        <a href="#Contact"><button>Contact me</button></a>
                    </div>
                </div>
                <div className="slidingTextContainer">
                    Front-end development UX/UI design IT knowledge
                </div>
                <div className="imageContainer">
                    <img src="/SebuKuva_IlmanTaustaa.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FrontPage;