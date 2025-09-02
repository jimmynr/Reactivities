import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { IoFilter } from "react-icons/io5"
import { BiCalendarEvent } from "react-icons/bi"

const ActivityFilter = () => {
  return (
    <div className='my-4 w-full'>
        <div className='bg-white shadow-xl rounded-xl p-4 w-full'>
            <div className='flex items-center gap-2 text-blue-600'>
                <IoFilter />
                <div className='font-semibold'>Filters</div>
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div>All events</div>
                <div>I'm going</div>
                <div>I'm hosting</div>
            </div>
        </div>
        <div className='bg-white shadow-xl rounded-xl mt-5 p-4 w-full h-96'>
            <div className='flex items-center gap-2 mb-2 text-blue-600'>
                <BiCalendarEvent />
                <div className='font-semibold'>Select date</div>
            </div>
            <Calendar
                locale="en-US"
            />
        </div>
    </div>
  )
}

export default ActivityFilter
