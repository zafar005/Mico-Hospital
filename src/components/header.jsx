import { useLocation, useNavigate } from 'react-router-dom';
import '../css/header.css'
import { useEffect } from 'react';
const Header = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        document.querySelector('.login').style.display = 'block'
        document.querySelector('.sign-up').style.display = 'block'
    },[])
    const loginBTN = document.querySelector('.login')
    const signupBTN = document.querySelector('.sign-up')
    if(location.pathname == '/login'){
        loginBTN.style.display = 'none'
        signupBTN.style.display = 'block'
    }else if(location.pathname == '/signup'){
        signupBTN.style.display = 'none'
        loginBTN.style.display = 'block'
    }


    return(
        <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous"referrerpolicy="no-referrer"/>
            <header>
                <input type="checkbox" name="" id="ckk" />
                <div class="logo_">
                    <img src="../../images/logo.png" alt=""/>
                </div>
                <ul>
                    <li><a onClick={()=>(navigate('/'))}>home</a></li>
                    <li><a onClick={()=>{navigate('/about')}}>about</a></li>
                    <li><a onClick={()=>(navigate('/treatment'))}>treatement</a></li>
                    <li><a onClick={()=>(navigate('/doctors'))}>doctors</a></li>
                    <li><a >Testimonial</a></li>
                    <li><a onClick={()=>(navigate('/contact'))}>contact</a></li>
                    <li class="auth_" onClick={()=>(navigate('/login'))} ><a href=""><i class="fa-solid fa-user"></i>Login</a></li>
                    <li class="auth_" onClick={()=>(navigate('/login'))} ><a href=""> <i class="fa-solid fa-user"></i>Sign Up</a></li>
                </ul>
                <div class="auth">
                    <li onClick={()=>(navigate('/login'))} className='login'><a><i class="fa-solid fa-user"></i>Login</a></li>
                    <li onClick={()=>(navigate('/signup'))} className='sign-up'><a> <i class="fa-solid fa-user"></i>Sign Up</a></li>
                </div>
                <div class="menu">
                    <label for="ckk">
                        <i class="fa fa-bars"></i>
                    </label>
                </div>
            </header>
        </>
    )
}
export default Header;