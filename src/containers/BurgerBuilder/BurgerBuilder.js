import React , { Component } from  'react';
import Aux from '../../hoc/Aux'
import  Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingridients: {
            cheese: 0,
            salad : 0,
            bacon: 0,
            meat: 0,               
        }
    }
    
    
    render() {
        return(
            <Aux>
                 <Burger ingridients={this.state.ingridients}/>
                 <BuildControls/>
            </Aux>
        ); 
    }
}

export default BurgerBuilder;