
import styled from 'styled-components'

export const Container = styled.section `
display: flex;
justify-content: center;
align-items: flex-start;
padding: 80px 0;
position: relative;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    @media only  screen and (max-width: 800px){
       flex-direction: column;
        }
`
export const Left_section = styled.div `
width: 25%;
margin:10px ;
margin-left: 31px;
border-radius: 36px;
background: #fff;
padding: 15px 15px 223px 15px;
overflow: hidden;

@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
    padding:unset;
    margin-bottom: 20px;
    }
`


export const Text_left = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;


@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 83%;
    margin: 0 auto;
    padding:unset;
    }

`


export const Header = styled.h3 `
font-size: 20px;
font-weight: 600;
color: #0e90db;
font-family: inherit;
`

export const P_left = styled.p `
font-size: 18px;
font-weight: 500;
line-height: 1.3;
color: rgb(29, 29, 31);
display: flex;
justify-content: center;
align-items: flex-start;
text-align: left;
width: 96%;
margin: 0;



`

export const P = styled.p `
font-size: 18px;
font-weight: 500;
line-height: 1.3;
color: rgb(29, 29, 31);
display: flex;
justify-content: center;
align-items: flex-start;
text-align: left;
margin: 0;
`

export const Left_img = styled.div `
height: 25rem;
width: 21rem;
background-size: cover;
background-position: center;
margin: 0 auto;
margin-top: 100px;
position: relative;

video{
    position: absolute;
    top: -57px;
    left: -28px;

    @media only  screen and (max-width: 800px){
        left: -51px;

    }
}
`
export const Right_section = styled.div `
flex: 1;
margin: 10px;
margin-right: 33px;
border-radius: 36px;
background: #fff;
overflow: hidden;

@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
    padding:unset;
    }
`
export const Text_img = styled.div `
padding-left: 20px;
padding-top: 15px;
position: relative;
padding-bottom: 85px;

@media only  screen and (max-width: 800px){
padding-left: unset;
padding-bottom: 30px;
}
`

export const Text = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 74%;

@media only  screen and (max-width: 800px){
width: 83%;
margin: 0 auto;
}
`

export const Img = styled.div `
transform: translateX(19px);
    width: 820px;
    height: 574px;
    background-size: 820px 574px;
background-position: center;
margin-top: 64px;
border-radius: 0 0 36px;

@media only  screen and (max-width: 800px){
width: 292px;
height: 175px;
background-size:cover;

border-radius:unset;
}
`
