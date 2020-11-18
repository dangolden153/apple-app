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
padding: 80px 0;
position: relative;



@media only  screen and (max-width: 800px){
    width: 100%;
    max-width: 372px;
    margin: 0 auto;
    display: grid;
}
`
export const Left_section = styled.div `
flex: 1;
margin: 10px;
margin-right: 31px;
border-radius: 36px;
background: #fff;
padding: 15px 15px 84px 15px;
height: 43rem;

@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    grid-row: 1/2;
    width: 100%;
    flex: unset;
    margin: 0;
    padding: unset;
    height: 30rem;
}
`


export const Text_left = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

@media only  screen and (max-width: 800px){
width: 84%;
margin: 0 auto;
}
`

export const Text = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 63%;
position: relative;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0 auto;
}
}
`
export const Header = styled.h3 `
font-size: 20px;
font-weight: 600;
color: #0b9e43;
font-family: inherit;
`
export const P_div = styled.p `
position: absolute;
top: 35%;

@media only  screen and (max-width: 800px){
    position: unset;
    width: 100%;
}
`
export const P_left = styled.p `
font-size: 53px;
font-weight: 600;
line-height: 1.3;
color: rgb(29, 29, 31);
display: flex;
justify-content: center;
align-items: flex-start;
text-align: left;
width: 79%;
margin: 0;
@media only  screen and (max-width: 800px){
    font-size: 46px;
     width: 100%;

}
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

@media only  screen and (max-width: 800px){
}
`

export const Left_img = styled.div `
height: 25rem;
width: 21rem;
background-size: cover;
background-position: center;
margin: 0 auto;
margin-top: 35%;
`
export const Right_section = styled.div `
width: 64%;
margin: 10px;
margin-left: 33px;
border-radius: 36px;
background: #fff;
overflow: hidden;

@media only  screen and (max-width: 385px){
    border-radius: unset;
}
@media only  screen and (max-width: 800px){
    width: 100%;
    flex: unset;
    margin: 0;
    padding: unset;
    height: 34rem;
    margin-top: 30px;
}
`
export const Text_img = styled.div `
padding-top: 15px;
position: relative;
`




export const Img = styled.div `
width: 928px;
height: 629px;
transform: translateX(-64px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 46px;
    border-radius: 0 0 36px;

    @media only  screen and (max-width: 800px){
    width: 439px;
    height: 443px;
    background-size: contain;
    z-index: 500;
    margin-top: -45px;
    }
`
