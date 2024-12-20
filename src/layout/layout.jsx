import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Layout = () => {
    return (<>
        <div className='min-w-full min-h-screen bg-gradient-to-b from-yellow-300   to-red-600'>
            <Navbar/>
              {/* body */}
              <Outlet/>
            <Footer/>
        </div>
    </>)
}
export default Layout;