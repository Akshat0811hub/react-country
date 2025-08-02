import { FaLongArrowAltRight } from "react-icons/fa"

export const Home = () => {
    return <main className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the World, One Country at a Time.
                </h1>
                <p className="paragraph">
                    Discover the history, cukture, the beauty of every nation.
                    search and filter through countries to find the details
                </p>
                <button className="btn btn-darker btn-inline bg-white-box">
                    Start Exploring<FaLongArrowAltRight/>
                </button>
            </div>
            <div className="hero-img">
                <img src="/images/world.png" alt="world img" className="banner-image"/>
            </div>
        </div>
    </main>
}