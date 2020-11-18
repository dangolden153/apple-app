import styled from 'styled-components'

export const Container = styled.section `
display: flex;
justify-content: center;
align-items: flex-start;
padding: 80px 0 0 40px;
position: relative;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    border-radius: 36px;
    margin: 33px;
    overflow: hidden;
    background: #fff;

   

    @media only  screen and (max-width: 800px){
        flex-direction: column;
        padding: 30px 0;
        background: unset;
        margin: unset;
        }
`
export const Left_section = styled.div `
width: 60%;
z-index: 5;
position: relative;
border-radius: 36px 36px 0 0;


@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    height: 18rem;
    }
`


export const Text_left = styled.div `
text-align: left;
position: absolute;
top: -31px;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0 auto;
    position: unset;
    }
`

export const Text = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 59.6%;%;
`
export const Header = styled.h3 `
font-size: 20px;
font-weight: 600;
color: #0e90db;
font-family: inherit;
`

export const P_left = styled.h2`
    font-size: 69px;
font-weight: 600;
line-height: 1;
color: rgb(29,29,31);
text-align: left;
width: 63%;
margin: 0;
padding-top: 67px;


@media only  screen and (max-width: 800px){
width: unset;
font-size: 18px;
padding-top: 10px;
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
width: 40%;
background: #fff;
overflow: hidden;
border-radius: 0 0 36px 36px;


@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    height: 21.1rem;
    }
`
export const Text_img = styled.div `
padding-left: 20px;
padding-top: 15px;
position: relative;

@media only  screen and (max-width: 800px){
    padding-left: unset;
    overflow: hidden;
    padding-top: unset;
}
`
export const Img = styled.div `

background-size: cover;
width: 977px;
height: 751px;

float: right;
background-position: center;
border-radius: 0 0 36px;
position: relative;
left: 85px;

@media only  screen and (max-width: 800px){
    background-size: cover;
    width: 434px;
    height: 338px;
    left: 99px;
    }
`
