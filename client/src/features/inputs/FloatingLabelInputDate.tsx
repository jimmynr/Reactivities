import { useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { es } from 'date-fns/locale/es';
registerLocale('es', es)

type Props = {
  id: string
  label: string
  name: string
  value: Date | null
}

const FloatingLabelInputDate = ({id, label, name, value}: Props) => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(value)

  return (
    <div className="relative w-full my-5">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        locale="es"
        name={name}
        className="peer text-sm border-2 border-[#eeeeee] rounded-sm w-full px-4 py-2 focus:border-blue-500 
        focus:outline-none"
      />
      {/* <input
        type="date"
        id={id}     
        name={name}
        defaultValue={value}
        className="peer text-sm border-2 border-[#eeeeee] rounded-sm w-full px-4 py-2 focus:border-blue-500 focus:outline-none"
        autoComplete="off"
      /> */}
      <label
        htmlFor={id}
        className="absolute left-2 top-0 text-xs bg-white -translate-y-1/2 px-2 text-gray-400 transition-all 
        peer-focus:top-0 peer-focus:text-xs peer-focus:bg-white"
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingLabelInputDate
