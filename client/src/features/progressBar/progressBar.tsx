export default function IndeterminateProgressBar() {
  return (
    <div className="w-full absolute bottom-0 left-0 z-50 progress-infinite">
      <div className="h-2 w-full bg-gray-300 rounded-none overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x"></div>
      </div>
    </div>
  )
}
