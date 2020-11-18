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
    flex-direction: column;
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

@media only  screen and (max-width: 385px){
    border-radius: unset;

}

@media only  screen and (max-width: 800px){
    max-width: 372px;
    width: 100%;
    margin: 0 auto;
    flex: unset;
    height: 35rem;
    }
`
export const  Text= styled.p `
position: absolute;
left: 28px;
text-align: left;
font-style: normal;
font-weight: 500;

@media only  screen and (max-width: 800px){
}
`

export const  Vid= styled.div `
height: 100%;
width: 100%;



    video{
        width: 100%;
        height: 100%;
        transform: scale(1.1);

        @media only  screen and (max-width: 800px){
            transform: scale(1.6);
        }
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


    @media only  screen and (max-width: 385px){
        border-radius: unset;

    }
    @media only  screen and (max-width: 800px){
        max-width: 372px;
        width: 100%;
        width: 100%;
        flex: unset;
        margin: 30px auto;
        height: 35rem;
    }

`
export const  PBox= styled.div `

@media only  screen and (max-width: 800px){
width: 83%;
position: unset;
margin: 20px auto;
}
`

export const  Up_p= styled.h2 `
font-size: 18px;
color: #0b9e43;
font-weight: 600;
position: absolute;
left: 28px;
top: 25px


`
export const  Down_p= styled.h3 `
font-size: 19px;
color:rgb(29,29,31);
font-weight: 500;
line-height: 1.3;
text-align: left;
width: 71%;
position: absolute;
top: 71px;
left: 26px;


@media only  screen and (max-width: 800px){
    width: 100%;
    position: unset;
    margin-top: 48px;
}
`


export const  Img= styled.div `
width: 626px;
height: 601px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 25%;
    left: 35px;

    @media only  screen and (max-width: 800px){
        width: 386px;
        height: 358px;
        left: 0px;
        top: 36%;   
    }
`