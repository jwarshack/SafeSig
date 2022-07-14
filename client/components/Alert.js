import React from 'react'
import styles from './Alert.module.css'

export default function Alert() {
  return (
    <div className={styles.container}>
      <p>Wrong Network! Please connect to Rinkeby.</p>
    </div>
  )
}
