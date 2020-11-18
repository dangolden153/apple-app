import styled from 'styled-components'


export const Section=styled.section `
background: #fff;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding: 140px 0;

    @media only  screen and (max-width: 800px){
        padding: unset;
        background: unset;

    }
`

export const Box=styled.div `
@media only  screen and (max-width: 800px){
max-width: 372px;
    margin: 0 auto;
    background: #fff;
}
`
export const Container=styled.div `
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;

@media only  screen and (max-width: 800px){
    max-width: 372px;
    margin: 0 auto;
    background: #fff;

}
`

export const DisplayGrid=styled.div `
display: grid;
grid-template-rows: repeat(3, 1fr);
grid-template-columns: repeat(2, 445px);


@media only  screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    padding-top: 31px;
}
`

export const ImgText=styled.div `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: start;

@media only  screen and (max-width: 800px){
    width: 83%;
    margin: 20px auto;
}
`

export const Img=styled.div `
width: 89px;
    height: 89px;
    background-size: 89px 89px;
    background-repeat: no-repeat;

   
`

export const Text=styled.div `
text-align: left;
width: 79%;


@media only  screen and (max-width: 800px){
    width: 100%;
}
`

export const Heading=styled.h3 `
font-size: 20px;
font-weight: 600;
color: rgb(29,29,31);


@media only  screen and (max-width: 800px){
    margin-bottom: 0;
}
`

export const P=styled.p `
font-size: 18px;
font-weight: 400;
line-height: 1.3;
color: rgb(29,29,31);

@media only  screen and (max-width: 800px){
    margin-top: 5px;
}
`

export const  Header= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only  screen and (max-width: 800px){
    width: 93%;
    margin: 0 auto;
}
`

export const  H3= styled.h3 `
font-size: 40px;
font-weight: 600;
line-height: 1;
color: rgb(29,29,31);
text-align: left;
letter-spacing: -1px;
margin: 0;
padding-top: 100px;


@media only  screen and (max-width: 800px){
    width: 100%;
    font-size: 33px;
    padding-top: 0;
    text-align: center;

}
`

export const HeaderP= styled.p `
font-size: 20px;
font-weight: 500;
line-height: 1.4;
color: #0e90db;
display: flex;
justify-content: center;
align-items: center;
`

export const  Svg= styled.div `
height: 20px;
width: 20px;
margin-left: 10px;
background-size: cover;
background-position: center;
`
