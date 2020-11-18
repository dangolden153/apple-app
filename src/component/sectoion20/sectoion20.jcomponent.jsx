import React from 'react'
import photos from '../pic/photo.png'
import AirPods from '../pic/airpod.png'
import HomeKit from '../pic/homeKit.png'
import musiz from '../pic/music.png'
import Siri from '../pic/siri.png'
import setting from '../pic/settng.png'
import svg from '../pic/right-arrow.svg'

import {Section, Container, DisplayGrid, ImgText, Img, Text, Heading, P,
    HeaderP,Header,Svg, H3,Box } from './sectoion20.styles'

const Section20 =()=>{

    return(
        <Section>

            <Box>
            <Container>
            <DisplayGrid>


                <ImgText>
                <Img
                style={{
                    backgroundImage: `url(${photos})`
                }}
                />
                <Text>
                    <Heading>Editing in photos</Heading>
                    <P>
                        Create standout photos with expanded
                        editing capabilities, including an improved
                        Retouch tool powered by machine learning.
                    </P>
                </Text>
                </ImgText>


                <ImgText>
                <Img
                style={{
                    backgroundImage: `url(${AirPods})`
                }}
                />
                <Text>
                    <Heading>AirPods automatic device switching</Heading>
                    <P>
                        AirPods automatically switch between your active devices paired to
                        the same iCloud account -- maing it even easier to use them with your 
                        Apple devices.<span>8</span> 
                    </P>
                </Text>
                </ImgText>


                <ImgText>
                <Img
                style={{
                    backgroundImage: `url(${HomeKit})`
                }}
                />
                <Text>
                    <Heading>HomeKit Secure video nofications</Heading>
                    <P>
                        Cameras that support HomeKit Secure video can now take advantage 
                        of face recognition and Activity Zones, allowing you to tailor 
                        notifications to specific people or specific areas in your camera view.<span>9</span>
                    </P>
                </Text>
                </ImgText>


                <ImgText>
                <Img
                style={{
                    backgroundImage: `url(${musiz})`
                }}
                />
                <Text>
                    <Heading>Listen Now</Heading>
                    <P>
                       Listin Now js the new homw for Apple music,<span>10</span> feauturing
                        releases, artist interviews, and playlist personalized for you --
                        all in one place
                    </P>
                </Text>
                </ImgText>


                <ImgText>
                <Img
                style={{
                    backgroundImage: `url(${Siri})`
                }}
                />
                <Text>
                    <Heading>Deeper web knowledge for Siri</Heading>
                    <P>
                       Siri can now help you find answers to a broader set of question
                       by leveraging information from across the web. Ask questions like "how do hybrid
                       cars work" or "what causes season" and Siri helps you find 
                       answers you're looking for.<span>11</span>
                    </P>
                </Text>
                </ImgText>


                <ImgText>
                <Img
                style={{
                    backgroundImage: `url(${setting})`
                }}
                />
                <Text>
                    <Heading>Faster updates</Heading>
                    <P>
                       Once macOS Big Sur is installed, software update begin in bacground and finish
                       faster than before -- so it's easier than ever to keep your
                        Mac up to date and secure.
                    </P>
                </Text>
                </ImgText>


                
            </DisplayGrid>
            </Container>

            <Header> 
        <H3>
    See a full list of what's new in Mac OS Big Sur
    </H3>
    <HeaderP>
    Learn more <Svg style={{
            backgroundImage: `url(${svg})`
        }}/>
    </HeaderP>
    </Header>
    </Box>
        </Section>
    )
}

export default Section20