import React from 'react';
import classes from './burger.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'


const Burger = (props) => {
      const transformedingridients = Object.keys(props.ingridients).map(igKey => {
          return [...Array(props.ingridients[igKey])].map((_ , i) => {
              return <BurgerIngridient key={igKey + i} type={igKey} />
          }) 
      });

       return(
           <div className={classes.Burger}>
               <BurgerIngridient type="bread-top" />
               {transformedingridients}
               <BurgerIngridient type="bread-bottom" />
           </div>
       );
}

export default Burger;