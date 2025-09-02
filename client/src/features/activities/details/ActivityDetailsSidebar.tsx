

const ActivityDetailsSidebar = () => {
  return (
    <div className="w-full bg-white rounded-sm shadow-xl">
      <div
        className="text-center text-white font-semibold py-2 bg-blue-600 rounded-tl-sm rounded-tr-sm"
      >2 people going</div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div
                className="text-white bg-gray-400 px-2 rounded-full"
            >a</div>
            <div className="font-bold">Bob</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
            <button
                className="text-xs text-white px-4 py-1 bg-amber-600 hover:bg-amber-600/60 rounded-xl cursor-pointer"
            >Host</button>
            <div className="text-xs text-amber-600">Following</div>
        </div>
      </div>
    </div>
  )
}

export default ActivityDetailsSidebar
