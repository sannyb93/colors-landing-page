import React from 'react';

import './Services.css';
const Services = props => {
    return(
        <div className="services" id="services">
        <h1>Our services</h1>
        <div className="services__wrapper">
            <div className="services__card">
                <h2>Custom Colorways</h2>
                <p>AI powered technology</p>
                <div className="services__btn"><button>Get started</button></div>
            </div>
            <div className="services__card">
                <h2>are you redy?</h2>
                <p>take the lepa</p>
                <div className="services__btn"><button>Get started</button></div>
            </div>
            <div className="services__card">
                <h2>full gradiants</h2>
                <p>100 gradiants</p>
                <div className="services__btn"><button>Get started</button></div>
            </div>
            <div className="services__card">
                <h2>Infinite choices</h2>
                <p>1000's of colors</p>
                <div className="services__btn" ><button>Get started</button></div>
            </div>
        </div>
    </div>
    );
};

export default Services;