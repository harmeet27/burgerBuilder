import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import BackDrop from '../../Ui/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const SideDrawer = ( props ) => {
  let attachedClasses = [ classes.SideDrawer , classes.Close]
  if(props.open){
       attachedClasses = [ classes.SideDrawer , classes.Open]
  }
  return(
    <Aux>
    <BackDrop show={props.open} clicked={props.sideDrawerClosedHandler}/>
    <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
         <Logo />
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </div>
    </Aux>
  );
};

export default SideDrawer;
