import React from 'react'

import {Section_1,Text_img,Section1_text,Header_text,Span_text1,Paragragh_text,P_span_text1
  ,  Link_btn,Span_link,Svg_con,Img_con} from './section8.styles'
import pics from '../pic/ap7.jpg'

const Section_8 = ()=>{
    return (
        <Section_1>
            <Text_img>
                <Section1_text>
                    <Header_text>
                    <Span_text1>Messages on Mac.</Span_text1>
                   <Span_text1>The ultimate</Span_text1>  
                   <Span_text1>conversation stater.</Span_text1>  
                    </Header_text>

                     <Paragragh_text>
                         <P_span_text1>
                    Keep track of groups. Express youself instantly. Drill down into
                    the details. The updated Messages app for Mac gives you all the tools
                     you need to saty in control of the conversation.
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

export default Section_8