import Davatar from '@davatar/react'
import { shortAddress } from '../utils/helpers'
import { FaExternalLinkAlt, FaRegCopy } from 'react-icons/fa'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Accordion, AccordionDetails, AccordionSummary, Tooltip, } from '@mui/material'
import { BsChevronDown, BsGithub } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { RiCoinsLine, RiArrowUpDownFill } from 'react-icons/ri'
import { Wallet }  from '../typings'
import { useBalance } from 'wagmi'

interface Props {
  wallet: Wallet
}

function Sidebar({ wallet }: Props) {

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleExpand = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const [showModal, setShowModal] = useRecoilState(modalState)

  const { data: balance } = useBalance({
    addressOrName: wallet.id
  })


  return (
    <div className="flex flex-col w-[250px] divide-y-4 divide-gray-200">
      <div className='p-5 flex flex-col items-center gap-4'>
        <Davatar
          size={40}
          address={wallet.id}
          generatedAvatarType='blockies'
        />
        <p className='text-gray-400 text-sm'>{shortAddress(wallet.id)}</p>
        <div className='flex gap-2'>
          <Tooltip 
            title='Copy to clipboard' 
            arrow
            placement='top'
          >
            <button 
              className='bg-[#f0f4f2] p-2 rounded text-green-600 hover:bg-green-100'
              onClick={() => navigator.clipboard.writeText(wallet.id)}
            >
              <FaRegCopy />
            </button>
          </Tooltip>
          <Tooltip 
            title='View on rinkebyetherscan.com' 
            arrow
            placement='top'
          >
            <a 
              href={`https://rinkeby.etherscan.io/address/${wallet.id}`}
              target='__blank'
              rel='noopener noreferrer'
            >
              <button className='bg-[#f0f4f2] p-2 rounded text-green-600 hover:bg-green-100'>
                <FaExternalLinkAlt />
              </button>
            </a>
          </Tooltip>
        </div>
        <div className='text-center'>
          <p className='text-gray-400 text-sm'>Total Balance</p>
          <p>{balance?.formatted} RINK</p>
        </div>
        <button 
          className='button text-sm py-3'
          onClick={() => setShowModal('transaction')}
        >
          New Transaction
        </button>

        

      </div>

      <div>
        <AccordionSummary>
          <div className='flex items-center gap-4'>
            <AiOutlineHome/>
            <p className='font-bold'>Home</p>

          </div>

        </AccordionSummary>
        <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
          <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className='flex items-center gap-4'>
              <RiCoinsLine />
              <p className='font-bold'>Assets</p>
            </div>
          </AccordionSummary>
          {/* <AccordionDetails>Blaal</AccordionDetails> */}
          <AccordionDetails>
            <li>Tokens</li>
            <li>NFTs</li>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
          <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <div className='flex items-center gap-4'>
              <RiArrowUpDownFill />
              <p className='font-bold'>Transactions</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <li>Queued</li>
            <li>History</li>

          </AccordionDetails>
        </Accordion>

      </div>
      <div className='flex flex-col items-center grow justify-center gap-2'>
        <BsGithub className="text-gray-400"/>
        <p className='text-sm text-gray-400'>Built by jwar.eth</p>
      </div>



    </div>
  )
}

export default Sidebar