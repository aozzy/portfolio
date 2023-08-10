import React from 'react'
import classes from './modules/Main.module.css'

import lottie from '/heroanimation.json'
import Lottie from "lottie-react";
import 'animate.css';
export default function Main() {
  
  return (
    <section id='home' className={classes.hero}>
      {/* <Nav/> */}
      <div className={classes.container}>
        <div className={`animate__animated animate__bounce animate__slower animate__repeat-2 ${classes.left}`}>
          <h1 className={classes.title}>Hi<span className={classes.coma}>,</span> my name is</h1>
          <h2 className={classes.subtitle}>Abdi Osman</h2>
          <h2 className={classes.subtitle}>I build things for the web</h2>
          <p className={classes.description}>I'm a Software Engineer that welcomes challenges and architects solutions.</p>
          <a className={classes.btn} href='https://linkedin.com/in/abdi-osman-000' target="_blank">Learn More</a>
        </div>
        <div className={classes.right}>
       
          <div className={classes.image}>
            

           <Lottie loop={false} animationData={lottie}  className={classes.lotty} style={{width:'840px'}}/>
          
           
          
          </div>
        </div>
      </div>

    </section>
    
  )
}
