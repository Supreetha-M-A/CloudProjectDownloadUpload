import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return <div className={styles.container}>
    <h2 className={styles.title}>Login</h2>
    <div className={styles.inputsContainer}>
      <label>Email</label><br />
      <input className={styles.inputField} type="email" label="email" />
      <label>Password</label><br />
      <input className={styles.inputField} type="password" label="password" />
    </div>
    <button className={styles.button}>Login</button>
    <span className={styles.linkStatement}>No account?</span><a href="#">Register</a>
    <div />
  </div>;
}

export default Login;
