import React from 'react'
import Sidebar from '../../../components/Sidebar'

function Index() {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-col gap-10 bg-[#f0f4f2] flex-1 p-8 w-full'>
        <table className='bg-white rounded-lg'>
          <tr>
            <th>Asset</th>
            <th>Balance</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Rinkeby</td>
            <td>0.00 RINK</td>
            <td>Value 0.00USD</td>
          </tr>
        </table>
      </div>


    </div>
  )
}

export default Index