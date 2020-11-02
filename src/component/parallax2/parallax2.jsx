import React from 'react';
import './parallax2.css'
import { Parallax, Background } from 'react-parallax';
 
const MyComponent = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../pic/nature.jpg')}
            bgImageAlt="the cat"
            strength={300}
            
        >
            <Parallax
             blur={ 15 }
             bgImage={require('../pic/nature.jpg')}
             bgImageAlt="the cat"
             strength={200}
             y={-20}
            className="box">
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            </Parallax>
            
            <div style={{ height: '400px' }} />
        </Parallax>
</div>
        )

        export default  MyComponent ; 
