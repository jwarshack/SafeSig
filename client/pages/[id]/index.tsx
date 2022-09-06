import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next'
import client from '../../apolloClient'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NewTxModal from '../../components/NewTxModal'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/modalAtom'
import SendFundsModal from '../../components/SendFundsModal'
import SendNFTModal from '../../components/SendNFTModal'
import ContractInteractionModal from '../../components/ContractInteractionModal'
import Sidebar from '../../components/Sidebar'
import Davatar from '@davatar/react'
import { Wallet } from '../../typings' 
import { useAccount, useContractRead } from 'wagmi'
import { MULTISIG_ABI } from '../../config'

interface Props {
  wallet: Wallet
}


function Index({ wallet }: Props) {

  console.log(wallet)

  const { address } = useAccount()

  const [showModal, setShowModal] = useRecoilState(modalState)

  const [isOwner, setIsOwner] = useState<boolean>(false)

  const router = useRouter()

  const { id } = router.query

  const contractRead = useContractRead({
    addressOrName: id! as string,
    contractInterface: MULTISIG_ABI,
    functionName: 'owners',
  })

  useEffect(() => {

    console.log(contractRead)

    

  }, [])

  console.log(id)
  return (
    <div className='flex h-screen'>
      <NewTxModal />
      <SendFundsModal/>
      <SendNFTModal/>
      <ContractInteractionModal/>
      <Sidebar wallet={wallet}/>
      <div className='flex flex-col gap-10 bg-[#f0f4f2] flex-1 p-8 w-full'>
        <h1 className='font-semibold text-2xl'>Dashboard</h1>  
        <div className='flex flex-col gap-8 bg-white p-4 rounded-lg'>
          <Davatar
            size={55}
            address={wallet.id}
            generatedAvatarType='blockies'
          />
          <p className='text-gray-400'>{wallet.id}</p>

          <div className='flex gap-20'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-400 text-sm'>Tokens</p>
              <p className='font-bold text-xl'>0</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-400 text-sm'>NFTs</p>
              <p className='font-bold text-xl'>0</p>
            </div>
            <button className='button'>View Assets</button>
          </div>
        </div>    
        <h2 className='font-semibold text-lg'>Transaction Queue</h2>
        <div className='flex flex-col gap-8 bg-white p-4 rounded-lg'>
          {
            wallet.transactions.length === 0 ? 'There are no Transactions' : 'Transaction 1'
          }

        </div>


      </div>



    </div>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (ctx): Promise<any> => {
  console.log(ctx.params?.id)

  const { data } = await client.query({
    query: gql`
    {
      wallets(where: {id: "${ctx.params?.id}"}) {
        id
        transactions {
          id
          to
          data
          status
        }
      }
    }
    
    `
  })

  if (data.wallets.length === 0) {
    return {
      redirect: {
        permanent: false,
        destination: '/add'
      }
    }
  }
      
  return {
    props: {
      wallet: data.wallets[0]
    }
  }














}

