import { Link, useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities"

const ActivityDetails = () => {

  const {id} = useParams()
  const { activity, isLoadingActivity } = useActivities(id)

  if (isLoadingActivity) return <div>Loading...</div>
  if (!activity) return <div>Activity not found</div>

  return (
    <div className="bg-white shadow-xl rounded-xl p-4 mx-auto my-4 w-1/2 h-fit">
      <div className="card-content">
        <img 
          src={`/images/categoryImages/${activity?.category}.jpg`} 
          alt="Activity Image Cover" 
        />
        <div className="font-semibold text-lg">{activity?.title}</div>
        <div className="text-gray-600 mb-2">{activity?.date}</div>
        <div className="text-sm">{activity?.description}</div>
      </div>
      <div className="card-action flex justify-start items-center mt-5">
        <Link 
          to={`/editActivity/${activity.id}`}
          className="uppercase text-blue-800 px-4 py-1 text-sm font-semibold cursor-pointer"
        >Edit</Link>
        <Link to="/activities"
            className="uppercase px-4 py-1 text-sm font-semibold cursor-pointer"
        >Cancel</Link>
      </div>
    </div>
  )
}

export default ActivityDetails
