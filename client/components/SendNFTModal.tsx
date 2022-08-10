import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function SendNFTModal() {

  const [showModal, setShowModal] = useRecoilState(modalState)
  return (
    <MuiModal
      open={showModal === 'send-nft'}
      onClose={() => setShowModal(null)}
      className="relative"
    >
      <div className='modal'>
        <h2>Contract Interaction</h2>

      </div>
    </MuiModal>
  )
}

export default SendNFTModal