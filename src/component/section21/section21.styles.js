import styled from 'styled-components'

export const  Container= styled.div `
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

@media only  screen and (max-width: 800px){
    padding: 20px 0;
}
`




export const  Content= styled.div `
margin: 25px;
border-radius: 28px;
overflow: hidden ;


@media only  screen and (max-width: 385px){
    border-radius: unset;

}
@media only  screen and (max-width: 800px){
    max-width: 372px;
    margin: 0 auto;
}
`

export const  Img= styled.div `
height: 701px;
width: 100%;
background-size: cover;
background-position: center;


@media only  screen and (max-width: 800px){
    height: 650px;
}
`

export const  Box= styled.div `
display: flex;
padding: 128px 0 0;

@media only  screen and (max-width: 800px){
    padding: 50px 0 0;
    flex-direction: column;
}
`

export const  Left= styled.div `
width: 50%;

@media only  screen and (max-width: 800px){
    width: 100%;
}
`

export const  Header= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
width: 60%;
margin: 0 auto;


@media only  screen and (max-width: 800px){
    width: 92%;
    text-align: center;
}
`

export const  H3= styled.h3 `
font-size: 40px;
font-weight: 600;
line-height: 1;
text-align: left;
letter-spacing: -1px;
margin: 0;

@media only  screen and (max-width: 800px){
    font-size: 35px;
    text-align: center;
}
`

export const  Psvg= styled.p `
font-size: 18px;
font-weight: 500;
line-height: 1.3;
display: flex;
justify-content: center;
align-items: center;
align-self: flex-start;

@media only  screen and (max-width: 800px){
    align-self: center;
}
`

export const  Svg= styled.div `
height: 15px;
width: 19px;
margin-left: 10px;
background-size: cover;
background-position: center;

@media only  screen and (max-width: 800px){
    
}
`

export const  Right= styled.div `
width: 50%;

@media only  screen and (max-width: 800px){
    width: 90%;
    margin: 25px auto;
}
`

export const Grid = styled.div `
display: grid;
grid-template-columns: repeat(2, 150px);
grid-template-rows: repeat(8, 1fr);
grid-gap: 37px;

@media only  screen and (max-width: 800px){
    grid-template-columns: repeat(2,128px);
    grid-gap: 20px;
    justify-content: center;
}
`

export const  TextContainer= styled.div `
text-align: left;
color: #fff;
display: flex;
flex-direction: column;


@media only  screen and (max-width: 800px){
    
}
`

export const  H= styled.h3 `
font-size: 20px;
font-weight: 600;
margin: 3px;
`

export const  P= styled.p `
font-size: 18px;
font-weight: 500;
line-height: 1.3;
margin: 1px;
display: flex;
justify-content: center;
align-items: center;
align-self: flex-start;


@media only  screen and (max-width: 800px){
    
}
`


