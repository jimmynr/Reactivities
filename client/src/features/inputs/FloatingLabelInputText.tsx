import { useEffect, useRef, useState } from "react"

type Props = {
  id: string
  label: string
  value: string | undefined
  name: string
}

const FloatingLabelInputText = ({id, label, value, name}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    if (inputValue.trim() === "") setIsEmpty(true)
    else setIsEmpty(false)
  }, [inputValue])

  useEffect(() => {
    if (inputRef.current?.value === "") setIsEmpty(true)
    else setIsEmpty(false)
  }, [])

  return (
    <div className="relative w-full my-5">
      <input
        ref={inputRef}
        type="text"
        defaultValue={value}
        name={name}
        id={id}     
        className="peer text-sm border-2 border-[#eeeeee] rounded-sm w-full px-4 py-2 focus:border-blue-500 focus:outline-none"
        autoComplete="off"
        onChange={e => setInputValue(e.target.value)}
      />
      <label
        htmlFor={id}
        className={`absolute left-2 -translate-y-1/2 px-2 text-gray-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white
          ${isEmpty ? "top-1/2 text-sm" : "top-0 text-xs bg-white"}`}
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingLabelInputText
