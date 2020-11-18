import React from 'react'
import pics from '../pic/app3.png'
import svg from '../pic/right-arrow.svg'

import {Container,Left_box,Text,
    Img,Right_box,Up_h,Down_a, Svg,Up_header} from './section22.styles'

const Section22 =()=>{

    return(
<Container>

    <Left_box>
    <Img style={{
            backgroundImage: `url(${pics})`
        }}/>
            
            <Text>
            <Up_h>Develop for macOS Big Sur.</Up_h>
        <Down_a>Learn more
            <Svg style={{
                backgroundImage: `url(${svg})`
            }}/>
        </Down_a>
            </Text>
           
    </Left_box>

</Container>
    )
}

export default Section22;