import React from 'react';

import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removeIngridient}>Less</button>
         <button className={classes.More} onClick={props.addIngridient}>More</button>
    </div>
);

export default BuildControl;