import { MdOutlineGroup } from "react-icons/md"

type Props = {
    setOnEditMode: () => void
}

const NavBar = ({setOnEditMode}: Props) => {
  return (
    <nav 
        className="flex justify-between items-center px-20 py-2 text-white"
        style={{ backgroundImage:"linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)" }}
    >
        <div className="flex items-center gap-2 font-bold text-2xl hover:bg-black/5 hover:rounded-sm px-4 py-1">
            <MdOutlineGroup />
            <div>Reactivities</div>
        </div>
        <div className="flex uppercase font-bold">
            <div
                className="hover:bg-black/5 hover:rounded-sm px-4 py-1">Activities</div>
            <div
                className="hover:bg-black/5 hover:rounded-sm px-4 py-1">About</div>
            <div
                className="hover:bg-black/5 hover:rounded-sm px-4 py-1">Contact</div>
        </div>
        <button 
            onClick={setOnEditMode}
            className="bg-amber-600 hover:bg-amber-600/60 shadow-xl rounded-sm px-4 py-1 cursor-pointer"
        >Create activity</button>
    </nav>
  )
}

export default NavBar
