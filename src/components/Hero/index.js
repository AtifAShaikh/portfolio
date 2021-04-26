import React from 'react';

function Hero() {
    return(
        <div className="heroBod mt-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1619387575/Atif_kvovoq.png" width="100%"></img>
                    </div>
                    <div className="col-7">
                        <h3>- Hello, I'm Atif Shaikh, a full stack developer</h3>
                        <p className="mt-3">I am an aspiring web developer with a passion for technology and science. I always have a Can-do attitude and I am always ready for challange.
                        I look forward to the opportunity to learn something new everyday.
                        </p>
                        <h4 className="mt-3">Front End</h4>
                        <p>Javascript • HTML5 • CSS3 • Bootstrap • Jquery • React JS</p>
                        <h4 className="mt-3">Back End</h4>
                        <p>Node JS • Express • MySQL • MongoDB • DynamoDB • Python-Flask</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;