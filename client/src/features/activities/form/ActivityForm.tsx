import type { FormEvent } from "react";
import FloatingLabelInputDate from "../../inputs/FloatingLabelInputDate";
import FloatingLabelInputText from "../../inputs/FloatingLabelInputText";
import FloatingLabelTextarea from "../../inputs/FloatingLabelTextarea";

type Props = {
  activity: Activity | undefined;
  cancelEditMode: () => void;
};

const ActivityForm = ({ activity, cancelEditMode }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data: {[key: string]: FormDataEntryValue} = {}

    formData.forEach((value, key) => {
        data[key] = value
    })

    console.log(data)
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
      />
      <FloatingLabelInputText
        name="category"
        id="category"
        label="Category"
        value=""
      />
      <FloatingLabelInputDate name="date" id="date" label="Date" />
      <FloatingLabelInputText name="city" id="city" label="City" value="" />
      <FloatingLabelInputText name="venue" id="venue" label="Venue" value="" />
      <div className="form-action flex justify-end items-center mt-5">
        <button
          type="button"
          className="uppercase px-4 py-1 text-sm font-semibold cursor-pointer"
          onClick={cancelEditMode}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-sm px-4 py-1 bg-green-600 hover:bg-green-600/60 text-white uppercase cursor-pointer text-sm"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;
