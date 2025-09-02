import { Link } from "react-router"
import { formatDate } from "../../../lib/utils/utils"

type Props = {
    activity: Activity
}

const ActivityDetailsHeader = ({ activity }: Props) => {
  return (
    <div
        className="w-full h-56 rounded-sm shadow-xl relative"
        style={{
            backgroundImage: `url(/images/categoryImages/${ activity.category }.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
    >
      <div className="flex justify-between items-end text-white p-4 w-full absolute bottom-0">
        <div>
            <div className="font-bold text-4xl">{activity.title}</div>
            <div className="text-sm">{formatDate(activity.date)}</div>
            <div className="text-xs font-semibold flex gap-1">
                <div>Hosted by</div>
                <Link to={`profiles/bob`} className="underline">Bob</Link>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <button
                className="bg-red-700 hover:bg-red-700/60 shadow-xl rounded-sm px-4 py-1 cursor-pointer uppercase"
            >Cancel activity</button>
            <button
                className="bg-blue-600 hover:bg-blue-600/60 shadow-xl rounded-sm px-4 py-1 cursor-pointer uppercase"
            >Manage event</button>
        </div>
      </div>
    </div>
  )
}

export default ActivityDetailsHeader
   