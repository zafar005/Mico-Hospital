import Footer from "../components/footer";
import Header from "../components/header";
import LoginForm from "../components/loginform";

const LoginPage = ()=>{
    return(
        <>
        {<Header/>}
        {<LoginForm/>}
        {<Footer/>}
        </>
    )
}
export default LoginPage;