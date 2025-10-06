import { Outlet } from "react-router"
import Navbar from "../Components/Sheared/Navbar"
import Footer from "../Components/Sheared/Footer"

 

const Root = () => {
  return (
    <div> 
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root