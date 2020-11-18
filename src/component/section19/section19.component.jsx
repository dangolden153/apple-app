import React from 'react'

import {Section_1,Text_img,Section1_text,Header_text,Span_text1,Paragragh_text,P_span_text1
  ,  Link_btn,Span_link,Svg_con,Img_con} from './section19.styles'
import pics from '../pic/ap-pc.jpg'

const Section_19 = ()=>{
    return (
        <Section_1>
            <Text_img>
                <Section1_text>
                    <Header_text>
                    <Span_text1>And even more.</Span_text1>
                    </Header_text>      
                </Section1_text>
                <Img_con>
                    <img src={pics} alt="section one mac pics"/>
                </Img_con>
            </Text_img>
        </Section_1>
    )
}

export default Section_19















