import styled from 'styled-components'

export const  Container= styled.div `
display: flex;
justify-flex: center;
alilgn-items: center;
padding: 15px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    overflow: hidden;

    @media only  screen and (max-width: 800px){
        padding: unset;
        margin: unset;
    }
`

export const  Left_box= styled.div `
background-color: #fff;
flex: 50%;
margin: 10px;
height: 50rem;
border-radius: 28px;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10%;


@media only  screen and (max-width: 385px){
    border-radius: unset;

}
@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
    height: 33rem;
}
`



export const  Right_box= styled.div `
    background: #fff;
    flex: 50%;
    margin: 10px;
    height: 50rem;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    align-items: center;
    padding-top: 10%;
`
export const  Text= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 69%;
margin: 0 auto;

@media only  screen and (max-width: 800px){
    width: 95%;
    margin: 0 auto;
}
`
export const  Up_h= styled.h3 `
font-size: 49px;
font-weight: 600;
line-height: 1.3;
color: rgb(29,29,31);
margin-bottom: 15px;

@media only  screen and (max-width: 800px){
    font-size: 44px;
}
`

export const  Up_header= styled.h3 `
font-size: 49px;
font-weight: 600;
line-height: 1.3;
color: rgb(29,29,31);
margin-bottom: 15px;
width: 80%;


@media only  screen and (max-width: 800px){
}
`


export const  Down_a= styled.a `
text-decouration: none;
font-size: 18px;
font-weight: 500;
line-height: 1.3;
color: #0e90db;
display: flex;
justify-content: center;
align-items: center;

@media only  screen and (max-width: 800px){
}
`
export const  Svg= styled.div `
width: 20px;
height: 20px;
background-size: cover;
background-position: center;
margin-left: 10px;
`
export const  Img= styled.div `
width: 150px;
height: 150px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  
`