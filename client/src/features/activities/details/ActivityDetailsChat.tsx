const ActivityDetailsChat = () => {
  return (
    <div className="w-full bg-white rounded-sm shadow-xl mt-4">
      <div className="text-center text-white font-semibold py-2 bg-blue-600 rounded-tl-sm rounded-tr-sm">
        Chat about this event
      </div>

      <div className="p-4 flex flex-col gap-5">
        <textarea
            rows={3}
            placeholder="Enter your comment (Enter to submit, SHIFT + Enter for new line)"
            style={{ resize: "none" }}
            className="px-2 py-4 w-full border-2 border-[#eeeeee] outline-[#eeeeee] rounded-sm"
        ></textarea>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
              <div className="text-white bg-gray-400 px-2 rounded-full">a</div>
              <div className="font-bold text-blue-600">Bob</div>
          </div>
          <div className="text-xs text-gray-600">2 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailsChat;
