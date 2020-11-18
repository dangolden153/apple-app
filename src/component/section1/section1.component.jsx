import React, {useState} from 'react'

import './section1.styles.css'
import picture from '../pic/apple3-sec1.jpg'
import pics1 from '../pic/apple2-sec1.jpg'
import pics2 from '../pic/apple-s1.jpg'



const Section1 = ()=>{
    const [state, setState] = useState(false);
    const [text, setText] = useState(false);
    const [upText, setUpText] = useState(false);
    const [fadeUp, setfadeUp] = useState(false);
    const [imgTransform, setimgTransform] = useState(false);
    const [fixedPostion, setfixedPostion] = useState(false);
    const [pics, setPics] = useState(false);
    const [DownText, setDownText] = useState(false);
    const [textDown, settextDown] = useState(false);

 


   //////////////// fading in position right text       50
   const handleChangeDownText =()=>{
    if (window.scrollY >= 2590  ){        
        settextDown(true)
    }

    else {
        settextDown(false)
    }
}

    



    //////////////// setting the img container to transit downward      150
    const handleChangefadeUpBox =()=>{
        if (window.scrollY >= 3020  ){        
            setimgTransform(true)
        }

        else {
            setimgTransform(false)
        }
    }


//////////////// opacity of the parabox to = 0      280  ini 570
const handleChangefadeInBox =()=>{
    if (window.scrollY >= 3010  ){        
        setDownText(true)
    }

    else {
        setDownText(false)
    }
}


//////////////// fading up the last text        10
const handleChangefadeUp =()=>{
    if (window.scrollY >= 2710  ){        
        setfadeUp(true)
    }

    else {
        setfadeUp(false)
    }
}

    //////////////// changing of image      10
    const handleChangeupImg =()=>{
        if (window.scrollY >= 2700 ){        
            setPics(true)
        }

        else {
            setPics(false)
        }
    }
    
    //////////////// fading out of the opacity text     80   
    const handleChangeupText =()=>{
        if (window.scrollY > 2700 ){        
            setUpText(true)
        }

        else {
            setUpText(false)
        }
    }

   

/////////////// text opacity = 1        20
    const handleChangeFadinText =()=>{
        if (window.scrollY >= 2430){
            setText(true)
        }

        else{
            setText(false)   
        }
    }


//////////////// to display flex     + 10
const handleChangefixed =()=>{
    if (window.scrollY >= 2410 &&  window.scrollY <= 3030){        
        setfixedPostion(true)
    }

    else {
        setfixedPostion(false)
    }
}

    /////////////  image transition
    const handleChange =()=>{
        if (window.scrollY >= 2400 ){       
            setState(true)
        }

        else {
            setState(false)
        }
    }


    

     
    window.addEventListener('scroll', handleChange);
    window.addEventListener('scroll',  handleChangeFadinText);
    window.addEventListener('scroll',  handleChangeupText);
    window.addEventListener('scroll',  handleChangefadeUp);
    window.addEventListener('scroll',  handleChangefadeUpBox);
    window.addEventListener('scroll',  handleChangefixed);
    window.addEventListener('scroll',  handleChangeupImg);
    window.addEventListener('scroll',  handleChangeDownText);
    window.addEventListener('scroll',  handleChangefadeInBox);

    


    return (
        <section className="section1">
            <div className="text-img">
                <div className="section1-text">
                    <h2 className="section1-header-text">
                    Bold new experience. Same Mac magic
                      
                    </h2>
                     <p className="section1-paragragh-text">
                     Unparalleled power. Legendary ease of use. Limitless creavity
                     macOS Big Sur brings a redefine new design that even give you more
                     of the things you love above Mac
                         

                     </p>

                     <a href="#" className="section1-link">
                         <span className="span-link">Watch the film</span>
                         <div className="film-svg">
                             <img src="" alt=""/>
                         </div>
                     </a>
                </div>
                <div className={fixedPostion? "flex-img-text Active-flex" : "flex-img-text"}> 
                <div className={imgTransform ? "flex-img-textBox flex-img-textBoxA" : "flex-img-textBox"}>

             <div className="left-text-box">

                <div className={upText? 'paraBox ActiveparaBox' : 'paraBox'} >
                <div className={text ? 'parag fadeIn' : 'parag'} >
                    <h3 className="st-heading">
                        Streamlined apps
                    </h3>
                    <p className="st-p">
                        From full side sidebar to refreshed to toolbar,
                        A new clean app design makes sure your conttent 
                        is always front and center
                    </p>
                </div>
                </div>

            <div className={DownText ? 'paragBox ActiveparagBox' : 'paragBox'}>
                <div className={fadeUp ? 'parag fadeUp' : 'parag'}>
                <h3 className="st-heading">
                        Refreshed Dock
                    </h3>                    
                    <p className="st-p">
                        A sleek design makes getting to your favourite apps and even easier.
                        And a new uniform shape app icon add consistency while letting the
                         personslity of Mac shine through
                    </p>                
                    </div>
                    </div>

            </div> 
                 
                 
                 
                 

                 <div className={pics ? "img-box img-boxA" : 'img-box'}>
                 <div className={imgTransform ? "section1-imgBox section1-imgBoxA" : "section1-imgBox" }>
                 <div className={state ? 'section1-img Activeimg' : 'section1-img'} >
                   <div className={pics ? "img-wrapper img-wrapperA" : 'img-wrapper'}>
                    <img src={picture} alt="section one mac pics" className='apple-img' />
                   </div>
                   <div className="pics1">
                   <img src={pics1} alt="section one mac pics" className='apple-img' />
                   </div>
                   <div className={pics ?  "pics2 pics2A" : 'pics2'} >
                   <img src={pics2} alt="section one mac pics" className='apple-img' />
                   </div>
                </div>
                </div>
                </div>




                <div className= 'paraBoxDown' >
                <div className={textDown ? 'paragDown fadeInDown' : 'paragDown'} >
                    <h3 className="st-heading">
                        Control center for Mac
                    </h3>
                    <p className="st-p">
                        instantly access the control you use most -- like WI-FI and Bluetooth
                        --and new controls to play music and enable dark mode for your display.
                        Design just for Mac, the new Control lets you add controls and drag 
                        favourites to menu bar to customize it just for you.
                    </p>
                </div>
                </div>

                </div>
                </div>
            </div>

           
        </section>
    )
}

export default Section1