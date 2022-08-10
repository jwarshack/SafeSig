import Davatar from '@davatar/react'
import { shortAddress } from '../utils/helpers'
import { FaExternalLinkAlt, FaRegCopy } from 'react-icons/fa'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Accordion, AccordionDetails, AccordionSummary, } from '@mui/material'
import { BsChevronDown, BsGithub } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { RiCoinsLine, RiArrowUpDownFill } from 'react-icons/ri'

function Sidebar() {

  const [wallet, setWallet] = useState<string>('0x63e7ecbffb3f2570d19fa405fc112808772f2ab8')
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleExpand = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const [showModal, setShowModal] = useRecoilState(modalState)


  return (
    <div className="flex flex-col w-[250px] divide-y-4 divide-gray-200">
      <div className='p-5 flex flex-col items-center gap-4'>
        <Davatar
          size={40}
          address='0xdAC13042229bB1EA919368eddA8A06d05bBA4560'
          generatedAvatarType='blockies'
        />
        <p className='text-gray-400 text-sm'>{shortAddress(wallet)}</p>
        <div className='flex gap-2'>
          <button 
            className='bg-[#f0f4f2] p-2 rounded text-green-600 hover:bg-green-100'
            onClick={() => navigator.clipboard.writeText(wallet)}
          >
              <FaRegCopy />
            </button>
          <a 
            href={`https://rinkeby.etherscan.io/address/${wallet}`}
            target='__blank'
            rel='noopener noreferrer'
          >
            <button className='bg-[#f0f4f2] p-2 rounded text-green-600 hover:bg-green-100'>
              <FaExternalLinkAlt />
            </button>
          </a>
        </div>
        <div className='text-center'>
          <p className='text-gray-400 text-sm'>Total Balance</p>
          <p>0.00 RINK</p>
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