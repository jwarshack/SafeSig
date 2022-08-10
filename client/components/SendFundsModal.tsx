import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { modalState } from '../atoms/modalAtom'
import { MULTISIG_ABI } from '../config'
import { ethers } from 'ethers'

function SendFundsModal() {

  const [showModal, setShowModal] = useRecoilState(modalState)

  const { address } = useAccount()

  const { config } = usePrepareContractWrite({
    addressOrName: '0x63e7ecbffb3f2570d19fa405fc112808772f2ab8',
    contractInterface: MULTISIG_ABI,
    functionName: 'submit',
    chainId: 4,
    args: [
      '0xbE00E9aC7B3E867E8f8A2c652ac1fa60613f2a9C', 
      ethers.utils.parseEther('0.001'),
      []
    ]

  })

  const { write } = useContractWrite(config)

  console.log(config)


  return (
    <MuiModal
      open={showModal === 'send-funds'}
      onClose={() => setShowModal(null)}
      className="flex justify-center items-center"
    >
      <>
      <div className='modal'>
        <h2>Send funds</h2>
        <button className='button' onClick={() => write()}>Send</button>
      </div>
      </>

    </MuiModal>
  )
}

export default SendFundsModal