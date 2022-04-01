import React from 'react';
import PizzaCard from './PizzaCard';
import styles from '../styles/pizzaList.module.scss';

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MADE IN SOUTH AFRICA FROM A TRUE LOVE OF SOUTH AFRICAN FOOD.</h1>
      <p className={styles.desc}>
        There’s nothing better than the smell of a freshly baked pizza straight out of an old-style traditional wood fired pizza oven!
        Piazza Pizzas goal is to create the most perfect, delicious pizza in SOWETO for collection and delivery.
      </p>     
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default PizzaList