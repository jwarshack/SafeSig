import { RiShieldKeyholeFill } from 'react-icons/ri'
import { useConnectModal } from '@rainbow-me/rainbowkit'

function ConnectWallet() {

  const { openConnectModal } = useConnectModal()
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2>Connect Wallet</h2>
      <RiShieldKeyholeFill className='text-gray-400'/>
      <button className='button' onClick={openConnectModal}>Connect Wallet</button>


    </div>
  )
}

export default ConnectWallet