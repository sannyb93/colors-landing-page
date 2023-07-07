import React from 'react';

import * as Icon from 'react-bootstrap-icons';

import './Signup.css';
const Signup = props => {
    return(
        <div className="main" id="sign-up">
        <div className="main__container">
            <div className="main__content">
                <h1>Join our team</h1>
                <h2>sign Up Today</h2>
                <p>See what makes us different</p>
                <button className="main__btn"><a href="#">sign-up</a></button>
            </div>
            <div className="main__img--container">
                <div className="main__img--card" id="card-2"><Icon.People  color="white" size={200} /></div>
            </div>
        </div>
    </div>
    );
};

export default Signup;