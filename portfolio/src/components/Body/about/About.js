import React from 'react'
import './About.css';
import Contact from '../contact/Contact';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There, I am <br /> <span className="info-name">Revathi</span>.<br/> I Love experimenting with the web.
                </div>
                <div className="about-photo">
                    <img src={require('../../../asset/coding.png').default}  alt="" className="picture" />
                </div>
            </div>
            <div>
                <Contact />
            </div>
            
        </div>
    )
}

export default About
