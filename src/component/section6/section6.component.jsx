import React from 'react'
import img from '../pic/apple3.jpg'
import {Container,Text_img,Text,Header,P,Img} from './section6.styles'

const Section_6 = ()=>{
    return(
<Container>
    <Text_img>
        <Text>
            <Header>Privacy Report</Header>
            <P>Safari uses intelligent Tracking Prevention to identify and prevent trackers
                from profilling or following you accross the web. A weekly Privacy Report on 
                your start page shows how Safari protect your browser accross all websites you visit.
                 Or click the Privacy Report button in your Safari toolbar for instant snapshot of every
                 cross-site tracker Safari is actively blocking on any website you're visiting
                </P>
          

        </Text>
        <Img style={{
            backgroundImage: `url(${img})`
        }}>
       </Img>
    </Text_img>
</Container>
    )
}
export default Section_6