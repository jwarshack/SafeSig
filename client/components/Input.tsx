interface Props {
  label: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, placeholder, onChange }: Props) {
  return (
    <div className="relative border-[1px] border-gray-400 rounded-xl p-4 w-1/2" >
      <div className="text-gray-400 absolute -top-3 left-4 bg-white px-2 text-sm ">{label}</div>
      <input
        type='text'
        className="outline-none w-full placeholder:text-black text-ellipsis	"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}


export default Input