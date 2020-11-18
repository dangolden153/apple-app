import React from 'react'
import pic from '../pic/apple-pics1.jpg'
import img from '../pic/safari.jpg'

import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,Left_img,P_left,Text_left} from './section11.styles'

const Section_11 =()=>{


    return(
<Container>
    <Left_section>
        <Text_left>
           <Header>#image</Header> 
            <P_left>
Discover trending images and GIFs -- and instantly add them to any message
            </P_left>

          
        </Text_left>
    </ Left_section>
    <Right_section>
        <Text_img>
            
            <Img
            style={{
                backgroundImage: `url(${pic})`

            }}

         
            ></Img>
        </Text_img>
    </Right_section>
</Container>
    )
}

export default Section_11