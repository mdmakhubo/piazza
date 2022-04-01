import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import axios from 'axios';
import Add from '../components/Add';
import AddButton from '../components/AddButton';

export default function Home({pizzaList, admin}) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Piazza</title>
        <meta name="description" content="MADE IN SOUTH AFRICA FROM A TRUE LOVE OF SOUTH AFRICAN FOOD." />
        <link rel="icon" href="/black-logo.png" />
      </Head>
        <Featured />
        {
          admin && <AddButton setClose={setClose} />
        }
        <PizzaList pizzaList={pizzaList} />     
        {
          !close && <Add setClose={setClose} />
        }
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  const token = "VH*^$)NV,ddns||cWe%hbbnFBddd";
  let admin = false;

  if(myCookie.token === token) {
    admin = true
  }

  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
      admin
    }
  }
}
