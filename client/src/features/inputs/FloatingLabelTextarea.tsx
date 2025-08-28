import { useEffect, useState } from "react"

type Props = {
  id: string
  label: string
  name: string
  value: string | undefined
}

const FloatingLabelTextarea = ({id, label, name, value}: Props) => {

  const [isEmpty, setIsEmpty] = useState(true)
  const [textareaValue, setTextareaValue] = useState(value)

  useEffect(() => {
    if (textareaValue?.trim() === "" || textareaValue === undefined) setIsEmpty(true)
    else setIsEmpty(false)
  }, [textareaValue])

  return (
    <div className="relative w-full my-5">
      <textarea
        rows={3}
        style={{ resize: "none" }}
        id={id}     
        name={name}
        defaultValue={value}
        className="peer text-sm border-2 border-[#eeeeee] rounded-sm w-full px-4 py-2 focus:border-blue-500 focus:outline-none"
        onChange={e => setTextareaValue(e.target.value)}
      ></textarea>
      <label
        htmlFor={id}
        className={`absolute left-2 -translate-y-1/2 px-2 text-gray-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white
          ${isEmpty ? "top-4 text-sm" : "top-0 text-xs bg-white"}`}
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingLabelTextarea
