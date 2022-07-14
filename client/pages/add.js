import React from 'react'
import styles from '../styles/Add.module.css'
import {AiOutlineLeft, AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'

export default function Add() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href='/'><button><AiOutlineLeft /></button></Link>
        <h1>Add Existing Safe</h1>
      </div>
      <div className={styles.innerContainer}>
          <p>You are about to add an existing safe on Rinkeby. Please enter the address of the safe.</p>
          <p>Your connected wallet does not have to be the owner of this Safe. In this case, the interface will provide you a read-only view.</p>
          <div className={styles.inputSection}>
          <div className={styles.inputContainer}>
            <input
              type='text'
              className={styles.safeInput}
            />
            <div className={styles.label}>Safe Address</div>
          </div>
      </div>
      <button className={styles.addBtn}>Add Safe</button>

      </div>

    </div>
  )
}
