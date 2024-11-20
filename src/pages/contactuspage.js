import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";

const ContactUsPage =()=>{
    return(
        <>
        {<Header/>}
        <div style={{paddingTop:"69px"}}>
            {<Contact/>}
        </div>
        {<Footer/>}

        </>
    )
}
export default ContactUsPage;