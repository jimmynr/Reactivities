import type { FormEvent } from "react";
import FloatingLabelInputDate from "../../inputs/FloatingLabelInputDate";
import FloatingLabelInputText from "../../inputs/FloatingLabelInputText";
import FloatingLabelTextarea from "../../inputs/FloatingLabelTextarea";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  activity: Activity | undefined;
  cancelEditMode: () => void;
};

const ActivityForm = ({ activity, cancelEditMode }: Props) => {

  const {updateActivity, createActivity} = useActivities()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data: {[key: string]: FormDataEntryValue} = {}

    formData.forEach((value, key) => {
        data[key] = value
    })

    if (activity) {
      data.id = activity.id
      await updateActivity.mutateAsync(data as unknown as Activity)
    } else {
      await createActivity.mutateAsync(data as unknown as Activity)
    }
    cancelEditMode()
  }

  return (
    <form 
        className="bg-white shadow-xl rounded-xl p-4 my-4 w-full h-fit"
        onSubmit={handleSubmit}
    >
      <div className="font-semibold text-lg text-blue-800">Create activity</div>
      <FloatingLabelInputText
        name="title"
        id="title"
        label="Title"
        value={activity?.title}
      />
      <FloatingLabelTextarea
        name="description"
        id="description"
        label="Description"
        value={activity?.description}
      />
      <FloatingLabelInputText
        name="category"
        id="category"
        label="Category"
        value={activity?.category}
      />
      <FloatingLabelInputDate 
        name="date" 
        id="date" 
        label="Date" 
        value={activity?.date ? new Date(activity?.date).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0]
        }
        // value={activity?.date ? activity?.date.split("T")[0] : ""}
      />
      <FloatingLabelInputText 
        name="city" 
        id="city" 
        label="City" 
        value={activity?.city} 
      />
      <FloatingLabelInputText 
        name="venue" 
        id="venue" 
        label="Venue" 
        value={activity?.venue}
      />
      <div className="form-action flex justify-end items-center mt-5">
        <button
          type="button"
          className="uppercase px-4 py-1 text-sm font-semibold cursor-pointer"
          onClick={cancelEditMode}
        >
          Cancel
        </button>
        <button
          disabled={updateActivity.isPending || createActivity.isPending}
          type="submit"
          className="rounded-sm px-4 py-1 bg-green-600 hover:bg-green-600/60 text-white uppercase cursor-pointer text-sm
          disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;
