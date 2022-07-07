import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>SafeSig is a multisig wallet factory on the Rinkeby Network</p>
      <p>Built by jwar.eth</p>
    </footer>
  )
}
