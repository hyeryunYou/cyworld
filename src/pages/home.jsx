import React from "react";
import '../styles/home.css'

const Home = () => {
    return (
        <div className="home__wrapper">
            <div className="home__wrapper__header">
                <div className="home__contents__title">
                    <div className="home__title">
                        Updated news
                    </div>
                    <div className="home__subtitle">
                        TODAY STORY
                    </div>
                </div>
                <div className="divideline"></div>
                <div className="home__contents__body">오늘의 기분 너무 좋음</div>
            </div>
            <div className="home__wrapper__body">
                <div className="home__contents__title">
                    <div className="home__title">
                        My Video
                    </div>
                    <div className="home__subtitle">
                        Introduce yourself
                    </div>
                </div>
                <div className="video"></div>
            </div>
        </div>
    )
}

export default Home;