import { ConnectButton } from '@rainbow-me/rainbowkit'
import logo from '../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='relative flex justify-between p-5 z-10 shadow-xl'>
      <Link href="/" passHref>
        <a><Image src={logo} height="50px" width="125px" alt='logo'/></a>
      </Link>
      <ConnectButton/>
    </div>
  )
}

export default Navbar