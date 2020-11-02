import React from 'react'
import pic from '../pic/ap3.jpg'
import appleVid from '../pic/apple1-vid.mp4'

import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,Left_img,P_left,Text_left} from './section10.styles'

const Section_10 =()=>{


    return(
<Container>
    <Left_section>
        <Text_left>
           <Header>Groups photos</Header> 
            <P_left>
    Every group is different. Make your stands out at a glace by setting an image with a 
    photo, Memoji, or emoji.
            </P_left>

            <Left_img>
                <video autoPlay muted loop  >
                    <source src={appleVid}/>
                </video>
            </Left_img>
        </Text_left>
    </ Left_section>
    <Right_section>
        <Text_img>
            <Text>
            <Header>Mentions</Header>
            <P>
          Tyype a name to a direct message to someone. When you are mentioned,
          your name is highlighted. You can even customize an active group so you 
          only recive notofications when you are mentioned.    
            </P>
            </Text>
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

export default Section_10