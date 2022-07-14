import React from 'react'
import styles from './Footer.module.css'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className={styles.container}>
      {/* <p>SafeSig is a multisig wallet factory on the Rinkeby Network</p> */}
      <p>Built by jwar.eth</p>
      <a href="https://github.com/jwarshack/SafeSig" target="__blank" rel="noopener noreferrer"><AiFillGithub/></a>

    </footer>
  )
}
