import styled from 'styled-components'

export const  Container= styled.div `
display: flex;
justify-flex: center;
alilgn-items: center;
padding: 15px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    @media only  screen and (max-width: 800px){
    padding: unset;
    flex-direction: column;
    }
`

export const  Left_box= styled.div `
background-color: #fff;
flex: 50%;
padding: 15px;
margin: 10px;
height: 56rem;
border-radius: 28px;
position: relative;


@media only screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    width: 100%;
    flex: unset;
    padding: unset;
    max-width: 372px;
    margin: 20px auto;
    height: 30rem;
    
}
`
export const  Text= styled.p `
position: absolute;
left: 28px;
text-align: left;
font-style: normal;
font-weight: 500;

@media only  screen and (max-width: 800px){
width: 90%;
margin: 30px auto 0;
}
`

export const  P1= styled.p `
font-size: 10px;
color: brown;
`

export const  P2= styled.p `
font-size: 18px;
color: #0e90db;;
`

export const  P3= styled.p `
font-size: 17px;
color:rgb(29,29,31);
width: 61%;

@media only  screen and (max-width: 800px){
width: unset;
`

export const  Img= styled.div `

`
export const  Right_box= styled.div `
    background: linear-gradient(150deg, #359cd7 10%, #7d6efb 100%);
    flex: 50%;
    padding: 15px;
    margin: 10px;
    height: 56rem;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    position: relative;

    
@media only screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    width: 100%;
    flex: unset;
    padding: unset;
    max-width: 372px;
    margin: 0 auto;
    height: 30rem;
    
}
`
export const  Up_p= styled.p `
font-size: 18px;
color: #fff;
font-weight: 600;
position: absolute;
left: 28px;
top: 25px
`
export const  Down_p= styled.h3 `
font-size: 54px;
color: #fff;
font-weight: 600;
line-height: 1.3;
text-align: left;
width: 71%;
position: absolute;
top: 13%;
left: 13%;

@media only  screen and (max-width: 800px){
    font-size: 31px;
}

`


