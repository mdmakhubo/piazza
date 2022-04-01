import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE PIAZZA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            2005 John Fonster Road #304.
            <br /> Johannesburg, 1623
            <br /> (012) 987 - 6543
          </p>
          <p className={styles.text}>
            3365 Mirriam Makeba Rd #235.
            <br /> SOWETO, 1851
            <br /> (010) 123 - 4567
          </p>
          <p className={styles.text}>
            1544 D. Mbatha Street #104.
            <br /> Pretoria, 85022
            <br /> (012) 225 - 1234
          </p>
          <p className={styles.text}>
            8756 Elloff Street #125.
            <br /> Jphannesburg, 1200
            <br /> (010) 777 - 4457
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer