import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [ {label : 'Salad' , type: 'salad'},
{label : 'Bacon' , type: 'bacon'},
{label : 'Cheese' , type: 'cheese'},
{label : 'Meat' , type: 'meat'},
] ;

const BuildControls = (props) => (
     <div className = {classes.BuildControls}>
         <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
         {
             controls.map(ctrl => ( 
                 <BuildControl 
                 addIngridient={() => props.addIngridient(ctrl.type)} 
                 removeIngridient={() => props.removeIngridient(ctrl.type)} 
                 key={ctrl.label} 
                 label={ctrl.label}
                 disabled={props.disAbleInfo[ctrl.type]}
                 />))
                 
         }
     </div>
);

export default BuildControls;