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
        flex-direction: column;
        padding: unset;
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
overflow: hidden;

@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
width: 100%;
max-width: 372px;
margin: 0 auto;
flex: unset;
padding: unset;
height: 41rem;
margin-bottom: 30px;

}
`
export const  Text= styled.div `
position: absolute;
left: 28px;
text-align: left;
font-style: normal;
font-weight: 500;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0 auto;
    text-align: left;
    position: unset;
}
`

export const  P1= styled.p `
font-size: 18px;
color: #e94256;`

export const  P2= styled.p `
font-size: 18px;
color: #0e90db;;
`

export const  P3= styled.p `
font-size: 18px;
color:rgb(29,29,31);
width: 61%;

@media only  screen and (max-width: 800px){
    width: 100%;
}
`

export const  ImgBox= styled.div `
position: relative;
top: 27%;

@media only  screen and (max-width: 800px){
    top: -8px;
}
`

export const  Img1= styled.div `
width: 100px;
height: 148px;
background-size: cover;
background-position: center;
position: absolute;
top: 182px;
left: 43%;

@media only  screen and (max-width: 800px){
    width: 90px;
    height: 131px;
    left: 40%;
}

`
export const  Img2= styled.div `
width: 100px;
height: 148px;
background-size: cover;
background-position: center;
position: absolute;
top: 41px;
right: 90px;

@media only  screen and (max-width: 800px){
    width: 70px;
    height: 100px;
    right: 47px;
}
`
export const  Img3= styled.div `
width: 117px;
height: 167px;
background-size: cover;
background-position: center;
position: absolute;
top: -3px;
left: 137px;

@media only  screen and (max-width: 800px){
    width: 77px;
    height: 113px;
    top: 17px;
    left: 80px;
}
`
export const  Img4= styled.div `
width: 117px;
height: 148px;
background-size: cover;
background-position: center;
position: absolute;
top: 183px;
left: 30px;

@media only  screen and (max-width: 800px){
    width: 77px;
    height: 91px;
    top: 224px;
}
`
export const  Img5= styled.div `
width: 123px;
height: 128px;
background-size: cover;
background-position: center;
position: absolute;
top: 367px;
left: 121px;

@media only  screen and (max-width: 800px){
    width: 95px;
    height: 98px;
    left: 227px;
    top: 353px;
}
`
export const  Img6= styled.div `
width: 120px;
height: 148px;
background-size: cover;
background-position: center;
position: absolute;
top: 268px;
right: 20px;

@media only  screen and (max-width: 800px){
    width: 86px;
    height: 106px;
    top: 170px;
    right: 9px;
}
`
export const  Img7= styled.div `
width: 137px;
height: 148px;
background-size: cover;
background-position: center;
position: absolute;
top: 450px;
right: 141px;

@media only  screen and (max-width: 800px){
    width: 107px;
    height: 117px;
    left: 67px;
    top: 367px;
}
`
export const  Right_box= styled.div `
background: linear-gradient(135deg, rgb(241, 96, 138) 10%, rgb(170, 104, 210) 100%);
    flex: 50%;
    padding: 15px;
    margin: 10px;
    height: 56rem;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    position: relative;

    @media only  screen and (max-width: 385px){
        border-radius: unset;
    }

    @media only  screen and (max-width: 800px){
            width: 100%;
            max-width: 372px;
            margin: 0 auto;
            flex: unset;
            padding: unset;
            height: 41rem;
            
            
    }
`

export const  Up_p= styled.p `
font-size: 18px;
color: #fff;
font-weight: 600;
position: absolute;
left: 28px;
top: 25px

@media only  screen and (max-width: 800px){
}
`
export const  Down_p= styled.h3 `
font-size: 54px;
color: #fff;
font-weight: 600;
line-height: 1.3;
text-align: left;
width: 58%;
position: absolute;
top: 24%;
left: 13%;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 106px auto 0;
    position: unset;
}
`


