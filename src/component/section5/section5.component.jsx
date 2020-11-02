import React from 'react'

import {Container,Left_box,P1, P2,P3,
    Img,Right_box,Up_p,Down_p,Text} from './section5.styles'

const Section5 =()=>{

    return(
<Container>
    <Left_box>
        <Text>
            <P1>Beta</P1>
            <P2>Translation</P2>
            <P3>Translates entire web pages between seven languages with a 
                single click
            </P3>
        </Text>
        <Img></Img>
    </Left_box>
    <Right_box>
        <Up_p>Password monitoring</Up_p>
        <Down_p>Safari lets you know of any saved passwords that have been compromised
            in a data breach --and helps you upgrage them
        </Down_p>
    </Right_box>
</Container>
    )
}

export default Section5;