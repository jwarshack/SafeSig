import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import client from '../apolloClient'
import { gql } from '@apollo/client'
import { BsSafe, BsGithub } from 'react-icons/bs'


const Home: NextPage = () => {
  // useEffect(() => {

  //   const getGraph = async () => {
  //     const { data } = await client.query({
  //       query: gql`
  //         {
  //           multiSigs {
  //             id
  //           }
  //         }
  //       `
  //     })

  //     console.log(data)

  //   }

  //   getGraph()

  // }, [])
  return (
    <div className='text-center md:text-left p-10 flex flex-col bg-[#f0f4f2] h-full'>
      <Head>
        <title>SafeSig</title>
      </Head>
      <h1 className='font-bold text-4xl mb-8'>Welcome to SafeSig.</h1>
      <p>SafeSig is the premier multisig wallet factory built on the Rinkeby blockchain.</p>
        <div className='flex flex-col md:flex-row text-center md:text-left mx-auto rounded-xl divide-y md:divide-x divide-gray-100 mt-10 shadow-xl'>
          <div className='flex flex-col gap-8 w-[400px] p-10 bg-white rounded-l-lg' >
            <h2 className='font-bold text-2xl'>Create Safe</h2>
            <p className='grow'>Create a new Safe that is controlled by one or multiple owners. You will be required to pay a network fee for creating your new Safe.</p>
            <Link href='/create'>
              <button className="button"><AiOutlinePlus/>Create Safe</button>
            </Link>

          </div>
          <div className='flex flex-col gap-8 w-[400px] p-10 bg-white rounded-r-xl'>
            <h2 className='font-bold text-2xl'>Load Existing Safe</h2>
            <p className='grow'>Already have a Safe or want to access it from a different device? Easily load your Safe using your Safe address.</p>
            <Link href='/add'>
              <button className="button"><BsSafe/>Add Existing Safe</button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col mx-auto items-center py-10 gap-4'>
          <p>Built by <a href="https://www.jwar.xyz/" target="__blank" rel="noopener noreferrer" className='hover:text-gray-700'>jwar.eth</a></p>
          <a href="https://github.com/jwarshack/SafeSig" target="__blank" rel="noopener noreferrer" className='text-2xl'><BsGithub  /></a>
        </div>

    </div>
  )
}

export default Home
