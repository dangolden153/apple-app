import styled from 'styled-components'

export const  Container= styled.section `
padding: 98px 33px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    @media only  screen and (max-width: 800px){
        padding: 30px 0;
        }
`

export const  Text_img= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
border-radius:  36px ;

@media only  screen and (max-width: 800px){
max-width: 372px;
margin: 0 auto;
background: #fff;
}
`

export const  Text= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100%;
padding: 10px 0 50px ;
background-color: #fff;
border-radius: 36px 36px  0 0;
text-align: left;
`
export const  Header= styled.h3 `
font-size: 21px;
font-weight: 700;
color: #0e90db;
margin-bottom: 20px;
margin-left: 45px;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 20px auto;
    }
`
export const  P= styled.p `
font-size: 18px;
font-weight: 500;
line-height: 1.3;
color: rgb(29, 29, 31);
margin: 3px 45px;
width: 56%;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 0 auto;
}
`

export const  Img= styled.div `
height: 43rem;
width: 82rem;
display: block;
overflow: hidden;
background-size: cover;
background-position: center;
margin: 0 auto;
background-repeat: no-repeat;

@media only  screen and (max-width: 800px){
    height: 175px;
    width: 319px;
    border-radius: unset ;

}
`