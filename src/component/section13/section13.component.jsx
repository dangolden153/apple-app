import React from 'react'
import pic from '../pic/app4.jpg'

import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,Left_img,P_left,Text_left} from './section13.styles'

const Section_13 =()=>{


    return(
<Container>
    <Left_section>
        <Text_left>
           <Header>Search</Header> 
            <P_left>
Find it, whatever it is, faster. Search now organizes your results into links and photo
and highlights matching terms.
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

export default Section_13