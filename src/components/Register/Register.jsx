import React from "react";
import styles from "./Register.module.css";

const Register = () => {

  return <div className={styles.container}>
  <h2 className={styles.title}>Register</h2>
  <div className={styles.inputsContainer}>
    <label for="name">Name</label><br/>
    <input className={styles.inputField} type="text" label="name"/>
    <label for="email">Email</label><br/>
    <input className={styles.inputField} type="email" label="email"/>
    <label for="password">Password</label><br/>
    <input className={styles.inputField} type="password" label="password"/>
    <label for="confirmPassword">Confirm Password</label><br/>
    <input className={styles.inputField} type="password" label="confirmPassword"/>
  </div>
  <button className={styles.button}>Register</button>
</div>;
}

export default Register;
