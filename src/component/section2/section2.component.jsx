import React from 'react'

import {Section_1,Text_img,Section1_text,Header_text,Span_text1,Paragragh_text,P_span_text1
  ,  Link_btn,Span_link,Svg_con,Img_con} from './section2.styles'
import pics from '../pic/apple2.jpg'

const Section2 = ()=>{
    return (
        <Section_1>
            <Text_img>
                <Section1_text>
                    <Header_text>
                    <Span_text1>the all-new safari.</Span_text1>
                   <Span_text1>it's love at first site.</Span_text1>  
                    </Header_text>

                     <Paragragh_text>
                         <P_span_text1>Whether you're streaming,searching or just browsing,Safari is the</P_span_text1>
                         <P_span_text1>best way to surf the web on all Apple devices.And itd biggest</P_span_text1>
                         <P_span_text1> update ever bringds intuitive customization options, improves on </P_span_text1>
                         <P_span_text1>industry-leading performance and battary life, and introduces</P_span_text1>
                         <P_span_text1> powerful new feature designed to protect your privacy.</P_span_text1>

                     </Paragragh_text>

                     
                </Section1_text>
                <Img_con>
                    <img src={pics} alt="section one mac pics"/>
                </Img_con>
            </Text_img>
        </Section_1>
    )
}

export default Section2