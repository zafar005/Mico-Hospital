import About from "../components/about"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutUsPage = ()=>{
    return(
        <>
        {<Header/>}
        <div style={{paddingTop:"69px"}}>
            {<About/>}
        </div>
        {<Footer/>}
        </>
    )
}
export default AboutUsPage