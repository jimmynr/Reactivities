type Props = {
    activity: Activity
    cancelSelectActivity: () => void
    setOnEditMode: (id: string) => void
}

const ActivityDetails = ({activity, cancelSelectActivity, setOnEditMode}: Props) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 my-4 w-full h-fit">
      <div className="card-content">
        <img src={`/images/categoryImages/${activity.category}.jpg`} alt="Activity Image Cover" />
        <div className="font-semibold text-lg">{activity.title}</div>
        <div className="text-gray-600 mb-2">{activity.date}</div>
        <div className="text-sm">{activity.description}</div>
      </div>
      <div className="card-action flex justify-start items-center mt-5">
        <button 
          onClick={() => setOnEditMode(activity.id)}
          className="uppercase text-blue-800 px-4 py-1 text-sm font-semibold cursor-pointer"
        >Edit</button>
        <button
            onClick={cancelSelectActivity}
            className="uppercase px-4 py-1 text-sm font-semibold cursor-pointer"
        >Cancel</button>
      </div>
    </div>
  )
}

export default ActivityDetails
