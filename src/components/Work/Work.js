import React from 'react';
import resumeData from '../../resumeData';
import './Work.css'
const Work = () => {
    return (
        <section id="work">
            <div className="row">
                <div className="work-col">
                    <h1>Check Out Some of My Projects</h1>
                    <div id="work-wrapper" className="bgrid-quarters container-fluid">
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item) =>{
                                return(
                                    <div className="work-item work-col shadow-sm">
                                        <div className="item-wrapper">
                                           
                                                <img src={item.imgurl} alt=""/>
                                                <div className="overlay">
                                                    <div className="work-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>{item.subtitle}</p>
                                                        <small>{item.description}</small><br />
                                                        <a href={item?.url} target="_blank" style={{color:'pink'}}>Live Site Link</a><br/>
                                                        <a href={item?.gitLink} target="_blank" style={{color:'pink'}}>Github Link</a>
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