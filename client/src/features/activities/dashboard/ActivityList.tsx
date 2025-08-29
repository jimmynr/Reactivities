import { useActivities } from "../../../lib/hooks/useActivities"
import ActivityCard from "./ActivityCard"

const ActivityList = () => {

  const {activities, isPending} = useActivities()

  if (!activities || isPending) return <div>Loading...</div>

  return (
    activities.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
    ))
  )
}

export default ActivityList
