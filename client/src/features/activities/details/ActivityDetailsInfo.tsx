import { IoLocationSharp } from "react-icons/io5"
import { IoMdInformationCircle } from "react-icons/io"
import { MdCalendarToday } from "react-icons/md"
import { formatDate } from "../../../lib/utils/utils"

type Props = {
    activity: Activity
}

const ActivityDetailsInfo = ({activity}: Props) => {
  return (
    <div className="flex flex-col gap-1 bg-white rounded-sm shadow-xl mt-4">
      <div className="flex items-center gap-10 px-4 py-2">
        <IoMdInformationCircle size={25} className="fill-blue-600" />
        <div>{activity.description}</div>
      </div>
      <div className="divider border-b-1 border-b-[#eeeeee]"></div>
      <div className="flex items-center gap-10 px-4 py-2">
        <MdCalendarToday size={25} className="fill-blue-600" />
        <div>{formatDate(activity.date)}</div>
      </div>
      <div className="divider border-b-1 border-b-[#eeeeee]"></div>
      <div className="flex items-center gap-10 px-4 py-2">
        <IoLocationSharp size={25} className="fill-blue-600" />
        <div>{activity.venue} / {activity.city}</div>
      </div>
    </div>
  )
}

export default ActivityDetailsInfo
   