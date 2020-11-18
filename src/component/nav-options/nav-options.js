import styled from 'styled-components'



export const  Container= styled.div `
font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
 background: #000;;
 text-style: none;
display: flex;
flex-direction: column;
align-items: center;
juastify-content: center;
width: 90%;
height: 100%;
margin: 0 auto;
`

export const  Ul= styled.ul `
text-style: none;
display: flex;
flex-direction: column;
align-items: start;
juastify-content: center;
width: 85%;
list-style: none;
margin: 0 auto;
`

export const  Li= styled.li `
font-size: 17px;
font-weight: 500;
color: white;
padding: 13px;


&:not(:first-child){
    &::after{
        content: '';
        width: 100%;;
        height: 1px;
        background-color: white;
    }
}
`
export const  SearchBox= styled.div `
height: 39px;
width: 88%;
background: grey;
display: flex;
justify-content: start;
align-items: center;
border-radius: 10px;
margin-top: 13px;
`


export const  P= styled.p `
font-size: 17px;
font-weight: 500;
color: #6e6e73;
`

export const Svg = styled.div `
height: 17px;
width: 18px;
padding-left: 10px;
padding-right: 10px;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
`