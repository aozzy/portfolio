import React from 'react'
import classes from './modules/Footer.module.css'
function Footer() {
  return (
    <React.Fragment>
      <div className={classes.container}>
       <div className={classes.inner}>

      <div className={classes.footerItem}>
      <img className={classes.icon}  src="./images/gh.png" alt="github--v1"/>
      <a href='https://github.com/aozzy' target="_blank">https://github.com/aozzy</a>
      </div>
      <div className={classes.footerItem}>
      <img className={classes.icon}  src="./images/ln.png" alt="linkedin"/>     
      <a href='https://linkedin.com/in/abdi-osman-000' target="_blank">www.linkedin.com/in/abdi-osman-000</a>
      </div>
      <div className={classes.copyRight}>
      
      <span>&copy;2023 Abdi Osman</span>
      </div>
       </div>
      </div>
    </React.Fragment>
  )
}

export default Footer