import React, { useState } from 'react'
import styles from '../styles/Create.module.css'
import {AiOutlineLeft, AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'
import { FactoryABI, FactoryAddress } from '../config'
import { useContract, useContractWrite } from 'wagmi'

export default function Create() {
  const [owners, setOwners] = useState(1)
  const { data, isError, isLoading, write } = useContractWrite({
    addressOrName: FactoryAddress,
    contractInterface: FactoryABI,
    functionName: 'createMultiSig',
    args: [['0x4a4fD96907e817565D74Cf384418b0885A53bbcD'], 1]
  })

  function createSafe() {
    write()


  }

  function addOwner(e) {
    setOwners(owners => [...owners, e.target.val])
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href='/'><button><AiOutlineLeft /></button></Link>
        <h1>Create New Safe</h1>
      </div>
    <div className={styles.innerContainer}>
      <p>Please add the addresses of the owners of your Safe.  We have prefilled the first owner with your connected wallet details, but you are free to change this to a different owner.</p>
      <p>Next, specify how many of owners are required to confirm a transaction before it gets executed. In general, the more confirmations required, the more secure your Safe is.</p>
      <div className={styles.inputSection}>
        <div className={styles.inputContainer}>
          <input
            type='text'
            className={styles.ownerInput}
          />
          <div className={styles.label}>Owner Address</div>
        </div>
        <button className={styles.addOwnerBtn}><AiOutlinePlus/> Add another owner</button>

      </div>
      <div className={styles.confirmationSection}>
        <p>Any transaction requires confirmation of:</p>
        <div className={styles.confirmationInner}>
          <input 
            type='number'
            className={styles.confirmationInput}
          />
          <p>out of 2 owners(s)</p>
        </div>


      </div>

      <button className={styles.createBtn} onClick={createSafe}>Create Safe</button>

      

        
    </div>
    </div>
  )
}
