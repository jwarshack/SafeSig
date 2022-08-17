import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import client from '../apolloClient'
import Header from '../components/Header'
import Input from '../components/Input'
import Loader from '../components/Loader'


interface Wallet {
  __typename: string
  id: string
}

function Add() {

  const [safeToAdd, setSafeToAdd] = useState<string | null>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const getValidSafes = async (): Promise<string[]> => {
    const { data } = await client.query({
      query: gql`
        {
          wallets {
            id
          }
        }
      `
    })

    const wallets: string[] = data.wallets.map((wallet: Wallet) => wallet.id)

    return wallets
  }

  const addSafe = async () => {
    setIsLoading(true)
    if (!safeToAdd) {
      return
    }
    const validSafes = await getValidSafes()
    const lowerSafe = safeToAdd!.toLowerCase()
    const isValidSafe = validSafes.includes(lowerSafe!)
    if (!isValidSafe) {
      console.log('This safe is not valid')
      setIsLoading(false)
      return
    }


    router.push(`/${lowerSafe}`)

    setIsLoading(false)


  }


  const onChange = (e: React.ChangeEvent<HTMLInputElement>, id: string)=> {
    setSafeToAdd(e.target.value)

  }
  return (
    <div className='h-full bg-[#f0f4f2]'>
      <Header title='Add Existing Safe'/>
      <div className='flex flex-col gap-4 divide-y bg-white mx-10 rounded-xl shadow-lg p-10 w-4/5'>
        <div className='flex flex-col gap-4'>
          <p>You are about to add an existing safe on Rinkeby. Please enter the address of the safe.</p>
          <p>Your connected wallet does not have to be the owner of this Safe. In this case, the interface will provide you a read-only view.</p>
        </div>
        <div className='py-6'> 
          <Input label="Safe Address" placeholder='' onChange={(e) => onChange(e, '1')}/>
        </div>
        <div className='pt-6'>
        <button 
          className='button w-3/4 mx-auto'
          onClick={addSafe}
        >
          {/* {!isLoading ? 'Add Safe' : <Loader color='white' />} */}

        </button>
        </div>


      </div>

    </div>
  )
}

export default Add