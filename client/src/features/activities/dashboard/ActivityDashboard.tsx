import ActivityList from "./ActivityList"
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"

type Props = {
    activities: Activity[]
    selectedActivity: Activity | undefined
    selectActivity: (id: string) => void
    cancelSelectActivity: () => void
    editMode: boolean
    setOnEditMode: (id?: string) => void
    cancelEditMode: () => void
}

const ActivityDashboard = (
    {activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, setOnEditMode, cancelEditMode}: Props
) => {
  return (
    <div className="flex w-full">
      <div className="w-3/5 px-10">
        <ActivityList 
          activities={activities} 
          selectActivity={selectActivity}
        />
      </div>
      <div className="w-2/5 px-10">
        {
          selectedActivity && !editMode && <ActivityDetails 
            activity={selectedActivity} 
            cancelSelectActivity={cancelSelectActivity}
            setOnEditMode={setOnEditMode}
          />
        }

        { editMode && <ActivityForm
          activity={selectedActivity}
          cancelEditMode={cancelEditMode}
        /> }
      </div>
    </div>
  )
}

export default ActivityDashboard
