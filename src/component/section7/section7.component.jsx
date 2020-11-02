import React from 'react'
import pics from '../pic/ap8.png'
import pics1 from '../pic/ap-battery.png'
import pics2 from '../pic/ap-vid.png'

import {Container,Left_box,P1, P2,P3,H2,P4,Text_img_down,Img_p_down,Img_right_battery,
    Img,Right_box,Up_p,Down_p,Text, Text_img, Img_p, Text_img_container,Img_right} from './section7.styles'

const Section7 =()=>{

    return(
<Container>
    <Left_box>
        <Text>
            <P1>Increase performance</P1>
            <P2>We made the fatest desktop browser on the </P2>
            <P3>planet even faster
            </P3>
        </Text>
        <Img style={{
            backgroundImage: `url(${pics})`
        }}>
        </Img>
        <H2>
            +50%
        </H2>
        <P4>
            faster on average at loading frequently visited websites than Chrome <span>2</span>
        </P4>
    </Left_box>
    <Right_box>
        <Up_p>Improved power efficiency</Up_p>
        <Down_p>Safari lets you do more online on a single charge than any other 
            browser
        </Down_p>

        <Text_img_container>

        <Text_img>
        <Img_right style={{
            backgroundImage: `url(${pics2})`}} />
          
        <Img_p>
        Up to 3 hours more streaming videos compared to Chrome and Firefox
        </Img_p>
        </Text_img>

        <Text_img_down>
        <Img_right_battery 
         style={{
            backgroundImage: `url(${pics1})`}}/>
        <Img_p_down>
         Up to 1 hour more browsing compared to Chrome and Firefox
        </Img_p_down>
        </Text_img_down> 
 </Text_img_container>

         </Right_box>
</Container>
    )
}

export default Section7;