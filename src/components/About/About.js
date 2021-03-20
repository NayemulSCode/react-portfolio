import React from 'react';
import resumeData from '../../resumeData';
import './About.css'
const About = (props) => {
    return (
        <section id="about">
            <div className="row">
                <div className="col-md-3">
                    <img className="profile__pic" src={resumeData.imgUrl} alt=""/>
                </div>
                <div className="col-md-9 main-col">
                    <h3>About Me</h3>
                    <p>{resumeData.aboutme}</p>
                    
                        <h3>Contact Details</h3>
                        <p className="address">
                            <span>{resumeData.name}</span><br></br>
                            <span>{resumeData.address}</span><br></br>
                            <span>{resumeData.email}</span>
                            
                        </p>
                    
                </div>
            </div>
        </section>
    );
};

export default About;