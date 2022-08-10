import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import client from '../../apolloClient'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NewTxModal from '../../components/NewTxModal'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/modalAtom'
import SendFundsModal from '../../components/SendFundsModal'
import SendNFTModal from '../../components/SendNFTModal'
import ContractInteractionModal from '../../components/ContractInteractionModal'
import Sidebar from '../../components/Sidebar'
import Davatar from '@davatar/react'

interface MultiSig {
  id: string
  __typename: string
}



function Index() {

  const [showModal, setShowModal] = useRecoilState(modalState)

  const router = useRouter()

  const { id } = router.query

  console.log(id)
  return (
    <div className='flex h-screen'>
      <NewTxModal />
      <SendFundsModal/>
      <SendNFTModal/>
      <ContractInteractionModal/>
      <Sidebar />
      <div className='flex flex-col gap-10 bg-[#f0f4f2] flex-1 p-8 w-full'>
        <h1 className='font-semibold text-2xl'>Dashboard</h1>  
        <div className='flex flex-col gap-8 bg-white p-4 rounded-lg'>
          <Davatar
            size={55}
            address='0xdAC13042229bB1EA919368eddA8A06d05bBA4560'
            generatedAvatarType='blockies'
          />
          <p className='text-gray-400'>0xdAC13042229bB1EA919368eddA8A06d05bBA4560</p>

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

        </div>


      </div>



    </div>
  )
}

export default Index

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await client.query({
//     query: gql`
//       {
//         multiSigs {
//           id
//         }
//       }
//     `
//   })
//   const paths = data.multiSigs.map((multiSig: MultiSig) => {
//     return {
//       params: {
//         id: multiSig.id
//       }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }


// export const getServerSideProps: GetServerSideProps = async (context) => {

//   const { data } = await client.query({
//     query: gql`
//       {
//         multiSigs {
//           id
//         }
//       }
//     `
//   })

//   const sigs = data.multiSigs.map((multiSig: MultiSig) => {
//     return {
//       params: {
//         id: multiSig.id
//       }
//     }
//   })

//   return {
//     sigs,
//     // fallback: false
//   }
// }


