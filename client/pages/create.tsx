import Header from '../components/Header'
import { AiOutlinePlus } from 'react-icons/ai'
import { v4 as uuid } from 'uuid'
import { useState, useEffect, useRef, useCallback} from 'react'
import { BsTrash } from 'react-icons/bs'
import Input from '../components/Input'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { FACTORTY_ABI, FACTORY_ADDRESS } from '../config'


interface Owner {
  id: string
  address: string
}

function Create() {


  const [owners, setOwners] = useState<Owner[]>([])
  const [required, setRequired] = useState<string>()

  const { address } = useAccount()

  const { config } = usePrepareContractWrite({
    addressOrName: FACTORY_ADDRESS,
    contractInterface: FACTORTY_ABI,
    functionName: 'createMultiSig',
  })

  const { write } = useContractWrite({
    ...config,
    onMutate({ args, overrides }) {
      console.log('Mutate', { args, overrides })
    },
  })

  console.log('write', write)

  console.log(FACTORTY_ABI)
  console.log(FACTORY_ADDRESS)

 


  useEffect(() => {
    if (address) {
      const newOwner: Owner =  {
        id: uuid(),
        address
      }

      setOwners(owners => [...owners, newOwner])
    }

  }, [address])
  

  const addOwner = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newOwner: Owner = {
      id: uuid(),
      address: ""
    }
    setOwners(owners => [...owners, newOwner])

  }

  const deleteOwner = (id: string) => {
    setOwners(current => 
      current.filter(owner => {
        return owner.id !== id
      })
      )

  }

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const index = owners.findIndex((owner => owner.id === id))
    const editedOwners = owners
    editedOwners[index].address = e.target.value
    setOwners(editedOwners)

  }

  const createSafe = () => {

    if (owners.length === 0 || required === '' || required === null) {
      return
    }

    const ownersToSubmit = owners.map(owner => owner.address)

    // write({args: [ownersToSubmit, required], })

    



  }

  if (!address) return <p>Connect wallet</p>

  return (
    <div className='h-full bg-[#f0f4f2]'>
      <Header title='Create New Safe'/>
      <div className='flex flex-col gap-4 divide-y bg-white mx-10 rounded-xl shadow-lg p-10 w-full md:w-4/5'>
        <div className='flex flex-col gap-4'>
          <p>Please add the addresses of the owners of your Safe. We have prefilled the first owner with your connected wallet details, but you are free to change this to a different owner.</p>
          <p>Next, specify how many of owners are required to confirm a transaction before it gets executed. In general, the more confirmations required, the more secure your Safe is.</p>
        </div>
        <div className='py-6'>
          <Input label='Owner Address' key={owners[0]?.id} placeholder={address} onChange={onAddressChange}/>
          {owners.slice(1).map((owner) => (
            <div className='flex items-center mt-4 gap-4' key={owner.id}>
              <Input 
                label='Owner Address' 
                placeholder='' 
                onChange={(e) => onAddressChange(e, owner.id)} 
                key={owner.id} 
              />
              <button className='text-gray-400 text-2xl hover:bg-gray-100 p-3 rounded-full' onClick={() => deleteOwner(owner.id)}>
                <BsTrash/>
              </button>
            </div>
          ))}
          <button 
            className='flex items-center justify-center gap-2 text-green-600 mt-6 hover:bg-green-50 px-4 py-2'
            onClick={addOwner}
          >
            <AiOutlinePlus/>
            Add another owner
          </button>
        </div>

        <div className='flex flex-col gap-4 py-6'>
          <p>Any transaction requires confirmation of:</p>
          <div className='flex items-center gap-4'>
            <input
              type="number"
              className='border border-gray-400 p-2 w-14 outline-none rounded-md ' 
              max={owners.length}
              min={0}
              onChange={(e) => setRequired(e.target.value)}
            />
            <p>out of {owners.length} owners(s)</p>
          </div>
        </div>
        <button
          className='button'
          onClick={createSafe}
        >
          Create Safe
        </button>
      </div>
    </div>
  )
}

export default Create
