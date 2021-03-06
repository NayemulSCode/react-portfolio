import React from 'react';
import './Header.css';
import { Link, animateScroll} from 'react-scroll'
import { IoIosArrowDown } from "react-icons/io";

const Header = (props) => {
    const resumeData = props.resumeData;
    return (
        <div>
            <header>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <Link 
                                className="smoothscroll" 
                                to="home"
                                onClick={() => animateScroll.scrollToTop()}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="smoothscroll" 
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-45}
                                duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="smoothscroll"
                                activeClass='active'
                                to='resume'
                                spy={true}
                                smooth={true}
                                offset={-45}
                                duration={500}>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="smoothscroll"
                                activeClass='active'
                                to='work'
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-45}
                                duration={1000}
                            >
                                Projects
                            </Link>
                        </li>
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
                    <button className="btn btn-info resumeLink"><a href="https://drive.google.com/file/d/1ECssn_70ywrjI53e_nOaKtHQNF0AhkB-/view?usp=sharing" target="_blank">My Resume</a></button>
                    <a
                        href="mailto:nayemulhasan2016@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button className="btn btn-primary ml-2">Send Mail</button>
                    </a>
                </div>
                <p className="scrolldown">
                    <Link 
                        activeClass='active'
                        to='work'
                        spy={true}
                        smooth={true}
                        offset={-45}
                        duration={500} 
                        className="smoothscroll" 
                    >
                        <IoIosArrowDown />
                    </Link>
                </p>
            </header>
            
        </div>
    );
};

export default Header;