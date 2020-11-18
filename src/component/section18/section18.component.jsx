import React from 'react'

import {Section_1,Text_img,Section1_text,Header_text,Span_text1,Paragragh_text,P_span_text1
  ,  Link_btn,Span_link,Svg_con,Img_con} from './section18.styles'
import pics from '../pic/app1.jpg'

const Section_18 = ()=>{
    return (
        <Section_1>
            <Text_img>
                <Section1_text>
                    <Header_text>
                    Privacy information on the
                    App Store. More transparency.
                    in every download.
                    </Header_text>

                     <Paragragh_text>
                         <P_span_text1>
                    New privacy information on App Store<span>7</span>  let you see a summary
                    of the privacy practices of each app before you decide to download 
                    it --just like nutrition labels helps you understand whats's in food before
                    you buy it.Developers self-report how they use your data, including what data
                    they collect and whether that data is used to track you 
                    o
                    ther apps and websites.
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

export default Section_18















