import React from 'react';
import resumeData from '../../resumeData';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
        <div className="">
            <div className="footer-col">
                <ul className="social-link">
                    {
                        resumeData.socialLinks && resumeData.socialLinks.map((item) =>{
                            return(
                                <li key={item.name}>
                                    <a href={item.url} target="_blank"><img style={{width:'40px'}} src={item.imgLink} /></a>
                                 </li>
                            )
                        })
                    }
                </ul>
                <p className="copyright-mgs">Copyright &copy; 2021 Nayemul. All rights reserved</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;