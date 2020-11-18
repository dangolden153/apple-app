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
        padding: 15px 0;
        }
`

export const  Left_box= styled.div `
background: linear-gradient(150deg, #359cd7 10%, #7d6efb 100%);
flex: 50%;
padding: 15px;
margin: 10px;
height: 48rem;
border-radius: 28px;
position: relative;

@media only  screen and (max-width: 385px){
    border-radius: unset;
}

@media only  screen and (max-width: 800px){
    margin: 0 auto;
    padding: unset;
    max-width: 372px;
    flex: unset;
    height: 38rem;
    }
`
export const  Text= styled.div `
position: absolute;
left: 28px;
text-align: left;
font-family : inherit;
font-style: normal;
color: #fff;
top: 29px;

@media only  screen and (max-width: 800px){
    
}
`

export const  P1= styled.p `
font-size: 18px;
font-weight: 600;

`

export const  P2= styled.p `
font-size: 18px;
`

export const  P3= styled.p `
font-size: 18px;
`
export const  H2= styled.h1 `
font-size: 73px;
color: #fff;
padding-top: 20px;

@media only  screen and (max-width: 800px){
    font-size: 50px;
    }
`
export const  P4= styled.h1 `
font-size: 23px;
color: #fff;
font-weight: 600;
line-height: 1.3;
width: 45%;
margin: -40px auto;
position: relative;


span{
font-size: 12px;
position: absolute;
}

@media only  screen and (max-width: 800px){
font-size: 20px;
width: 80%;
margin: 0 auto;
padding-bottom: 20px;
}
`
export const Img= styled.div `
height: 170px;
width: 98px;
background-position: center;
background-size: cover;
margin: 40% auto 0;

@media only  screen and (max-width: 800px){
    height: 121px;
    width: 67px;
    margin: 56% auto 0;
    }

`

export const  Right_box= styled.div `
    background-color: #fff;
    flex: 50%;
    padding: 15px;
    margin: 10px;
    height: 48rem;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    position: relative;

    @media only  screen and (max-width: 385px){
        border-radius: unset;
    }
    @media only  screen and (max-width: 800px){
        padding: 0;
        margin: 20px auto;
        max-width: 372px;
        height: 38rem;
        flex: unset;
        }
`
export const  Up_p= styled.p `
font-size: 18px;
font-weight: 600;
position: absolute;
top: 29px;
left: 28px;
color: #0e90db;

@media only  screen and (max-width: 800px){
   
    }
`
export const  Down_p= styled.p `
font-size: 18px;
color:rgb(29,29,31);
font-weight: 500;
line-height: 1.2;
width: 73%;
position: absolute;
left: 28px;
top: 63px;
text-align: left;

@media only  screen and (max-width: 800px){
    margin: 20px auto;
    width: 83%;
    }

`
export const Text_img_container= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
top: 33%;

@media only  screen and (max-width: 800px){
    top: 29%;
    }
`

export const  Text_img= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 30px;
`
export const  Text_img_down= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media only  screen and (max-width: 800px){
    
    }
`



export const Img_right= styled.div `
height: 114px;
width: 112px;
background-position: center;
background-size: cover;
`


export const   Img_right_battery= styled.div `
height: 68px;
width: 143px;
background-position: center;
background-size: cover;

`


export const  Img_p= styled.p `
font-size: 23px;
color:rgb(29,29,31);
font-weight: 600;
line-height: 1.3;
width: 49%;

@media only  screen and (max-width: 800px){
    width: 91%;
    margin: 15px auto;
    }
`

export const  Img_p_down= styled.p `
font-size: 23px;
color:rgb(29,29,31);
font-weight: 600;
line-height: 1.3;
width: 45%;

@media only  screen and (max-width: 800px){
    width: 90%;
    margin: 15px auto;
    }
`


