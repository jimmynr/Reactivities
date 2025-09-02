
import HomePage from "../home/HomePage"
import NavBar from "./NavBar"
import { Outlet, useLocation } from "react-router"

const App = () => {

  const { pathname } = useLocation()

  return (
    pathname === "/" ? <HomePage /> 
    : <div className="bg-[#eeeeee] min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Outlet />  
      </div>   
    </div>
  )
}

export default App
