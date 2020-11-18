import React from 'react'
import img from '../pic/apple3.jpg'
import {Container,Text_img,Text,Header,P,Img} from './section3.styles'

const Section_3 = ()=>{
    return(
<Container>
    <Text_img>
        <Text>
            <Header>Customizable start page</Header>
            
            <P>Set a custom background image to start every browsing session with the view that works
            for you. And decide what appears on your start page - such as your reading List, Favourites,
            icloud Tabs, Siri Suggestions, and even a Privacy Report.</P>
            

        </Text>
        <Img style={{
            backgroundImage: `url(${img})`
        }}>
       </Img>
    </Text_img>
</Container>
    )
}
export default Section_3