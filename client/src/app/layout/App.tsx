
import { useState } from "react"
import NavBar from "./NavBar"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import { useActivities } from "../../lib/hooks/useActivities"

const App = () => {
  const {activities, isPending} = useActivities()

  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  const selectActivity = (id: string) => {
    if (!editMode)
      setSelectedActivity(activities!.find(activity => activity.id === id))
  }

  const cancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const setOnEditMode = (id?: string) => {
    if (id) selectActivity(id)
    else cancelSelectActivity()
    setEditMode(true)
  }

  const cancelEditMode = () => {
    setEditMode(false)
    // setSelectedActivity(undefined)
  }

  return (
    <div className="bg-[#eeeeee]">
      <NavBar setOnEditMode={setOnEditMode} />
      {
        !activities || isPending ? <div className="text-center min-h-screen">Loading...</div>
        : <ActivityDashboard 
          activities={activities} 
          selectedActivity={selectedActivity}
          selectActivity={selectActivity}
          cancelSelectActivity={cancelSelectActivity}
          editMode={editMode}
          setOnEditMode={setOnEditMode}
          cancelEditMode={cancelEditMode}
        />
      }      
    </div>
  );
};

export default App
