import React, { useEffect, useState } from 'react'
import styles from '../styles/Create.module.css'
import {AiOutlineLeft, AiOutlinePlus} from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import Link from 'next/link'
import { FactoryABI, FactoryAddress } from '../config'
import { useContractWrite, useAccount } from 'wagmi'

export default function Create() {
  const [owners, setOwners] = useState([])
  const [required, setRequired] = useState(1)
  const [alert, setAlert] = useState(null)

  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading, write } = useContractWrite({
    addressOrName: FactoryAddress,
    contractInterface: FactoryABI,
    functionName: 'createMultiSig',
    args: [['0x4a4fD96907e817565D74Cf384418b0885A53bbcD'], 1]
  })

  useEffect(() => {
    if (address) {
      setOwners(owners => [...owners, address])
    }

    return () => setOwners([])


  }, [])

  // useEffect(() => {

  // }, [owners])

  function createSafe() {
    owners.forEach((owner) => {
      if (owner == "" || !owner.startsWith("0x") || owner.length != 42) {
        console.log("Invalid owner")
      }
    })
    

  }

  function addOwner(e) {
    setOwners(owners => [...owners, ""])
  }

  function handleInputChange(e) {
    console.log(e.target.value)
  }

  function deleteOwner(e) {
    console.log(e.target.value)

  }

  // if (!address) return <div>Not connected</div>
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
        {owners.map((owner, index) => (
          <div className={styles.inputOuter}>
            <div className={styles.inputInner} key={index}>
              <input
                type='text'
                className={styles.ownerInput}
                value={owner}
                onChange={handleInputChange}
                key={index}
              />
              <div className={styles.label}>Owner Address</div>
            </div>
            <button className={styles.trashBtn} key={index} onClick={deleteOwner}><BsTrash/></button>
          </div>

        ))}

        <button className={styles.addOwnerBtn} onClick={addOwner}><AiOutlinePlus/> Add another owner</button>

      </div>
      <div className={styles.confirmationSection}>
        <p>Any transaction requires confirmation of:</p>
        <div className={styles.confirmationInner}>
          <input 
            type='number'
            className={styles.confirmationInput}
            placeholder={required}
            min='1'
            max={owners.length}
          />
          <p>out of {owners.length} owners(s)</p>
        </div>


      </div>

      {
        (required && owners.length > 1) ? 
        <button className={styles.createBtn} onClick={createSafe}>Create Safe</button>
        : null
      }


    </div>
    </div>
  )
}
