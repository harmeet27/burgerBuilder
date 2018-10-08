import React , { Component } from  'react';
import Aux from '../../hoc/Aux'
import Button from '../Ui/Button/Button'

class OrderSummary extends Component {



render(){
  const ingredientSummary  = 
    Object.keys(this.props.igredients).map(igKey => {
        return <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey}</span> : {this.props.igredients[igKey]}</li>
    })

        return (<Aux>
           <h3>Your Order</h3>
           <p>A Delicious burger with following ingridients:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p><strong>Total Price:{this.props.totalPrice.toFixed(2)}</strong></p>
           <p>Continue to checkout ?</p>
           <Button buttonType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
           <Button buttonType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>
        );
}



}

export default OrderSummary;