import React, {useState, useEffect} from 'react'
import pics from '../pic/toon2.png'
import pics2 from '../pic/toon4.png'
import pics3 from '../pic/toon3.png'
import pics4 from '../pic/toon5.png'
import pics5 from '../pic/toon7.png'
import pics6 from '../pic/toon6.png'
import pics7 from '../pic/toon8.png'
import img from '../pic/message.jpg'

import './section12.styles.css'

import {Container,Left_box,P1, P2,P3,
    Img,ImgBox,Img1,Right_box,Up_p,Down_p,Text,Img2,Img3,
    Img4,Img5,Img6 , Img7} from './section12.styles'

const Section12 =()=>{

    const [state, setState] = useState(false)

    const handleChange=()=>{
        if (window.scrollY >= 15000){
            setState(true)
    
        }   else {
            setState(false)
        }
    }
    
     
    useEffect (()=>{
        window.addEventListener('scroll', handleChange)
    },[])

   

    return(
<Container>
    <Left_box>
        <Text>
            <P1>Memoji</P1>
            <P3>Go ahead -- express yourselves. Now you can relate and edit Memoji right on 
                your Mac, and instantly share them in messages with Memoji stickers.
            </P3>
        </Text>
       

       
       <ImgBox>

        <div className="imgCnt">
        <img src={img} alt="message demo" className={state ? "pics picsActive" : "pics"}/>
    </div>

<div className={state ? "imgBOx active" : "imgBOx"}>

        <Img1 
        style={{
            backgroundImage: `url(${pics})`
        }}
        ></Img1>

        <Img2 style={{
            backgroundImage: `url(${pics2})`
        }}></Img2>

        <Img3 style={{
            backgroundImage: `url(${pics3})`
        }}></Img3>

        <Img4 style={{
            backgroundImage: `url(${pics4})`
        }}></Img4>

        <Img5 style={{
            backgroundImage: `url(${pics5})`
        }}></Img5>

        <Img6 style={{
            backgroundImage: `url(${pics6})`
        }}></Img6>

<Img7 style={{
            backgroundImage: `url(${pics7})`
        }}></Img7>
</div>
</ImgBox>

    </Left_box>
    <Right_box>
        <Up_p>Message effects</Up_p>
        <Down_p>Because sometimes, words ain't just enough.
        </Down_p>
    </Right_box>
</Container>
    )
}

export default Section12;