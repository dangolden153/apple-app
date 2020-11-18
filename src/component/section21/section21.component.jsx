import React from 'react'
import pics from '../pic/ap-back.jpg'
import svg from '../pic/right-direction.svg'
import {Container, Header,H3,P,Svg,Content,Img,Box,Left,Right,Grid,
    TextContainer,H,Psvg } from './section21.styles'

const Section21 = ()=>(
<Container>
    




    <Content>
        <Img
        style={{
            backgroundImage: `url(${pics})`
        }}
        >
        <Box>
            <Left>
            <Header> <H3>
    See if your Mac can run MacOS Big Sur.
    </H3>
    <Psvg>
    Learn more about Mac <Svg style={{
            backgroundImage: `url(${svg})`
        }}/>
    </Psvg>
    </Header>
            </Left>
            <Right>
            <Grid>
                <TextContainer>
                    <H>MacBook </H>
                    <P> 2015 and later</P>
                    <P>learn more <Svg style={{
            backgroundImage: `url(${svg})`
        }}/></P>
                </TextContainer>

                <TextContainer>
                    <H>MacBook Air</H>
                    <P> 2013 and later</P>
                    <P>learn more <Svg style={{
            backgroundImage: `url(${svg})`
        }}/> </P>
                </TextContainer>

                <TextContainer>
                    <H>MacBook Pro</H>
                    <P> 2013 and later</P>
                    <P>learn more <Svg style={{
            backgroundImage: `url(${svg})`
        }}/> </P>
                </TextContainer>

                <TextContainer>
                    <H>Mac mini </H>
                    <P> 2014 and later</P>
                    <P>learn more <Svg style={{
            backgroundImage: `url(${svg})`
        }}/></P>
                </TextContainer>

                <TextContainer>
                    <H>iMac </H>
                    <P> 2014 and later</P>
                    <P>learn more <Svg style={{
            backgroundImage: `url(${svg})`
        }}/></P>
                </TextContainer>

                <TextContainer>
                    <H>iMac Pro </H>
                    <P> 2017 and later</P>
                    <P>(all models) </P>
                </TextContainer>

                <TextContainer>
                    <H>MacBook Pro</H>
                    <P> 2013 and later</P>
                    <P>learn more  <Svg style={{
            backgroundImage: `url(${svg})`
        }}/></P>
                </TextContainer>

                
            </Grid>
            </Right>
        </Box>
        </Img>
    </Content>
</Container>
)

export default Section21