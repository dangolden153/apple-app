import styled from 'styled-components'
// import {Link} from 'react-router-dom'
 

export const Section_1 = styled.div `
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
background: #fff;

@media only  screen and (max-width: 800px){
    background: unset;

}
`

export const Text_img = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px 40px;

@media only  screen and (max-width: 800px){
    padding: unset;
    width: 100%;
    margin: 0 auto;
    max-width: 372px;
    background: #fff;
}
    `
    
export const Section1_text = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 76%;
margin: 30px auto;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0;
} 
`
export const Header_text = styled.h2 `
display: flex;
flex-direction: column;
align-items:center;
    
`
export const Span_text1 = styled.span `
color: rgb(29,29,31);
font-size: 53px;
font-weight: 700;
letter-spacing: -2px;
padding-bottom: 77px;

@media only  screen and (max-width: 800px){
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 32px;
} 
`
export const Paragragh_text = styled.p `
text-align: left;
width: 62%;
    

@media only  screen and (max-width: 800px){
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
height: 590px;
width: 1018px;

img{
    height:100% ;
    width: 100% ;
    object-fit: cover; 
}

@media only  screen and (max-width: 800px){
    height: 179px;
    width: 318px;
} 
`

