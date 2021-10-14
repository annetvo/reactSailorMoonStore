import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import'./ScoutsSection.css'


function ScoutsSection({
     sailorName, firstName, lastName, description, age, img, alt,imgStart,buttonLabel
}) {
    return (
        <>
        <div className="ScoutsSection">
            <div className="container">
                <div className="row scouts-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' :'row'}}>
                    <div className="col">
                        <div className="scouts-text-wrapper">
                            <div className="sailorname">{sailorName}</div>
                            <h1 className="fullname">{firstName}, {lastName}</h1>
                            <p className="age">
                                {age}
                            </p>
                            <p className="desciption">
                                {description}
                            </p>
                            <Link to="/signup">
                                <Button buttonSize='btn--wide' buttonColor='pink'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="scouts-img-wrapper">
                            <img src={img} alt={alt} className="scouts-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ScoutsSection
