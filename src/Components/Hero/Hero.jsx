import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from '../../assets/profile_img.jpeg'
import resume from '../../assets/resume.pdf'
const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; 
    link.download = 'resume.pdf';
    link.click();
  };
  return (
      <div id='hero' className='hero'>
      <img src={profile_img} height='260px' width='240px'  alt="" />
      <h1>Hello, <span>I'm Bhavana R</span> <br /> <span className='hero-job'>Frontend Developer</span> </h1>
      <p>" A fresher frontend developer skilled in HTML, CSS, and JavaScript. Proficient in creating responsive web pages and interactive UIs with React.js. Familiar with Git for version control and basic web development tools. Eager to learn, contribute to projects, and grow in the web development field. " </p>
      <p> Take a look at my work and let's collaborate on building something amazing !</p>
      
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume" onClick={handleDownloadResume}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
