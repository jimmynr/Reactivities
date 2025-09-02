import { Link } from "react-router"
import { MdOutlineWatchLater } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5"

type Props = {
    activity: Activity
}

const ActivityCard = ({activity}: Props) => {

  return (
    <div className="bg-white shadow-xl rounded-xl my-4 w-full">
      <div className="card-header flex items-center gap-2 p-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
        alt=""
        className="inline-block size-20 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
        <div>
          <div className="font-bold text-lg">{activity.title}</div>
          <div className="text-xs flex gap-1">
            <div className="text-gray-600">Hosted by</div>
            <Link to={`profiles/bob`} className="underline text-blue-600">Bob</Link>
          </div>
        </div>
      </div>

      <div className="divider border-b-1 border-b-[#eeeeee]"></div>
      
      <div className="card-content">
        <div className="text-sm flex gap-4 w-full p-4">
          <div className="flex items-center gap-2 w-1/3">
            <MdOutlineWatchLater size={25} />
            <div className="text-sm">{activity.date}</div>
          </div>
          <div className="flex items-center gap-2 w-2/3">
            <IoLocationSharp size={25}  />
            <div className="text-xs">{activity.city} / {activity.venue}</div>
          </div>
        </div>

        <div className="p-4 bg-[#eeeeee] text-sm">Attendees go here</div>

        <div className="px-4 mt-4 text-sm">{activity.description}</div>
      </div>
      <div className="card-action flex justify-end items-center px-4 pb-4">
        <Link
            to={`/activities/${activity.id}`}
            className="rounded-xl px-4 py-1 bg-blue-600 hover:bg-blue-600/60 text-white uppercase cursor-pointer text-sm
            font-semibold"
          >View</Link>
      </div>
    </div>
  )
}

export default ActivityCard
