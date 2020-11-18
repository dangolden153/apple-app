import React, {useState} from 'react'
import icon from '../pic/close.svg'

import {Content,ColumsDisplay,RowDisplay,Header,P,Svg} from './footer2'
import './footer2.css'


const Footer2= ()=>{
const [state, setState] = useState(false)
const [state1, setState1] = useState(false)
const [state2, setState2] = useState(false)
const [state3, setState3] = useState(false)
const [state4, setState4] = useState(false)
const [state5, setState5] = useState(false)
const [state6, setState6] = useState(false)
const [state7, setState7] = useState(false)
const [state8, setState8] = useState(false)
const [state9, setState9] = useState(false)
const [state10, setState10] = useState(false)
const [state11, setState11] = useState(false)
const [state12, setState12] = useState(false)


const toggle = ()=> {
    setState(!state);
}


const toggle1 = ()=> {
    setState1(!state1);
}
 
const toggle2 = ()=> {
    setState2(!state2);
}
 
const toggle3 = ()=> {
    setState3(!state3);
}
 
const toggle4 = ()=> {
    setState4(!state4);
}
 
const toggle5 = ()=> {
    setState5(!state5);
}
 
const toggle6 = ()=> {
    setState6(!state6);
}
 

const toggle7 = ()=> {
    setState7(!state7);
}

const toggle8 = ()=> {
    setState8(!state8);
}

const toggle9 = ()=> {
    setState9(!state9);
}

const toggle10 = ()=> {
    setState10(!state10);
}

const toggle11 = ()=> {
    setState11(!state11);
}

const toggle12 = ()=> {
    setState12(!state12);
}























return (

<Content>


<RowDisplay>
<ColumsDisplay>
 <div className= {state ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle}>Shop and Learn</div>
     <div className= 'P'>Mac</div>
     <div className= 'P'>iPad</div>
     <div className= 'P'>iPhone</div>
     <div className= 'P'>Watch</div>
     <div className= 'P'>TV</div>
     <div className= 'P'>Music</div>
     <div className= 'P'>AirPods</div> 
     <div className= 'P'>HomePOd</div>
     <div className= 'P'>Accessories</div>
     <div className= 'P'>Gift Cards</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state ? ' SvgActive' : 'Svg'}
onClick={toggle}/>

</ColumsDisplay>
</RowDisplay>








<RowDisplay>
<ColumsDisplay>

 <div className= {state7 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle7}>Services</div>
     <div className= 'P'>Apple Music</div>
     <div className= 'P'>Apple TV+</div>
     <div className= 'P'>Apple Fitness+</div>
     <div className= 'P'>Apple Acades</div>
     <div className= 'P'>iClouds</div>
     <div className= 'P'>Apple one</div>
     <div className= 'P'>Apple Card</div> 
     <div className= 'P'>Apple Books</div>
     <div className= 'P'>Apple Store</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state7 ? ' SvgActive' : 'Svg'}
onClick={toggle7}/>

</ColumsDisplay>

<ColumsDisplay>

 <div className= {state10 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle10}>For Business</div>
     <div className= 'P'>Apple and Business</div>
     <div className= 'P'>Shop for Business</div>
     <div className= 'P'>Genius Bar</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state10 ? ' SvgActive' : 'Svg'}
onClick={toggle10}/>

</ColumsDisplay>
</RowDisplay>


<RowDisplay>
<ColumsDisplay>

 <div className= {state8 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle8}>Account</div>
     <div className= 'P'>Manage your Apple ID</div>
     <div className= 'P'>Apple Store Account</div>
     <div className= 'P'>iCloud.com</div>
     <div className= 'P'>Apple Acades</div>
     <div className= 'P'>iClouds</div>
     <div className= 'P'>Apple one</div>
     <div className= 'P'>Apple Card</div> 
     <div className= 'P'>Apple Books</div>
     <div className= 'P'>Apple Store</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state8 ? ' SvgActive' : 'Svg'}
onClick={toggle8}/>

</ColumsDisplay>

<ColumsDisplay>
 <div className= {state5 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle5}>Apple Values</div>
     <div className= 'P'>Accessibility</div>
     <div className= 'P'>Education</div>
     <div className= 'P'>Inclusion and Diversity</div>
     <div className= 'P'>Privacy</div>
     <div className= 'P'>Supplier Responsibility</div>

 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state5 ? ' SvgActive' : 'Svg'}
onClick={toggle5}/>
</ColumsDisplay>
</RowDisplay>






 
<RowDisplay>
<ColumsDisplay>

 <div className= {state9 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle9}>Apple Store</div>
     <div className= 'P'>Find a Store</div>
     <div className= 'P'>Shop Online</div>
     <div className= 'P'>Genius Bar</div>
     <div className= 'P'>Today at Apple</div>
     <div className= 'P'>Apple Camp</div>
     <div className= 'P'>Apple Store App</div>
     <div className= 'P'>Refurbished and Clearance</div> 
     <div className= 'P'>Apple Trade In</div>
     <div className= 'P'>Orders Status</div>
     <div className= 'P'>Shopping Help</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state9 ? ' SvgActive' : 'Svg'}
onClick={toggle9}/>

</ColumsDisplay>
</RowDisplay>

 









 <RowDisplay>
 <ColumsDisplay>
 <div className= {state11 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle11}>For Education</div>
     <div className= 'P'>Apple and Education</div>
     <div className= 'P'>Shop for K-12</div>
     <div className= 'P'>Shop for college</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state11 ? ' SvgActive' : 'Svg'}
onClick={toggle11}/>

 </ColumsDisplay>

 


 <ColumsDisplay>
 <div className= {state2 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle2}>For Healthcare</div>
     <div className= 'P'>Apple and Healthcare</div>
     <div className= 'P'>Health on apple Watch</div>
     <div className= 'P'>Health  Records on iPhone</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state2 ? ' SvgActive' : 'Svg'}
onClick={toggle2}/>

 </ColumsDisplay>


 <ColumsDisplay>
 <div className= {state3 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle3}>For Government</div>
     <div className= 'P'>Shop for Government</div>
     <div className= 'P'>Shop for Veterans and Military</div>
 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state3 ? ' SvgActive' : 'Svg'}
onClick={toggle3}/>
 </ColumsDisplay>



 <ColumsDisplay>

<div className= {state10 ? ' textActive' : 'text'}>
    <div className='Header'  onClick={toggle10}>For Business</div>
    <div className= 'P'>Apple and Business</div>
    <div className= 'P'>Shop for Business</div>
    <div className= 'P'>Genius Bar</div>
</div>

<img 
src={icon} 
alt="open and close icon" 
className={state10 ? ' SvgActive' : 'Svg'}
onClick={toggle10}/>

</ColumsDisplay>
 



 </RowDisplay>








 <RowDisplay>
 <ColumsDisplay>
 <div className= {state12 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle12}>About Apple</div>
     <div className= 'P'>NewsRoom</div>
     <div className= 'P'>Apple Leadership</div>
     <div className= 'P'>Job Opportunities</div>
     <div className= 'P'>Invenstory</div>
     <div className= 'P'>Event</div>

 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state12 ? ' SvgActive' : 'Svg'}
onClick={toggle12}/>

 </ColumsDisplay>

 <ColumsDisplay>
 <div className= {state6 ? ' textActive' : 'text'}>
     <div className='Header'  onClick={toggle6}>About Apple</div>
     <div className= 'P'>NewsRoom</div>
     <div className= 'P'>Apple Leadership</div>
     <div className= 'P'>Job Opportunities</div>
     <div className= 'P'>Invenstory</div>
     <div className= 'P'>Event</div>

 </div>

<img 
src={icon} 
alt="open and close icon" 
className={state6 ? ' SvgActive' : 'Svg'}
onClick={toggle6}/>

 </ColumsDisplay>

 </RowDisplay>
</Content>

    )
}

export default Footer2;