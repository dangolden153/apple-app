import styled from 'styled-components'
// import {Link} from 'react-router-dom'
 

export const Section_1 = styled.div `
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

`

export const Text_img = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px 40px;

@media only  screen and (max-width: 800px){
    padding: unset;
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
}
`
export const Section1_text = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
width: 76%;
margin: 30px auto;

@media only  screen and (max-width: 800px){
    width: 83%;
}
`
export const Header_text = styled.h2 `
display: flex;
flex-direction: column;
align-items: flex-start;
color: #0e90db;
font-size: 53px;
font-weight: 700;
letter-spacing: -2px;

@media only  screen and (max-width: 800px){
    font-size: 39px;
    font-weight: 600;
}    
`
export const Span_text1 = styled.span `

`
export const Paragragh_text = styled.p `
text-align: left;
width: 62%;
    
@media only  screen and (max-width: 800px){
    width: 100%;
} 
`
export const P_span_text1 = styled.span `
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;

    span{ 
        font-size: 12px;
        position: absolute;
    }

    @media only  screen and (max-width: 800px){
    } 
`




export const Img_con = styled.div `
height: 893px;
width: 1341px;

img{
    height:100% ;
    width: 100% ;
    object-fit: cover; 
}

@media only  screen and (max-width: 800px){
    width: 451px;
    height: 248px;
} 
`

