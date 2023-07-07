import React from 'react';

import './Home.css';
const Home = props => {
    return(
        <div className="hero" id="hero">
        <div className="hero__container">
            <h1 className="hero__heading">Choose your <span>colors</span></h1>
            <p className="hero__description">Unlimited Possibilities</p>
            <button className="main__btn"><a href="#">EXPLORE</a></button>
        </div>
    </div>
    );
};

export default Home;