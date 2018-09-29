import React , { Component } from  'react';
import Aux from '../../hoc/Aux';
import  Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Ui/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary'
const ingridientPrices = {
    salad: 20,
    cheese: 40,
    bacon: 80,
    meat: 80
} 
class BurgerBuilder extends Component {
    state = {
        ingridients: {
            cheese: 0,
            salad : 0,
            bacon: 0,
            meat: 0,               
        },
        totalPrice: 50,
        purchaseable: false,
        purchasing: false
    }
    
    purchaseHandler = () => {
      this.setState({ purchasing : true});
    }

    purchaseCancel = () => {
        this.setState({purchasing : false});
    }

    updatePurchaseState = (ingredients) => {
       
        const sum = Object.keys(ingredients).map(
            igkey =>
            {return ingredients[igkey]; }).reduce((sum , el) => {
                return sum + el;
            }, 0);

        this.setState({purchaseable : sum > 0});
    }

    addIngridient = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients= {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = ingridientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice , ingridients: updatedIngridients
        })
        this.updatePurchaseState(updatedIngridients);
    }

removeIngridient = (type) => {
     const oldCount = this.state.ingridients[type];
     if(oldCount <= 0)
     {
          return;
     }
        const updatedCount = oldCount - 1;
        const updatedIngridients= {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const priceDeduction = ingridientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice , ingridients: updatedIngridients
        })
        this.updatePurchaseState(updatedIngridients);

}
    
    render() {
        const disAbleInfo= {
            ...this.state.ingridients
        };
        for(let key in disAbleInfo){
            disAbleInfo[key] = disAbleInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}><OrderSummary igredients={this.state.ingridients}/></Modal>
                 <Burger ingridients={this.state.ingridients}/>
                 <BuildControls addIngridient={this.addIngridient} 
                 removeIngridient={this.removeIngridient}
                 disAbleInfo ={disAbleInfo}
                 price={this.state.totalPrice}
                 ordered={this.purchaseHandler}
                 purchaseable={this.state.purchaseable}/>
                 
            </Aux>
        ); 
    }
}

export default BurgerBuilder;