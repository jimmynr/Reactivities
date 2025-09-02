import { MdOutlineGroup } from "react-icons/md"
import { Link } from "react-router"

const HomePage = () => {
  return (
    <div 
      className="w-full h-screen flex flex-col justify-center items-center gap-8 text-white"
      style={{ backgroundImage:"linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)" }}
    >
      <div className="flex items-center gap-2 text-8xl">
        <MdOutlineGroup />
        <div>Reactivities</div>
      </div>
      <div className="text-5xl">Welcome to Reactivities</div>
      <Link
        to="/activities"
        className="font-semibold uppercase cursor-pointer bg-blue-600 hover:bg-blue-600/50 px-6 py-2 rounded-xl"
      >Take me to the activities!</Link>
    </div>
  )
}

export default HomePage
