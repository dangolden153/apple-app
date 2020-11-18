import React from 'react'

import {Section_1,Text_img,Section1_text,Header_text,Span_text1,Paragragh_text,P_span_text1
  ,  Link_btn,Span_link,Svg_con,Img_con} from './section14.styles'
import pics from '../pic/ap.jpg'

const Section_14 = ()=>{
    return (
        <Section_1>
            <Text_img>
                <Section1_text>
                    <Header_text>
                    Redsigned Maps.
                    Better ways to find your way.
                    
                    </Header_text>

                     <Paragragh_text>
                         <P_span_text1>
                    Updated to make the most of your big display, Maps on Mac make trips
                    fast and easy. Powerful new features lets you easilt research destinations
                    in advance. And new ways to navigate take the guesswork out of getting there.
                             </P_span_text1>
                    </Paragragh_text>

                     
                </Section1_text>
                <Img_con>
                    <img src={pics} alt="section one mac pics"/>
                </Img_con>
            </Text_img>
        </Section_1>
    )
}

export default Section_14