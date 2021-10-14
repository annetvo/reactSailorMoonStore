import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import'./HeroSection.css'


function Home({
     topLine, headline, description, buttonLabel, img, alt,imgStart
}) {
    return (
        <>
        <div className="HeroSection">
            <div className="container">
                <div className="row home_hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' :'row'}}>
                    <div className="col">
                        <div className="home_hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className="heading">{headline}</h1>
                            <p className="desciption">
                                {description}
                            </p>
                            <Link to="/signup">
                                <Button buttonSize='btn--wide' buttonColor='pink'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home_hero-img-wrapper">
                            <img src={img} alt={alt} className="home_hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
