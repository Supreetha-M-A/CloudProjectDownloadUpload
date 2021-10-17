import React from "react";
import styles from "./Home.module.css";

const Home = () => {

  return <div className={styles.container}>
    <h2 className={styles.title}>Create an account or login</h2>
    <button className={styles.button}>Register</button>
    <button className={styles.button}>Login</button>
  </div>;
};

export default Home;
