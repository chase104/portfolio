import React from 'react'
import './styles.css'
import findme from './images/find_me_logo.png'
import film from './images/film.png'
import sword from './images/sword.png'
import github from './images/GitHub_Logo.png'

const Navbar = (props) => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="home">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className="link odd no-select" >
          <img src={findme} />
          <div className="title  ">Find Me</div>
          <div className="tag">app</div>
        </div>
        <div className="link even no-select" >
          <img src={film} />
          <div className="title">Stream Simply</div>
          <div className="tag">app</div>
        </div>
        <div className="link odd no-select" >
          <img src={sword} />
          <div className="title">Adventurer's College</div>
          <div className="tag">app</div>

        </div>
        <div className="link even no-select">
          <img src={github} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
