import MuiModal from '@mui/material/Modal'
import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiCoinsLine } from 'react-icons/ri'
import { GiCutDiamond } from 'react-icons/gi'
import { BsCode } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {

  const [showModal, setShowModal] = useRecoilState(modalState)
  
  return (
    <MuiModal
      open={showModal === 'transaction'}
      onClose={() => setShowModal(null)}
      className="relative"
    >
      <>
        <div className='modal'>
          <div className='flex justify-between px-10 pb-8'>
            <h2>New Transaction</h2>
            <AiOutlineClose 
              className='text-gray-400 cursor-pointer' 
              onClick={() => setShowModal(null)}
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-4 pt-10'>
            <button 
              className='button w-1/2'
              onClick={() => setShowModal('send-funds')}
            >
              <RiCoinsLine className='text-2xl' />
              Send Funds
            </button>
            <button 
              className='button w-1/2'
              onClick={() => setShowModal('send-nft')}
            >
              <GiCutDiamond className='text-2xl'/>
              Send NFT
            </button>
            <button 
              className='button border-2 border-black w-1/2 bg-transparent text-black hover:bg-gray-100'
              onClick={() => setShowModal('contract-interaction')}
            >
              <BsCode className='text-2xl'/>
              Contract Interaction
            </button>
          </div>

          

        </div>
      </>

    </MuiModal>
  )
}

export default Modal