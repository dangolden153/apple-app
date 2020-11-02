import React from 'react'
import pic from '../pic/ap5.jpg'
import vid from '../pic/apple-vid.mp4'

import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,Left_img,P_left,Text_left} from './section9.styles'

const Section_9 =()=>{


    return(
<Container>
   
    <Right_section>
        <Text_img>
            <Text>
            <Header>Pin conversation</Header>
            <P>
         Pin any conversation to keep it at the top of your conversation list. Tapbacks,
         typing indicators, and recent message animate above pins. And for quick access to 
         your important conversations, your pins syncs across your iphone, ipad, and Mac.     
            </P>
            </Text>
            <Img
            style={{
                backgroundImage: `url(${pic})`

            }}

         
            ></Img>
        </Text_img>
    </Right_section>


    <Left_section>
        <Text_left>
           <Header>Inline replies</Header> 
            <P_left>
Reply directly to specific messages in any conversation. Message automatically 
starts a new thread under the origin reply, si if someone asks a question in a
 grounp conversation, its easy to keep track of all replies
            </P_left>

            <Left_img>
                <video muted autoPlay loop>
                    <source src={vid}/>
                </video>
            </Left_img>
        </Text_left>
    </ Left_section>
</Container>
    )
}

export default Section_9;