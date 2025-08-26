import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  const selectActivity = (id: string) => {
    setSelectedActivity(activities.find(activity => activity.id === id))
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
  }

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities")
      .then((res) => setActivities(res.data))
  }, []);

  return (
    <div className="bg-[#eeeeee]">
      <NavBar setOnEditMode={setOnEditMode} />
      <ActivityDashboard 
        activities={activities} 
        selectedActivity={selectedActivity}
        selectActivity={selectActivity}
        cancelSelectActivity={cancelSelectActivity}
        editMode={editMode}
        setOnEditMode={setOnEditMode}
        cancelEditMode={cancelEditMode}
      />
    </div>
  );
};

export default App
