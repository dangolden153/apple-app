import React from 'react'

import {Section_1,Text_img,Section1_text,Header_text,Paragragh_text
  ,  Link_btn,Span_link,Svg_con,Img_con} from './section2.styles'
import pics from '../pic/apple2.jpg'

const Section2 = ()=>{
    return (
        <Section_1>
            <Text_img>
                <Section1_text>
                    <Header_text>
                    The all-new Safari. it's Love at first site.
                     
                    </Header_text>

                     <Paragragh_text>
                     Whether you're streaming, searching or just browsing, Safari is the
                     best way to surf the web on all Apple devices. And itd biggest
                     update ever bringds intuitive customization options, improves on
                     industry-leading performance and battary life, and introduces
                     powerful new feature designed to protect your privacy.

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