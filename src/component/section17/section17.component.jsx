import React from 'react'
import vid from '../pic/ap-vid.mp4'
import pics from '../pic/ap8.jpg'

import {Container,Left_box,Vid, P2,P3,
    Img,Right_box,Up_p,Down_p,Text,PBox} from './section17.styles'

const Section17 =()=>{

    return(
<Container>
    <Left_box>
       <Vid>
           <video loop muted autoPlay>
               <source src={vid}/>
           </video>
       </Vid>
            
    </Left_box>
    <Right_box>

        <PBox>
        <Up_p>Indoor maps</Up_p>
        <Down_p>Browse dtailed interior layout of major airports
            and shoppiing centers before you even leave home.
        </Down_p>
        </PBox>

        <Img style={{
            backgroundImage: `url(${pics})`
        }}/>

    </Right_box>
</Container>
    )
}

export default Section17;