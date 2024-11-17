
import Content from "../components/content";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

const Layout = () => {
    return (<>
        <div className='min-w-full min-h-screen bg-gradient-to-b from-yellow-300   to-red-600'>
            <Navbar/>
            <Hero/>
            <Content/>
            <Footer/>
        </div>
    </>)
}
export default Layout;