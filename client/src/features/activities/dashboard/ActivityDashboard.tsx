import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  return (
    <div className="flex w-full">
      <div className="w-3/5 px-10">
        <ActivityList />
      </div>
      <div className="w-2/5 px-10">
        Activity Filter goes here
      </div>
    </div>
  )
}

export default ActivityDashboard
