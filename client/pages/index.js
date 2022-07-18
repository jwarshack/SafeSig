import Head from 'next/head'
import Image from 'next/image'
import Alert from '../components/Alert'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { AiOutlinePlus, AiFillGithub } from 'react-icons/ai'
import { BsSafe } from 'react-icons/bs'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Alert/> */}
      <h1>Welcome to SafeSig.</h1>
      <p>SafeSig is the premier multisig wallet factory built on the Rinkeby Blockchain.</p>
      <div className={styles.innerWrapper}>
        <div className={styles.innerContainer}>
          <h2>Create Safe</h2>
          <p>Create a new Safe that is controlled by one or multiple owners. You will be required to pay a network fee for creating your new Safe.</p>
          <Link href='/create'><button className={styles.button}><AiOutlinePlus/>Create Safe</button></Link>
        </div>
        <div className={styles.innerContainer}>
          <h2>Load Existing Safe</h2>
          <p>Already have a Safe or want to access it from a different device? Easily load your Safe using your Safe address.</p>
          <Link href='/add'><button className={styles.button}><BsSafe/>Add Existing Safe</button></Link>
        </div>

      </div>
      <Footer/>

    </div>
  )
}
