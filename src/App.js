import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import './App.css'
import Parallex from './component/parallex/parallex'
import MyComponent from './component/parallax2/parallax2'
import NavBar from './component/top-navBar/top-navBar.component'
import Down_nav from './component/down-nav/down-nav.component'
import Header from './component/header/header.component'
import Section1 from './component/section1/section1.component'
import Section2 from './component/section2/section2.component'
import Section_3 from './component/section3/section3.component'
import Section_4 from './component/section4/section4.component'
import Section5 from './component/section5/section5.component'
import Section_6 from './component/section6/section6.component'
import Section7 from './component/section7/section7.component'
import Section_8 from './component/section8/section8.component'
import Section_9 from './component/section9/section9.component'
import Section_10 from './component/section10/section10.component'

export default function ContactUs() {

  
  return (
    <div className= 'App'>
      <NavBar/>
    <Down_nav/> 
    <Header/>
    <Section1/>
    <Section2/>
    <Section_3/>
    <Section_4/>
    <Section5/>
    <Section_6/>
    <Section7/>
    <Section_8/>
    <Section_9/>
    <Section_10/>
    </div>
  );
}