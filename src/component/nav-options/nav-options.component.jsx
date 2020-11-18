import React from 'react'
import svg from '../pic/white-search.svg'

import {Container,Ul ,Li, SearchBox,P,Svg} from './nav-options'

const NavOPtions =()=>(

    <Container>

        <SearchBox>
            <Svg 
            style={{backgroundImage: `url(${svg} )` }}
            alt="search icon" />
            <P className="p-search">Search Apple.com</P>
        </SearchBox>
        <Ul>

        <Li>Mac</Li>
        <Li>iPad</Li>
        <Li>iPhone</Li>
        <Li>Watch</Li>
        <Li>Tv</Li>
        <Li>Music</Li>
        <Li>Support</Li>

        </Ul>
    </Container>
)

export default NavOPtions