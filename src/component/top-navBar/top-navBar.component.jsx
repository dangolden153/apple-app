import React,{useState, useEffect} from 'react'
import apple from '../pic/apple-icon.svg'
import bag from '../pic/apple-bag.svg'
import search from '../pic/white-search.svg'
import NavOPtions from '../nav-options/nav-options.component'
import './top-navBar.styles.css'

const NavBar =()=>{
    const [scrol, setscrol] = useState(false)
    const [state, setState] = useState(false)
    const [background, setbackground] = useState(false)



    const toggle =()=>{
        setState(!state)
    }

    const togglebg =()=>{
        setbackground(!background)
    }


    const handleChange =()=> {
        if (window.scrollY >= 5){
            setscrol(true)
        }else { setscrol(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleChange)

    },[])


    return(
        <div className={scrol ? 'list-con active' : 'list-con'}>
  <ul className='list' >
            <li className="items  "><a href="#" className="link"><img src={apple} alt="navbar svg" className="img"/></a></li>
            <li className="items"><a href="#" className="link">Mac</a></li>
            <li className="items"><a href="#" className="link">ipad</a></li>
            <li className="items"><a href="#" className="link">iphone</a></li>
            <li className="items"><a href="#" className="link">Watch</a></li>
            <li className="items"><a href="#" className="link">Tv</a></li>
            <li className="items"><a href="#" className="link">Music</a></li>
            <li className="items"><a href="#" className="link">Support</a></li>
            <li className="items padding-left"><a href="#" className="link"><img src={search} alt="" className="img-search"/></a></li>
            <li className="items padding-left"><a href="#" className="link"><img src={bag} alt="" className="img"/></a></li>

        </ul>


        <ul className='list1' >
            <li className="items"  onClick={toggle}>
            <div className={state? " line1Active" : "line1"}></div>
            <div className={state? " line2Active" : "line2"}></div>
        </li>
        
        <li className="items  "><a href="#" className="link"><img src={apple} alt="navbar svg" className="img"/></a></li>
        <li className="items  ">
            <a href="#" className="link"><img src={bag} alt="navbar svg" className={background ? " img-bag" :"img"}/>
            </a></li>
        </ul>

        <div className={ state ? " NavOPtionsBox" : "ActiveNavOPtionsBox"}>
        <NavOPtions/>
        </div>
        
        </div>
      
    )

}

export default NavBar
