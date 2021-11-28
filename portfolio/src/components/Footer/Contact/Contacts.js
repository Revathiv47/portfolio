import React from 'react'
import Seperator from '../../Body/Seperator'
import './contact.css'
import Contact from '../../Body/contact/Contact'

export default function Contacts() {
    return (
        <div className="contact">
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <Contact />
                </div>
                <div className="download">
                                       
                    <a download href={require('../../../asset/Revathi_Resume.docx').default} >
                    <i class="fi-rr-cloud-download download-icon" />
                    Download Resume
                    </a>
                </div>
            </div>
            
        </div>
    )
}
