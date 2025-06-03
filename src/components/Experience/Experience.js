import React from 'react';
import './Experience.css';

const Experience = ({ resumeData }) => {
  return (
    <section id="experience" className="experience-section">
      <h2 data-aos="fade-in">Experience</h2>
      <div className="experience-container">
        {resumeData.work && resumeData.work.map((item, index) => (
          <div key={index} className="experience-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{item.CompanyName}</h3>
            <p className="info">{item.specialization}<span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
            <p className="achievements">{item.Achievements}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
