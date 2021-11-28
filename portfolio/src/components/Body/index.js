import React from 'react'
import './Body.css'
import About from './about/About';
import Project from './project/Project';
import Skills from './skill/Skills';
import Contacts from './contact/Contact';

function Body() {
    return (
        <div className="body">
            <section id='about'>
                <About />
            </section>
            <section id='project'>
                <Project />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            
            
        </div>
    )
}

export default Body
