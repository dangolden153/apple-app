import React,{useState, useEffect} from 'react'
import { Parallax, Background } from 'react-parallax';

import './parallex.css'


const Parallex =()=> {
const [state, setSate] = useState(0);

const handleScroll =()=> setSate(window.pageXOffset);

useEffect(()=>{ 

window.addEventListener("scroll", handleScroll);

return ()=> window.removeEventListener('scroll', handleScroll)

},[])




    return(
        <Parallax className="Parallax">
            <div className="box1"
            style={{transform: `translateY(${state * 0.5}px)`}}
            />
            <div className="box2"
            style={{transform: `translateX(${state * 0.5}px)`}}  
            />
            <div className="box3"></div>

        </Parallax>

    )
}

export default Parallex