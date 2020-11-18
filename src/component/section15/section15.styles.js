import styled from 'styled-components'

export const Container = styled.section `

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
`

export const Box = styled.div `
display: flex;
justify-content: center;
align-items: flex-start;
position: relative;
border-radius: 36px;
    margin: 33px;
    background: #fff;
    overflow: hidden;


    @media only  screen and (max-width: 385px){
        border-radius: unset;
    }

    @media only  screen and (max-width: 800px){
        display: grid;
        max-width: 372px;
        margin: 0 auto;
    }
`
export const Left_section = styled.div `
width: 44%;
z-index: 5;
position: relative;

@media only  screen and (max-width: 800px){
    grid-row: 1/2;
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
}
`


export const Text_left = styled.div `
text-align: left;
position: absolute;
top: 34px;
left: 57px;

@media only  screen and (max-width: 800px){
    position: unset;
    width: 75%;
    margin: 38px auto 0px;
}
`

export const Text = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 59.6%;%;

@media only  screen and (max-width: 800px){
}
`

export const Header2 = styled.h3 `
font-size: 20px;
font-weight: 600;
color: #0b9e43;
font-family: inherit;
margin-left: 20px;
display : none;

@media only  screen and (max-width: 800px){
    display: block;
    margin-left: unset;
`
export const Header = styled.h3 `
font-size: 20px;
font-weight: 600;
color: #0b9e43;
font-family: inherit;
margin-left: 20px;

@media only  screen and (max-width: 800px){
    display : none;

}
`

export const P_left = styled.h2`
font-size: 48px;
font-weight: 600;
line-height: 1;
color: rgb(29,29,31);
text-align: left;
width: 93%;
margin: 0;
padding-top: 67px;
letter-spacing: -1px;
span{
    font-size: 22px;
    font-weight: 700;
    position: absolute;    
}

@media only  screen and (max-width: 800px){
    width: 100%;
    font-size: 18px;
    line-height: 1.2;
    position: unset;
    padding: unset;
}
`


export const Left_img = styled.div `
height: 25rem;
width: 21rem;
background-size: cover;
background-position: center;
margin: 0 auto;
margin-top: 62px;
`
export const Right_section = styled.div `
width: 56%


@media only  screen and (max-width: 800px){
    
    width: 100%;
    max-width: 372px;
    margin: 0 auto;
    background: #fff;

}
`
export const Text_img = styled.div `
padding-top: 15px;
position: relative;
text-align: left;


@media only  screen and (max-width: 800px){
    padding-top: 64px;
}
`
export const Img = styled.div `
width: 752px;
height: 720px;
background-size: 752px 720px;
background-position: center;
border-radius: 0 0 36px;
position: relative;
background-repeat: no-repeat;
transform: translateX(-34px);


@media only  screen and (max-width: 800px){
    width: 429px;
    height: 337px;
    background-size: contain;
    transform: translateX(-58px);
}
`
