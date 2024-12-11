import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} className='profile-img' height='350px' width='250px' alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>"I am a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in creating responsive, user-centric websites and have experience with modern frameworks like React.js to build dynamic web applications. </p> <p>Through various projects, I’ve gained proficiency in integrating APIs,  managing state in React, and implementing reusable components to streamline development. I am also comfortable using Git for version control and debugging tools to streamline the development process.</p> <p>My goal is to contribute to impactful projects, continuously improve my skills, and grow as a professional in the web development field." </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Mongo DB</p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
