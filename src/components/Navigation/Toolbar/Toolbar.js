import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from  '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
   <Logo className={classes.Logo}/>
    <nav className={classes.DesktopOnly}>
        <NavigationItems />
        </nav>
    </header>
);

export default toolbar; 