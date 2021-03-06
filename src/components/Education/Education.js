import React from 'react';
import resumeData from '../../resumeData'
import './Education.css'
const Education = () => {
    return (
        <section id="resume">
            <div className="row education">
                <div className="col-md-3 header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="col-md-9 main-col">
                    {
                        resumeData.education && resumeData.education.map((item) =>{
                            return(<div className="row item">
                                <div className="col-12">
                                    <h3>{item.UniversityName}</h3>
                                    <p className="e_info">
                                        {item.specialization}
                                        <span>&bull;</span>
                                        <em className="date">{item.MonthOfPassing}-{item.YearOfPassing}</em>
                                        <p>
                                            {item.Achievements} 
                                        </p>
                                        <p>
                                            CGPA: {item.Cgpa}
                                        </p>
                                    </p>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
            <hr className="ml-5 mr-5"></hr>
            <div className="row skill">
                <div className="col-md-3 header-col">
                    <h1><span>skills</span></h1>
                </div>
                <div className="col-md-9 main-col">
                    <p className="skill-desck">
                        {
                            resumeData.skillsDescription
                        }
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {
                                resumeData.skills && resumeData.skills.map((item) =>{
                                    return(
                                        <li>
                                            <span className={`bar-expand ${item.skillname.toLowerCase()}`} ></span>
                                            <em>{item.skillname}</em>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;