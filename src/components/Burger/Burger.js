import React from 'react';
import classes from './burger.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'


const Burger = (props) => {
      let transformedingridients = Object.keys(props.ingridients).map(igKey => {
          return [...Array(props.ingridients[igKey])].map((_ , i) => {
              return <BurgerIngridient key={igKey + i} type={igKey} />
          }) 
      }).reduce((arr,el) => {
          return arr.concat(el)
      } , []);

      if(transformedingridients.length === 0)
      {
          transformedingridients = <p>Start Adding Ingredients!</p>
      }

       return(
           <div className={classes.Burger}>
               <BurgerIngridient type="bread-top" />
               {transformedingridients}
               <BurgerIngridient type="bread-bottom" />
           </div>
       );
}

export default Burger;