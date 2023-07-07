import React from 'react';
import Signup from '../Signup/Signup';
import * as Icon from 'react-bootstrap-icons';

import './About.css';
const About = props => {
    return(
        <div className="main" id="about">
        <div className="main__container">
            <div className="main__img--container">
                <div className="main__img--card"><Icon.Collection color="white" size={200} /></div>
            </div>
            <div className="main__content">
                <h1>What do we do?</h1>
                <h2>We help businesses scale</h2>
                <p>Schedule a call to learn more about our services</p>
                <button className="main__btn"><a href="#">Schedule Call</a></button>
            </div>
        </div>
    </div>
   
    );
};

export default About;