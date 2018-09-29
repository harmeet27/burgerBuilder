import React from 'react';
import Aux from '../../hoc/Aux'

const OrderSummary = (props) => {
    const ingredientSummary  = 
    Object.keys(props.igredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.igredients[igKey]}</li>
    })
   return(
       <Aux>
           <h3>Your Order</h3>
           <p>A Delicious burger with following ingridients:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p>Continue to checkout ?</p>
        </Aux>
   );

}

export default OrderSummary;