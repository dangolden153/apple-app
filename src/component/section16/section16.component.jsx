import React, {useState, useEffect} from 'react'
import pic from '../pic/ap1.jpg'
import pic1 from '../pic/ap9.png'

import './section16.styles.css'
import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,P_div,P_left,Text_left,Back_Img, Box} from './section16.styles'

const Section_16 =()=>{
    const [state, setState] = useState(false)

    const handleChange=()=>{
        if (window.scrollY >= 18700){
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
   
   <Box>
    <Right_section>
        <Text_img>
            <Text>
            <Header>Cycling routes</Header>
            <P>
         From elevation changes to live street, Maps gives you all 
         the tools you need to plan the perfect ride. When you're finished,
         just send the route to your iphone and hit the road. <span>5</span>   
            </P>
            </Text>
            <Img
            style={{
                backgroundImage: `url(${pic})`

            }} />

            <div className={state ? "Back_Img Active" : "Back_Img"} style={{
                backgroundImage: `url(${pic1})`

            }} />
        </Text_img>
    </Right_section>


    <Left_section>
        <Text_left>
           <Header>Electric vechicle routing</Header> 
           <P_div>
           <P_left>
Plan the perfect road trip -- 
charging stop now included.
            </P_left>
           </P_div>

           

        </Text_left>
    </ Left_section>

    </Box>
</Container>
    )
}

export default Section_16;