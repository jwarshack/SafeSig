import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}
function Layout({ children }: Props) {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <main className='grow'>{children}</main>
    </div>
  )
}

export default Layout