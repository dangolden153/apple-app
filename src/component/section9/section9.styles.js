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
flex: 1;
margin: 10px;
margin-right: 31px;
border-radius: 36px;
background: #fff;
padding: 15px 15px 84px 15px;

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


export const Text_left = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0 auto;
    text-align: left;
    }

`

export const Text = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 63%;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0 auto;
    text-align: left;
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
width: 89%;
margin: 0;

@media only  screen and (max-width: 800px){
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
`

export const Img = styled.div `
width: 1061px;
height: 716px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 46px;
    border-radius: 0 0 36px;

    @media only  screen and (max-width: 800px){
        width: 336px;
        height: 232px;
        transform: translateX(32px);
        background-repeat: no-repeat;

        }
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
    max-width: 372px;
    width: 100%;
    margin: 20px auto;
    padding: unset;
    }

`
export const Text_img = styled.div `
padding-left: 20px;
padding-top: 15px;
position: relative;

@media only  screen and (max-width: 800px){
padding-left: unset;
}
`


export const Left_img = styled.div `
height: 30rem;
width: 30rem;
background-size: cover;
background-position: center;
margin: 0 auto;
margin-top: 35%;

video{
    @media only  screen and (max-width: 800px){
        width: 271px;
        }
}

`