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

@media only screen and (max-width: 800px){
    padding: unset;
}
`
export const Section1_text = styled.div `
width: 76%;
margin: 30px auto;
text-align: left;

@media only screen and (max-width: 800px){
    text-align: left;
    max-width: 372px;
    width: 89%;
    
}
`
export const Header_text = styled.h2 `
display: flex;
flex-direction: column;
align-items: flex-start;
color: #0e90db;
font-size: 42px;
font-weight: 800;

@media screen and (max-width: 800px){
    font-size: 36px;
}
`

export const Paragragh_text = styled.p `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;

    @media screen and (max-width: 800px){
        font-size: 19px;
    }
    `





export const Img_con = styled.div `
height: 50rem;
width: 62rem;


img{
    height:100% ;
    width: 100% ;
    object-fit: cover; 
}

@media screen and (max-width: 800px){
    height: 233px;
    width: 289px;
}
`

