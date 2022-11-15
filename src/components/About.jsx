import React from 'react'
import Common from './Common'
import web from '../images/hero-img.png';

const About = () => {
  return (
    <>
     <Common 
         name={"Welcome to About page"}
         btn={"Services"}
         imgSrc={web}
     /> 
    </>
  )
}

export default About
