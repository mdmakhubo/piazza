import React from 'react';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width="32" height="32" alt="phone-icon" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>012 345 6789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
            <Image src="/img/logo-trans.png" alt="logo-pic" className={styles.logoImg} width="120px" height="120px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul> 
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar