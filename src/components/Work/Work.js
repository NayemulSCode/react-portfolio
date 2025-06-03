import React from 'react';
import resumeData from '../../resumeData';
import './Work.css'
const Work = () => {
    return (
        <section id="work">
            <div className="row">
                <div className="work-col">
                    <h1 data-aos="fade-up">Check Out Some of My Projects</h1>
                    <div id="work-wrapper" className="bgrid-quarters container-fluid">
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item, index) =>{ // Added index for stagger
                                return(
                                    // Added key to the parent div being mapped
                                    <div key={item.name} className="work-item work-col shadow-sm" data-aos="zoom-in-up" data-aos-delay={index * 100}>
                                        <div className="item-wrapper">
                                           
                                                <img src={item.imgurl} alt={item.name || 'Project screenshot'}/> {/* Refined alt text */}
                                                <div className="overlay">
                                                    <div className="work-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>{item.subtitle}</p>
                                                        <small>{item.description}</small><br /
                                                        >
                                                        <button className="btn btn-info mr-2 mt-3"><a href={item?.url} target="_blank" style={{color:'white',textDecoration:'none'}}>Live Site Link</a></button>
                                                        <button className="btn btn-primary mr-2 mt-3"><a href={item?.gitLink} target="_blank" style={{color:'white',textDecoration:'none'}}>Github Link</a></button>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;