import About from "../components/about";
import Appointment from "../components/appointment";
import Body from "../components/body";
import Contact from "../components/contact";
import Doctor from "../components/doctors";
import Footer from "../components/footer";
import Header from "../components/header";
import Treatment from "../components/treatment";

const Homepage = ()=>{
    return(
        <>
        {<Header/>}
        {<Body/>}
        {<Appointment/>}
        {<About/>}
        {<Treatment/>}
        {<Doctor/>}
        {<Contact/>}
        {<Footer/>}
        </>
    )
}
export default Homepage;