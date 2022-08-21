import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import hello from './images/hello.png'
import react from './images/react_sticker.png'
import mongo from './images/mongo_sticker.png'
import postgres from './images/postgres_sticker.png'
import express from './images/express_sticker.png'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import {NavigateNext} from '@material-ui/icons/';

import profileImage from './images/Linkedin5Trans.png'


const Homepage = () => {
  const [aboutTab, setAboutTab] = useState(true);
  const [activeApp, setActiveApp] = useState(null);
  const [lastActive, setLastActive] = useState(null)

  const [imageClassOne, setOne] = useState("");
  const [imageClassTwo, setTwo] = useState("");
  const [imageClassThree, setThree] = useState("");

  const [specsActive, setSpecsActive] = useState(null);
  const [siteOne, setSiteOne] = useState({
    functionality: ["Search movie titles", "See recommended movies", "Search by category, year, and/or IMBD score", 'Add movies to "favorites" or "watch later" lists',
   "See where a specific movie can be streamed with subscription"],
   base: ["Postgres", "Express", "React", "Node"],
   utility:["axios", "passport", "express-session", "Material-ui", "Postgres-Database", "Heroku", "bcrypt", "pg"]
  })
  const [siteTwo, setSiteTwo] = useState({
    functionality: ["Create account", "Upload photos", "Swipe left or right on other users", "Chat with other users" ],
   base: ["MongoDB", "Express", "React", "Node"],
   utility:["axios", "passport", "express-session", "Material-ui", "Heroku", "Mongoose", "express-fileupload", "react-tinder-card"]
  })
  const [siteThree, setSiteThree] = useState({
    functionality: ["Complete account application process", "Edit schedule / availability", "Search through responsive site", "Submit questions or applications"],
   base: ["MongoDB", "Express", "React", "Node"],
   utility:["axios", "passport", "express-session", "Material-ui", "Postgres-Database", "Heroku", "Mongoose", "PDF-creation", "automated emails"]
  })

  const handleTabsClick = (e) => {
    console.log(e.target.id);
    console.log(activeApp);
    if (e.target.id == "about-tab") {
      setAboutTab(true)
    } else {
      setAboutTab(false)
    }
  }
  const handleAppClick = (app) => {
    if (activeApp == null) {
      setActiveApp(app)
      setLastActive(app)
      console.log(app)
      //set image css so only correct image is in frame
      if (app == "site-one"){
        setOne('active-image')
        setTwo('')
        setThree('')
      } else if (app == "site-two"){
        setOne('')
        setTwo('active-image')
        setThree('')
      } else if (app == "site-three"){
        setOne('')
        setTwo('')
        setThree('active-image')
      }
    } else {
      setActiveApp(null);
      setSpecsActive(null)
    }
  }
  const handleSpecsClick = () => {
    if (specsActive == null){
      setSpecsActive(true)
    } else {
      setSpecsActive(null)
    }
  }
  const returnClass = () => {
    if (activeApp != null) {
          return "display-side"
    }
  }
  const returnButtonClass = () => {
    if (activeApp != null) {
          return "display-buttons"
    }
  }
  const returnImageClass = () => {
    if (activeApp == "site-one"){
      return "image-one"
    } else if (activeApp == "site-two"){
      return "image-two"
    } else if (activeApp == "site-three"){
      return "image-three"
    }
  }
  const imageHref = (tag) => {
    let href
    if (tag == "app"){
      switch(activeApp){
        case "site-one": href = "https://stream-simply.herokuapp.com/"
        break;
        case "site-two": href = "https://tinder-backend-chase.herokuapp.com/login"
        break;
        case "site-three": href = "https://class-connect1.herokuapp.com/"
        break;
      }
    } else {
      switch(activeApp){
        case "site-one": href = "https://github.com/chase104/stream_simply"
        break;
        case "site-two": href = "https://github.com/chase104/tinder-clone"
        break;
        case "site-three": href = "https://github.com/chase104/class-connect"
        break;
      }
    }
    console.log(href);
    return href
  }

  const returnFunctionality = () => {
    let type
    console.log(activeApp);
    console.log(lastActive);
    if (activeApp != null) {
      switch(activeApp) {
        case "site-one": type = siteOne.functionality
        break;
        case "site-two": type = siteTwo.functionality
        break;
        case "site-three": type = siteThree.functionality
        break;
      }
    } else {
      switch(lastActive) {
        case "site-one": type = siteOne.functionality
        break;
        case "site-two": type = siteTwo.functionality
        break;
        case "site-three": type = siteThree.functionality
        break;
      }
    }
    console.log(type);
     if (type!= undefined) { 
       let html = (<div className={`functionality-contents ${activeApp == "site-one" ? "site-one-functionality" : null}`}>
       {type.map((item) => {
               return <div className="item">
                 <NavigateNext />
                 <div>{item}</div>
                 </div>
           })}
       </div>)
      return html
    }
  }

  const returnUtility = () => {
    let type
        if (activeApp != null) {
      switch(activeApp) {
        case "site-one": type = siteOne.utility
        break;
        case "site-two": type = siteTwo.utility
        break;
        case "site-three": type = siteThree.utility
        break;
      }
    } else {
      switch(lastActive) {
        case "site-one": type = siteOne.utility
        break;
        case "site-two": type = siteTwo.utility
        break;
        case "site-three": type = siteThree.utility
        break;
      }
    }
    if (type!= undefined) {
      let html = (<div className="utility-contents">
      {type.map((item) => {
              return <div className="item">
              <div>{item}</div>
              </div>
          })}
      </div>)
     return html
   }

  }
  return (
    <div className="homepage-container">
      <div className="top-half">
        
      </div>
      <div className="content-container">
        <div className="content">
          <div className="tabs no-select">
            <div className={aboutTab ? "about-tab tab-on" : "about-tab"} id="about-tab" onClick={(e) => handleTabsClick(e)}>ABOUT</div>
            <div className={!aboutTab ? "apps-tab tab-on" : "apps-tab"} id="apps-tab" onClick={(e) => handleTabsClick(e)}>MY APPS</div>
          </div>
          <div className="overflow-hider">
            <div className={`about-content ${aboutTab ? null : "shift-about"}`}>
            <div className="image-container">
            </div>
            <div className="information-container">
              <div className="introduction">
                <div className="hello">
                  <img src={hello}/>
                </div>
                <div className="name-phrase">
                  <div className="im">I'm</div>
                  <div className="name">
                    <div className="first">Chase</div>
                    <div className="second">Van Halen</div>
                  </div>
                </div>
                <div className="title">Full-Stack Web Developer (junior)</div>
              </div>
              <div className="information">
                <div className="column-one">
                  <div >Age</div>
                  <div>Location</div>
                  <div>Email</div>
                  <div>Phone</div>
                  {/* <div className="answer-bubble no-select">
                    <div className="relocate">Can Relocate</div>
                    <div className="message">I'm open to moving to most states to join your company</div>
                  </div> */}
                  <div className="answer-bubble no-select" style={{marginBottom: "8px"}}>
                    <div className="relocate">Job Ready</div>
                    <div className="message">I'm capable of deloping both front and back end</div>
                  </div>
                  </div>
                <div className="column-two">
                  <div className="answers">
                    <div>27</div>
                    <div>Houston, TX</div>
                    <div>chase.vanhalen88@gmail.com</div>
                    <div>+1 317-480-6992</div>
                  </div>
                </div>
              </div>
            </div>

            </div>
            <div className={`apps-content ${aboutTab ? null : "shift-apps"}`}>
              <div className="site-info">
                <div className={`dropdown-container ${specsActive != null ? activeApp != null ? "dropdown-active": null : null}`}>
                  <div className="dropdown">
                    <div className="row-title">
                      <div style={{marginRight: "8px"}}>Functionality</div>
                    </div>
                    {returnFunctionality()}
                    <div className="row-title">
                      <div style={{marginRight: "8px"}}>Utility Technologies</div>
                    </div>
                    {returnUtility()}
                  </div>
                </div>
                <div className={`site-side ${returnClass()}`}>
                  {
                    activeApp == "site-one" || lastActive == "site-one" ?
                    <div className="site-upper">
                    <img src={react} className="sticker"/>
                    <img src={postgres} className="sticker"/>
                    <img src={express} className="sticker"/>
                  </div>
                  :
                  <div className="site-upper">
                  <img src={react} className="sticker"/>
                  <img src={mongo} className="sticker"/>
                  <img src={express} className="sticker"/>
                </div>
                  }
                  <div className="image-holder">
                    <a href={`${imageHref("app")}`} target="_" className={`site-image image-site-one ${imageClassOne}`}>
                    <div className="load-times">*Initial site load time due to development server hosting</div>
                    </a>
                    <a href={`${imageHref("app")}`} target="_" className={`site-image image-site-two ${imageClassTwo}`}>
                    <div className="load-times">*Initial site load time due to development server hosting</div>
                    </a>
                    <a href={`${imageHref("app")}`} target="_" className={`site-image image-site-three ${imageClassThree}`}>
                    <div className="load-times">*Initial site load time due to development server hosting</div>
                    </a>
                  </div>  
                </div>
                <div className={`site-buttons ${returnButtonClass()}`}>
                  <a href={`${imageHref("app")}`} target='_' className="site-button no-select no-decoration">GO TO APP
                  <div className="load-times button-load-times">*Initial site load time due to development server hosting</div>
                  </a>
                  <div className="site-button no-select" onClick={() => handleSpecsClick()}>SPECS</div>
                  <a href={`${imageHref()}`} target='_'  className="site-button no-select no-decoration">GITHUB</a>
                </div>
              </div>
              <div className={`site site-one ${activeApp == "site-one" ? "active-container" : activeApp == null ? null : "hide-app"}`} id="site-one" onClick={(e) => handleAppClick("site-one")}>
                <div className={`site-inner ${activeApp == "site-one" ? "active-one" : null}`}>
                  <div className="site-title no-select">
                    <div>Stream</div>
                    <div>Simply</div>
                  </div>
                  <div className="site-img"></div>
                </div>
              </div>

              <div className={`site site-three ${activeApp == "site-three" ? "active-container active-three" :  activeApp == null ? null : "hide-app"}`} id="site-three" onClick={(e) => handleAppClick("site-three")}>
                <div className={`site-inner ${activeApp == "site-three" ? "active-three" : null}`}>
                  <div className="site-title no-select">The Adventurer's College</div>
                  <div className="site-img"></div>
                </div>
              </div>
            </div>
            <div className="bottom-bar">
              <div className="icon-container">
                <a href="https://github.com/chase104?tab=repositories" target="_" className="bottom-icon no-decoration">
                  <GitHubIcon></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/chase-van-halen-8068a5108/" target="_" className="bottom-icon no-decoration">
                  <LinkedInIcon></LinkedInIcon>
                </a>
              </div>

            </div>
            <a href="https://docs.google.com/document/d/1tZMnRd4Kw5kS-U9jHRSON2SjnB1k7ny4/edit?usp=sharing&ouid=115538098538292968969&rtpof=true&sd=true" target="_" className="download-button no-select no-decoration">
          Download CV
             </a>
             <div className="filler-div"></div>
          </div>
        </div>
      </div>
      <div className="bottom-half">

      </div>
      {/* <div className='image-container'></div>
      <img src={profileImage}/> */}
    </div>
  )
}

export default Homepage
