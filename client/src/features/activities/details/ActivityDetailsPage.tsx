import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";

const ActivityDetailsPage = () => {
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <div>Loading...</div>;
  if (!activity) return <div>Activity not found</div>;

  return (
    <div className="flex w-full">
      <div className="w-2/3 px-10 my-4">
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailsChat />
      </div>
      <div className="w-1/3 px-10 my-4">
        <ActivityDetailsSidebar />
      </div>
    </div>
  );
};

export default ActivityDetailsPage;
