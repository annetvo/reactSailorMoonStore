import React, { Component } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import'./ScoutsSection.css'


export default class ScoutsSection extends Component {
    render() {
        this.state=[
            {id: 1, 
                sailorName: "Sailor Moon", 
                firstName: "Usagi/Serena", 
                lastName: "Tsukino", 
                age: 14, 
                description: "Main protagonist and the Sailor Guardians' leader. She is the Guardian of love and justice.", 
                imgStart:'', 
                img: require("../components/images/moon.jpeg"), 
                alt: "Sailor Moon"},
            {id: 2, 
                sailorName: "Sailor Mercury", 
                firstName: "Ami/Amy", 
                lastName: "Mizuno/Anderson", 
                age: 14, 
                description: "Guardian of Water and Wisdom, with an IQ rumored to be 300. She is the practical guardian in the group.", 
                imgStart:'', 
                img: require("../components/images/mercury.jpeg"), 
                alt: "Sailor Mercury"},
            {id: 3, 
                sailorName: "Sailor Mars", 
                firstName: "Rei/Raye", 
                lastName: "Hino", 
                age: 14, 
                description: "Shrine maiden who is the Guardian of fire and passion. She has the power to dispel evil through the use of ofuda scrolls.  ", 
                imgStart:'', 
                img: require("../components/images/mars.jpeg"), 
                alt: "Sailor Mars"},
        ];
        return (
            <div id="sailorinfo">
                
                {this.state.map((scoutInfo) => {
                    return (
                        <div>
                            <h1>{scoutInfo.sailorName}</h1>
                            <h2>{scoutInfo.firstName} {scoutInfo.lastName}</h2>
                            <p>Age: {scoutInfo.age}</p>
                            <p>{scoutInfo.description}</p>
                            <img src={scoutInfo.img} id="img"/>
                        </div>
                    );
                })}
            </div>
        );
    }
}
