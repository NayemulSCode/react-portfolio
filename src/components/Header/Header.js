import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Header = (props) => {
    const resumeData = props.resumeData;
    const {linkedIn} = props. resumeData.socialLinks;
    return (
        <div>
            <header>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a  className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="banner">
                    <div className="banner-text">
                        <h1>I am {resumeData.name}</h1>
                        <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am {resumeData.role}.{resumeData.roleDescription}</h3>
                        <hr/>
                        <ul className="social">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                                    return(
                                        <li key={item.name}>
                                            <a href={item.url} target="_blank"><img style={{width:'40px'}} src={item.imgLink} /></a>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
            
        </div>
    );
};

export default Header;