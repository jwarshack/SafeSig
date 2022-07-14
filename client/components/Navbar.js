import React from 'react'
import styles from './Navbar.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/' passHref>
        <a><Image src={logo} height="50px" width="125px" alt='logo'/></a>
      </Link>
      <ConnectButton/>
    </div>
  )
}
