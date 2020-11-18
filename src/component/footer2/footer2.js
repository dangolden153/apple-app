import styled from 'styled-components'


export const  Content=styled.div `
display: flex;
justify-content: space-between;
align-items: self-start;

@media only  screen and (max-width: 800px){
flex-direction: column;
max-width: 372px;
margin: 0 auto;
}
`

export const  RowDisplay=styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
text-align: left;

@media only  screen and (max-width: 800px){
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between; 
    }
`

export const  ColumsDisplay=styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
text-align: left;

@media only  screen and (max-width: 800px){
    flex-direction: row;
    width: 85%;
    margin: 10px auto;
    justify-content: space-between; 
    }
`
export const  Svg=styled.div `

`
export const  Text=styled.div `
padding-top: 20px;
`

export const  P=styled.div `
font-size: 13px;
line-height: 1.4;
color: rgb(154, 160, 166);
padding: 8px 0;

@media only  screen and (max-width: 800px){
}
`

export const  Header=styled.div `
font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: rgb(29,29,31);
`


