import React , { Component } from  'react';
import Aux from '../../hoc/Aux'
import  Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingridients: {
            cheese: 2,
            salad : 1,
            bacon: 1,
            meat: 2,
                 
        }
    }
    
    
    render() {
        return(
            <Aux>
                 <Burger ingridients={this.state.ingridients}/>
            </Aux>
        ); 
    }
}

export default BurgerBuilder;