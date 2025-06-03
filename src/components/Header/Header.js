import React from 'react';
import './Header.css';
import { Link, animateScroll} from 'react-scroll'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
import Zoom from "react-reveal/Zoom";
import Typical from 'react-typical'

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

                        <li>
                            <Link 
                                className="smoothscroll"
                                activeClass='active'
                                to='contact'
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-45}
                                duration={1000}
                            >
                                Contact
                            </Link>
                        </li>

                        <button className="btn btn-info rsdownload-btn"><a href="https://drive.google.com/uc?export=download&id=1TBxuiSMHbcnugP2og5u_Sj6RbhMZGWnB"> <HiOutlineDownload style={{fontSize:'20px',fontWeight:'bold',marginRight:'5px'}} />Resume</a></button>
                    
                    </ul>
                </nav>
                <div className="banner">
                    <div className="banner-text">
                        <Zoom>
                            <h1 data-aos="fade-up">I'm {resumeData.name}</h1>
                        </Zoom>
                        <h6 className="text-white" data-aos="zoom-in">
                            I am {""}
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    "Web Developer",
                                    1000,
                                    "Node & React Developer",
                                    1000,
                                ]}
                            />
                        </h6>
                        <h3 style={{color:'#fff', fontFamily:'sans-serif '}} data-aos="fade-up" data-aos-delay="200">I am {resumeData.role}.{resumeData.roleDescription}</h3>
                        <hr/>
                        <ul className="social">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item, index) =>{
                                    return(
                                        <li key={item.name} data-aos="zoom-in" data-aos-delay={100 * (index + 1) + 300}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"><img style={{width:'40px'}} src={item.imgLink} alt={item.name} /></a>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        
                    </div>
                    <button className="btn btn-info resumeLink" data-aos="fade-in" data-aos-delay="500"><a href="https://drive.google.com/file/d/1TBxuiSMHbcnugP2og5u_Sj6RbhMZGWnB/view?usp=sharing" target="_blank">My Resume</a></button>
                    <a
                        href="mailto:nayemulhasan2016@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-in" data-aos-delay="600"
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