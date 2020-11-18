import React,{useState} from 'react'
import navIcon from '../pic/right-direction.svg'
import './down-nav.styles.css'

const Down_nav =()=>{
    const [state, setState] = useState(false)

    const handleChange =()=>{
        if (window.scrollY>= 1930 ){
            setState(true)
        }
     
        
        else{
            setState(false)
        }
    }

    window.addEventListener("scroll", handleChange)

    return (
        <div className={state ? "Down_nav isActive"  : "Down_nav"}  >

<div className="nav-con">
            <div className="left-box">
                <p className={state ? "preview-text active" : " preview-text"}> Preview</p>
                <h4 className={state ? "mac-text active" : "mac-text"}>mac<span className="mac-span-text">OS</span> <span className="big-text"> Big Sur</span></h4>
            </div>
            <div className="right-box">
                <p className={state ? "overview-text active" : " overview-text"}>Overview</p>
                <p className={state ? "features active" : " features"}>All New Features</p>
            </div>
    </div>

    <div className="nav-con1">
            <div className="left-box">
                <p className={state ? " activetextMedia" : " preview-textMedia"}> macOS Big Sur</p>
                 
            </div>
            <div className="right-box">
                <img src={navIcon} alt="nav icon" className="seacrh"/>
            </div>
    </div>
        </div>
    )
}


    export default Down_nav