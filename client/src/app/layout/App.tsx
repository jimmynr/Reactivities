
import NavBar from "./NavBar"
import { Outlet } from "react-router"

const App = () => {
  return (
    <div className="bg-[#eeeeee] min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Outlet />  
      </div>   
    </div>
  );
};

export default App
