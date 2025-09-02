import ActivityFilter from "./ActivityFilter"
import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  return (
    <div className="flex w-full">
      <div className="w-2/3 px-10">
        <ActivityList />
      </div>
      <div className="w-1/3 px-10">
        <ActivityFilter />
      </div>
    </div>
  )
}

export default ActivityDashboard
