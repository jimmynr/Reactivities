type Props = {
    activity: Activity
    selectActivity: (id: string) => void
}

const ActivityCard = ({activity, selectActivity}: Props) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 my-4 w-full">
      <div className="card-content">
        <div className="font-semibold text-lg">{activity.title}</div>
        <div className="text-gray-600 mb-2">{activity.date}</div>
        <div className="text-sm">{activity.description}</div>
        <div className="mb-2">{activity.city} / {activity.venue}</div>
      </div>
      <div className="card-action flex justify-between items-center mt-5">
        <div className="rounded-full text-sm border border-gray-600 px-2">{activity.category}</div>
        <button 
          onClick={() => selectActivity(activity.id)}
          className="rounded-sm px-4 py-1 bg-blue-800 hover:bg-blue-800/60 text-white uppercase cursor-pointer text-sm"
        >View</button>
      </div>
    </div>
  )
}

export default ActivityCard
