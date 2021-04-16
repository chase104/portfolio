import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core/';
import { Link } from 'react-router-dom'
import './styles.css'
import picOne from '../../pic_1.png'
import picTwo from '../../pic_2.png'
import picThree from '../../pic_3.png'

import react from './react_sticker.png'
import mongo from './mongo_sticker.png'
import express from './express_sticker.png'

import {NavigateNext} from '@material-ui/icons/';

const Home = () => {

  const [frontend, setFrontend] = useState([
    "React",
    "Redux",
    "JavaScript",
    "CSS",
    "HTML",
    "Axios",
    "Material-UI",
    "Material-UI Grid",
    "Materialize CSS",
    "JSX",
    "useState",
    "useEffect",
    "useContext",
    "react-router-dom"
    ])
  const [backend, setBackend] = useState([
    "Express",
    "Postgres",
    "Heroku",
    "Firebase/Firestore",
    "MongoDB/Mongoose",
    "Passport",
    "External API Calling",
    "Bcrypt",
    "In-app PDF Creation",
    "Automated Emails (with attachments)"
    ])
  const [college, setCollege] = useState({
    functionality: ["Search movie titles", "See recommended movies", "Search by category, year, and/or IMBD score", 'Add movies to "favorites" or "watch later" lists',
   "See where a specific movie can be streamed with subscription"],
   base: ["MongoDB", "Express", "React", "Node"],
   utility:["axios", "passport", "express-session", "Material-ui", "Postgres-Database", "Heroku", "Mongoose", "PDF-creation", "automated emails"]
  })
  console.log(college.functionality);
    const handleSpecs = (number) => {
      console.log("running specs", number);
      const specsDiv = document.getElementById(`specs-${number}`)
      console.log(specsDiv);
      const classList = specsDiv.classList
      classList.contains("display-specs") ? classList.remove("display-specs") : classList.add("display-specs")
    }

  return (
    <div className="home-container">
      <div className="row-one">
        <div className="image" >
          <img src={picOne} style={{animationDelay: "8s"}}/>
          <img src={picTwo} style={{animationDelay: "4s"}}/>
          <img src={picThree} style={{animationDelay: "0s"}}/>
        </div>
        <div className="description-container">
        <div className="name-and-title">
          <div className="my-name">
            <h1 className="name" style={{marginRight: "8px"}}>Chase</h1>
            <h1 className="name">Van Halen</h1>
          </div>
          <h4 className="job-title">Full-Stack Web Developer</h4>
        </div>
        <div className="experience-container">
          <div className="frontend experience">
            <div className="experience-title">Frontend</div>
            <div className="examples">
              {
                frontend.map((item) => (
                  <div className="example">{item}</div>
                ))
              }

            </div>
          </div>
          <div className="backend experience">
            <div className="experience-title">Backend</div>
              <div className="examples">
                {backend.map((item) => (
                  <div className="example">{item}</div>
                ))}
              </div>
          </div>
        </div>
        </div>

      </div>
      <div className="row-two">
        <Grid container className="apps-container">
          <Grid xs={10} sm={10} md={10} lg={4} item className="app app-one no-select">
          <div className="specs specs-one" id="specs-one">
            <div className="top-row">
              <div className="row-title">
                <div style={{marginRight: "8px"}}>Functionality</div>
                <div>(what users can do)</div>
              </div>
              <div className="functionality-contents">
                {college.functionality.map((item) => (

                  <div className="item">
                  <NavigateNext />
                  <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mid-row">
            <div className="row-title">
              <div style={{marginRight: "8px"}}>Base Technologies</div>
              <div>(app foundation)</div>
            </div>
            <div className="base-contents">
              {college.base.map((item) => (
                <div className="item">{item}</div>
              ))}
            </div>
            </div>
            <div className="bottom-row">
            <div className="row-title">
              <div style={{marginRight: "8px"}}>Utility Technologies</div>
            </div>
            <div className="functionality-contents utility">
              {college.utility.map((item) => (
                <div className="item">{item}</div>
              ))}
            </div>
            </div>
          </div>
              <div className="upper upper-one">
                <div className="upper-title">Built With</div>
                <div className="bubbles-container">
                  <div className="bubble">
                    <img src={react} className="square-sticker"/>
                  </div>
                  <div className="bubble">
                    <img src={mongo} className="square-sticker"/>
                  </div>
                  <div className="bubble">
                    <img src={express} className="long-sticker"/>
                  </div>
                </div>
              </div>
              <div className="app-display display-one"></div>
              <div className="lower lower-one">
                <div className="bubbles-container">
                  <div className="bubble lower-bubble" onClick={() => handleSpecs("one")}>
                    <div className="lower-content">Specs</div>
                  </div>
                  <a  href="https://github.com/chase104/stream_simply" target="_" className="bubble lower-bubble no-decoration">
                    <div className="lower-content">GitHub</div>
                  </a>
                  <a href="https://stream-simply.herokuapp.com/" target="_" className="bubble lower-bubble no-decoration">
                    <div className="lower-content">Go to app</div>
                  </a>
                </div>
              </div>
          </Grid>
          <Grid xs={10} sm={10} md={10} lg={4} item className="app app-two no-select">
          <div className="specs specs-two" id="specs-two">
            <div className="top-row">
              <div className="row-title">
                <div style={{marginRight: "8px"}}>Functionality</div>
                <div>(what users can do)</div>
              </div>
              <div className="functionality-contents">
                {college.functionality.map((item) => (

                  <div className="item">
                  <NavigateNext />
                  <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mid-row">
            <div className="row-title">
              <div style={{marginRight: "8px"}}>Base Technologies</div>
              <div>(app foundation)</div>
            </div>
            <div className="base-contents">
              {college.base.map((item) => (
                <div className="item">{item}</div>
              ))}
            </div>
            </div>
            <div className="bottom-row">
            <div className="row-title">
              <div style={{marginRight: "8px"}}>Utility Technologies</div>
            </div>
            <div className="functionality-contents utility">
              {college.utility.map((item) => (
                <div className="item">{item}</div>
              ))}
            </div>
            </div>
          </div>
            <div className="upper upper-two">
            <div className="upper-title" style={{color: "black"}}>Built With</div>
            <div className="bubbles-container">
              <div className="bubble">
                <img src={react} className="square-sticker"/>
              </div>
              <div className="bubble">
                <img src={mongo} className="square-sticker"/>
              </div>
              <div className="bubble">
                <img src={express} className="long-sticker"/>
              </div>
            </div>
            </div>
            <div className="app-display display-two"></div>
            <div className="lower lower-two">
            <div className="bubbles-container">
              <div className="bubble lower-bubble light-bubble" onClick={() => handleSpecs("two")}>
                <div className="lower-content">Specs</div>
              </div>
              <a  href="https://github.com/chase104/tinder-clone" target="_" className="bubble lower-bubble light-bubble no-decoration">
                <div className="lower-content">GitHub</div>
              </a>
              <div className="bubble lower-bubble light-bubble">
                <div className="lower-content">Go to app</div>
              </div>
            </div>
            </div>
          </Grid>
          <Grid xs={10} sm={10} md={10} lg={4} item className="app app-three no-select" >
            <div className="specs specs-three" id="specs-three">
              <div className="top-row">
                <div className="row-title">
                  <div style={{marginRight: "8px"}}>Functionality</div>
                  <div>(what users can do)</div>
                </div>
                <div className="functionality-contents">
                  {college.functionality.map((item) => (

                    <div className="item">
                    <NavigateNext />
                    <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mid-row">
              <div className="row-title">
                <div style={{marginRight: "8px"}}>Base Technologies</div>
                <div>(app foundation)</div>
              </div>
              <div className="base-contents">
                {college.base.map((item) => (
                  <div className="item">{item}</div>
                ))}
              </div>
              </div>
              <div className="bottom-row">
              <div className="row-title">
                <div style={{marginRight: "8px"}}>Utility Technologies</div>
              </div>
              <div className="functionality-contents utility">
                {college.utility.map((item) => (
                  <div className="item">{item}</div>
                ))}
              </div>
              </div>
            </div>
            <div className="upper upper-three">
              <div className="upper-title" style={{color: "white"}}>Built With</div>
              <div className="bubbles-container">
                <div className="bubble">
                  <img src={react} className="square-sticker"/>
                </div>
                <div className="bubble">
                  <img src={mongo} className="square-sticker"/>
                </div>
                <div className="bubble">
                  <img src={express} className="long-sticker"/>
                </div>
              </div>
            </div>
            <div className="app-display display-three"></div>
            <div className="lower lower-three">
            <div className="bubbles-container">
              <div className="bubble lower-bubble blue-bubble" onClick={() => handleSpecs("three")}>
                <div className="lower-content">Specs</div>
              </div>
              <a  href="https://github.com/chase104/class-connect" target="_" className="bubble lower-bubble blue-bubble no-decoration">
                <div className="lower-content">GitHub</div>
              </a>
              <a href="https://class-connect1.herokuapp.com/" target="_" className="bubble lower-bubble blue-bubble no-decoration">
                <div className="lower-content">Go to app</div>
              </a>
            </div>
            </div>
          </Grid>

        </Grid>
      </div>

    </div>
  )
}
export default Home
