import React from 'react'
import pic from '../pic/apple4.jpg'
import img from '../pic/safari.jpg'

import {Container, Right_section,Text,Header,P,Left_section,
    Text_img,Img,Left_img,P_left,Text_left} from './section4.styles'

const Section_4 =()=>{


    return(
<Container>
    <Left_section>
        <Text_left>
           <Header>Safari extension in the Appstore</Header> 
            <P_left>
A new dedicated category in the App Store makes it easy to discover
extension from your favourite developers. New support for the webExtensions Api
and migration tools allows developers to bring extensions from 
other browers to Safari. And like other browers, Safari asks you which websites each extension can access -
keeping your browser habit even more private
            </P_left>

            <Left_img
            style={{
                backgroundImage: `url(${img})`
            }}></Left_img>
        </Text_left>
    </ Left_section>
    <Right_section>
        <Text_img>
            <Text>
            <Header>Improve Tab design</Header>
            <P>
          Tab lovers rejoice: An elegant new look means more tabs are visible at once. you can hover any tab to bring 
          up instant page preview. And when you have several tabs open, Safari makes it easy to find thr one you're
          loking for with new space-efficient design.     
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

export default Section_4