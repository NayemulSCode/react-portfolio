import React from 'react';
import resumeData from '../../resumeData';
import './About.css'
const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="col-md-5">
                    <img className="profile__pic" src={resumeData.imgUrl} alt=""/>
                </div>
                <div className="col-md-7 main-col">
                    <h3>About Me</h3>
                    <p>{resumeData.aboutme}</p>
                    <h3>Contact Details</h3>
                    <p className="address">
                        <span>{resumeData.name}</span><br></br>
                        <span>{resumeData.address}</span><br></br>
                        <span>{resumeData.email}</span>
                    </p>
                    {/* <button className="btn btn-info"><a href="https://drive.google.com/uc?export=download&id=1ECssn_70ywrjI53e_nOaKtHQNF0AhkB-">Download My Resume</a></button> */}
                </div>
            </div>
            <hr className="ml-5 mr-5 mt-5"></hr>
        </section>
    );
};

export default About;