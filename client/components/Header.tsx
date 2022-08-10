import { AiOutlineLeft } from 'react-icons/ai'
import Link from 'next/link'

interface Props {
  title: string
}
function Header({ title }: Props) {
  return (
    <div className='flex items-center gap-5 p-10'>
      <Link href='/'>
        <button className='text-2xl text-green-600 rounded-full p-2 flex hover:bg-gray-200'>
          <AiOutlineLeft/>
        </button>
      </Link>
      <h1 className='font-bold text-4xl'>{title}</h1>
    </div>
  )
}

export default Header