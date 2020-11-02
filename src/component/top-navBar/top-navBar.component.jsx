import React,{useState, useEffect} from 'react'
import love from '../pic/white-love.svg'
import './top-navBar.styles.css'

const NavBar =()=>{
    const [scrol, setscrol] = useState(false)

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
            <li className="items  "><a href="#" className="link"><img src={love} alt="navbar svg" className="img"/></a></li>
            <li className="items"><a href="#" className="link">Mac</a></li>
            <li className="items"><a href="#" className="link">ipad</a></li>
            <li className="items"><a href="#" className="link">iphone</a></li>
            <li className="items"><a href="#" className="link">Watch</a></li>
            <li className="items"><a href="#" className="link">Tv</a></li>
            <li className="items"><a href="#" className="link">Music</a></li>
            <li className="items"><a href="#" className="link">Support</a></li>
            <li className="items padding-left"><a href="#" className="link"><img src={love} alt="" className="img"/></a></li>
            <li className="items padding-left"><a href="#" className="link"><img src={love} alt="" className="img"/></a></li>

        </ul>
        </div>
      
    )

}

export default NavBar
