import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input'

function Add() {
  return (
    <div className='h-full bg-[#f0f4f2]'>
      <Header title='Add Existing Safe'/>
      <div className='flex flex-col gap-4 divide-y bg-white mx-10 rounded-xl shadow-lg p-10 w-4/5'>
        <div className='flex flex-col gap-4'>
          <p>You are about to add an existing safe on Rinkeby. Please enter the address of the safe.</p>
          <p>Your connected wallet does not have to be the owner of this Safe. In this case, the interface will provide you a read-only view.</p>
        </div>
        <div className='py-6'> 
          <Input label="Safe Address"/>
        </div>
        <div className='pt-6'>
        <button className='button w-3/4 mx-auto'>Add Safe</button>
        </div>


      </div>

    </div>
  )
}

export default Add