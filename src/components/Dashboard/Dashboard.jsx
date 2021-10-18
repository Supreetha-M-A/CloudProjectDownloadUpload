import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return <div className={styles.container}>
    <div className={styles.header}>
      <span className={styles.DasboardText}>Dashboard</span>
      <span className={styles.logoutText}>Logout</span>
    </div>
    <h2 className={styles.welcomeMessage}>Welcome Supreetha </h2>
    <div className={styles.banner}><span>File Uploaded!</span><span className={styles.closeBanner}>&#10006;</span></div>
    <span className={styles.files}>Files: </span><button className={styles.button}>Upload</button>
    <div className={styles.divider}></div>
    <span className={styles.files}>Files Details </span>
    <table>
      <tbody>
        <tr>
          <th>User Name</th>
          <th>File Name</th>
          <th>Upload time</th>
          <th>Download</th>
          <th>File</th>
        </tr>
        <tr>
          <td>Supreetha</td>
          <td>myImage.png</td>
          <td>0.521</td>
          <td>
            <button className={styles.iconButtons}><FontAwesomeIcon icon={faFileDownload} className="fa-3x" /></button>
          </td>
          <td>
            <button className={styles.iconButtons}><FontAwesomeIcon icon={faTrashAlt} className="fa-3x" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default Dashboard;
