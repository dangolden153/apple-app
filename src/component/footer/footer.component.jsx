import React from 'react'
import apple from '../pic/bag.svg'
import right from '../pic/right-direction.svg'
import Footer2 from '../footer2/footer2.component'


import {Container,UpContainer,P,Line,DownContainer,AppleCon,AppleSvg,Svg,
    Content,Text,Header,ColumsDisplay,GP, AppleBox, Box,Fullcontainer} from './footer.styles'

const Footer =()=>(
    <Container>

        <Fullcontainer>
        <UpContainer>

<Box>
            <P>1. Safari translation will be available in the U.S. and Canada with good 
                support for English,SPaish, Simplified Chinese, French, Germany, Russain and 
                Brazilian Portuguese
            </P>

            <P>2. Testing conducted by Apple in june 2009 by measuring page load performance of 
                snapshot version of ten popular websites under stipulated network conditions.
                Tested on production 1.4Ghz quad-core intel core i5-based 13-inch MacBookPro system
with 8GB RAM, 256GB SSD and prerelease macOS Big Sur. Tested with prerelease Safari 14 and chrome
version 18.3.0.4013.61. Performance will vaty base on usage, system configuration, network
connection and other factors.
            </P>

            <P>3. Guides in Maps will be available in cities including San Francisco,
                New York, London, Los Angeles.
            </P>
            <P>4. Cycling directions will be available fro the San Francisco Bay Areas,
            Los Angeles, New York, Shangai, Beijng, and more.
             </P>
            <P>
                5. Electric vehicle routing will require an iphone iOS 14 and a conpatible vehicle.
            </P>
            <P>
                6. Privacy information on the App Store will be coming in macOS Big Sur update latre this year.

            </P>
            <P>
                7. Automatic device switing works with Airpod Pro, Airpod (2nd generation),
                Powerbeats, Powerbeats Pro, and Beats solo Pro Requires iphone or ipod with the lastest
                version of OS, ipad with the latest version of ipadOS; Apple watch with the latest version
                of watchOS; or Mac with the latest version of macOS.
            </P>
            <P>
                8. Adaptive Lighting, Face Recognition, and activities Zone in the Home app will require
                an Apple TV, HomePod or iPad set up as a Home hub and compatible Homekit and accessory.

            </P>
            <P>
                9. Apple Music Reqiures a Subscription.
            </P>
            <P>
                10. Sir web answers will be available in (U.S, UK, Canada, India and Australia). <br/>
                Features are subject to change, some features, applications and services may not be 
                available in all regions or languages.
            </P>
           
            </Box>

        </UpContainer>

        <Line/>

        <AppleCon>
            <AppleBox>
                <AppleSvg 
                style={{
                    backgroundImage: `url(${apple})`
                }}
                />   
                <Svg 
                style={{
                    backgroundImage: `url(${right})`
                }}/> 
             </AppleBox>

             <AppleBox>
             <P>macOS </P>
             <Svg 
                style={{
                    backgroundImage: `url(${right})`
                }}/> 

             </AppleBox>

             <AppleBox>
             <P>macOS Big Sur Preview</P>
             </AppleBox>
               
            </AppleCon>


            <DownContainer>
<Footer2/>
            </DownContainer>

               

        <Line/>
        <GP> Dan-Golden:<span> we shine always</span></GP>
</Fullcontainer>
    </Container>
)

export default Footer