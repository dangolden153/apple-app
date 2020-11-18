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
    background: #fff;
    overflow: hidden;

  

    @media only  screen and (max-width: 800px){
    padding: unset;
    margin: unset;
    flex-direction: column;
    background: unset;
    padding-top: 30px;
    border-radius:unset;

    }
`
export const Left_section = styled.div `
width: 60%;
z-index: 5;
position: relative;
border-radius: 36px 36px 0 0;


@media only  screen and (max-width: 385px){
    border-radius:unset;

}

@media only  screen and (max-width: 800px){
    width: 100%;
    max-width: 372px;
    margin: 0 auto;
    background: #fff;

}

`


export const Text_left = styled.div `
text-align: left;
position: absolute;
top: -43px;

@media only  screen and (max-width: 800px){
    width: 83%;
    position: unset;
    margin: 0 auto;
    padding-bottom: 30px;
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
color: #e94256;
font-family: inherit;
`

export const P_left = styled.h2`
font-size: 56px;
font-weight: 600;
line-height: 1;
color: rgb(29,29,31);
text-align: left;
width: 60%;
margin: 0;
padding-top: 67px;
letter-spacing: -1px;


@media only  screen and (max-width: 800px){
    width: 100%;
    padding-top: unset;
    font-size: 18px;
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
border-radius: 0 0  36px 36px;


@media only  screen and (max-width: 385px){
    border-radius:unset;

}

@media only  screen and (max-width: 800px){
    width: 100%;
    max-width: 372px;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
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
export const Img = styled.div `
width: 815px;
height: 573px;
float: right;
background-size: 820px 574px;
background-position: center;
position: relative;
left: 85px;
background-repeat: no-repeat;

@media only  screen and (max-width: 800px){
height: 344px;
width: 607px;
background-size: contain;
left: 160px;

}
`
