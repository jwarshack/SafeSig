import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Create Safe</button>
      <button className={styles.button}>My Safe</button>

    </div>
  )
}
