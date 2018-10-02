import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './logo.css'
const Logo = () => (
    <div className={classes.Logo}>
   <img src={burgerLogo} alt="Xinx" />
   </div>
);

export default Logo;