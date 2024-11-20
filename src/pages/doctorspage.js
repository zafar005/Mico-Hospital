import Doctor from "../components/doctors";
import Footer from "../components/footer";
import Header from "../components/header";

const DoctorPage =()=>{
    return(
        <>
        {<Header/>}
        <div style={{paddingTop:"69px"}}>
            {<Doctor/>}
        </div>
       
        {<Footer/>}
        </>
    )
}
export default DoctorPage;