import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.scss';

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`product/${pizza._id}`} passHref>
         <Image src={pizza.img} alt="Featured-pizza" height={500} width={500} />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>R {pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default PizzaCard