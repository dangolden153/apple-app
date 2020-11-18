import styled from 'styled-components'

export const  Container=styled.div `
font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue', sans-serif;


@media only  screen and (max-width: 800px){
    padding-top: 30px;
}
`

export const  Fullcontainer=styled.div `
display: flex;
flex-direction: column;
padding: 0 0 0 150px;
position: relative;

@media only  screen and (max-width: 800px){
    padding: unset;
    width: 100%;
    margin: 0 auto;
    max-width: 372px;
}
`
export const  UpContainer=styled.div `


@media only  screen and (max-width: 800px){
}
`
export const  Box=styled.div `
display: flex;
flex-direction: column;
width: 85%;
text-align: left;

@media only  screen and (max-width: 800px){
    margin: 0 auto;
}
`

export const  P=styled.div `
font-size: 13px;
line-height: 1.4;
color: rgb(154, 160, 166);
padding: 8px 0;

@media only  screen and (max-width: 800px){
}
`

export const  Line=styled.div `
background-color: rgb(154, 160, 166);
height: 1px;
width: 85%;
margin: 30px 0;


@media only  screen and (max-width: 800px){
margin: 19px auto;
}
`

export const  DownContainer=styled.div `
width: 78%;

@media only  screen and (max-width: 800px){
    width: 100%;
    margin: 0 auto;
    max-width: 372px;
}
`

export const  AppleCon=styled.div `
display: flex;
justify-content: space-between;
align-items: center;
width: 24%;

@media only  screen and (max-width: 800px){
width: 85%;
margin: 0 auto;
}
`

export const  AppleBox=styled.div `
display: flex;
justify-content: center;
align-items: center;
`

export const  AppleSvg=styled.div `
height: 20px;
width: 20px;
background-size: cover;
background-position: center;
`

export const  Svg=styled.div `
height: 15px;
width: 17px;
background-size: cover;
background-position: center;
margin-left: 7px;

`


export const  GP=styled.div `
font-size: 14px;
font-weight: 500;
line-height: 1.4;
color: rgb(29,29,31);
width: 100%;
margin:0 auto 10px;
position: relative;
top: -17px;
left: 42%;
transform: translate(-50%, -0);
span {
font-size: 13px;
line-height: 1.4;
color: rgb(154, 160, 166);
}
`

