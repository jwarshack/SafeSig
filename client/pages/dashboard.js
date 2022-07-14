import React from 'react'
import styles from '../styles/Dashboard.module.css'
import { AiOutlineCopy } from 'react-icons/ai'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <p>0x5d904c0D73Aca2ac36bb98a3582935d0218fF759</p>
        <div className={styles.iconsContainer}>
          <button className={styles.iconBtn}><AiOutlineCopy/></button>
          <a><button className={styles.iconBtn}></button></a>
        </div>
        <div className={styles.balanceContainer}>
          <p>Total Balance</p>
          <p>0.00 USD</p>
        </div>
        <button className={styles.txBtn}>New Transaction</button>




      </div>
      <div className={styles.innerContainer}>
        <h1>Dashboard</h1>
        <div className={styles.card}>
          <p>0x5d904c0D73Aca2ac36bb98a3582935d0218fF759</p>
        </div>

      </div>



    </div>
  )
}
