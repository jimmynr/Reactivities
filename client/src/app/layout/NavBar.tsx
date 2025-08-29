import { MdOutlineGroup } from "react-icons/md"
import { Link, NavLink } from "react-router"

const NavBar = () => {
  return (
    <nav 
        className="flex justify-between items-center px-20 py-2 text-white"
        style={{ backgroundImage:"linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)" }}
    >
        <div className="flex items-center gap-2 font-bold text-2xl hover:bg-black/5 hover:rounded-sm px-4 py-1">
            <MdOutlineGroup />
            <Link to="/">Reactivities</Link>
        </div>
        <div className="flex uppercase font-bold">
            <NavLink
                to="/activities"
                className={({ isActive }) => 
                    (isActive ? "hover:bg-black/5 hover:rounded-sm px-4 py-1 text-amber-300"
                    : "hover:bg-black/5 hover:rounded-sm px-4 py-1")
                }                
            >Activities</NavLink>
            <NavLink
                to="/createActivity"
                className={({ isActive }) => 
                    (isActive ? "hover:bg-black/5 hover:rounded-sm px-4 py-1 text-amber-300"
                    : "hover:bg-black/5 hover:rounded-sm px-4 py-1")
                } 
            >Create activity</NavLink>
        </div>
        <button 
            className="bg-amber-600 hover:bg-amber-600/60 shadow-xl rounded-sm px-4 py-1 cursor-pointer"
        >User menu</button>
    </nav>
  )
}

export default NavBar
