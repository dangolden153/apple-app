import React from 'react'
import pc from '../pic/section1-apple.png'
import './header.styles.css'
import NavBar from '../top-navBar/top-navBar.component'
import Down_nav from '../down-nav/down-nav.component'





const Header =()=>{

    return(
        <div className="header-con">
            <div className="header-img">
                <img src={pc} alt="mac pc" className='apple-img'/>
            </div>
            <div className="header-box">        <h1 className="header-text">
            <span className="span1">macOS Big Sur</span>
            <span className="span2">Doing it all, </span>
            <span className="span3">in all new ways.</span>

        </h1>

        <p className="paragragh-text">
macOS Big Sur elevates the most advanced desktop operation system in the world to a new level of power
and beauty. Experience Mac to the fullest with a refined new design. Enjoy the biggest safari update ever.
Discover new features for Maps and Messages. And get even more transparency around privacy.

        </p>

        <div className="btn">Coming this fall</div>
        </div>

        </div>
    )
}

export default Header