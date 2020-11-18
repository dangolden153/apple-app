import React from 'react'
import pic from '../pic/ap2.jpg'

import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,Left_img,P_left,Text_left,Box,Header2} from './section15.styles'

const Section_15 =()=>{


    return(
<Container>
   
   <Box>
    <Right_section>
        <Text_img>
        <Header>Guides</Header> 

            <Img
            style={{
                backgroundImage: `url(${pic})`

            }}

         
            ></Img>
        </Text_img>
    </Right_section>

    <Left_section>
        <Text_left>
        <Header2>Guides</Header2> 
            <P_left>
Discover new places to eat, shop, and explore with curated Guides from 
brands you love. Create Guides for your own favourite places and share them
 with friends and family. <span>4</span>
</P_left>

          
        </Text_left>
    </ Left_section>
    </Box>
</Container>
    )
}

export default Section_15