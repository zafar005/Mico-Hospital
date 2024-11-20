import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../css/loginform.css";
const LoginForm = () => {

  const location = useLocation();
  const navigate = useNavigate()
  const [formname ,getformname] = useState("Registration");
  const [BtnName ,getBtnName] = useState("Register");
  const [linkname , getlinkname] = useState("")
  const [showerror ,getshowerror] = useState('')
  const [fullname ,getfullname] = useState('')
  const[phoneno , getphoneno] = useState('')
  const[email , getemail] = useState('')
  const[password , getpassword] = useState('')

  // const nameExp = /^[a-zA-Z ]{2,30}$/
  // const emailExp = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const mobileExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const fullnamehandler =(event)=>{
    getfullname(event.target.value)
  }
  const phonenohandler =(event)=>{
    getphoneno(event.target.value)
  }
  const emailhandler =(event)=>{
    getemail(event.target.value)
  }
  const passwordhandler =(event)=>{
    getpassword(event.target.value)
  }
  const submithandler =()=>{
    if (fullname===('')){
      getshowerror('Please enter your name')
    }else if(phoneno===('')){
      getshowerror('Please enter your mobile number')
    }else if(email===''){
      getshowerror('Please Enter Email')
    }else if(password===('')){
      getshowerror('Please Enter Password')
    }else{
      if(location.pathname == '/login'){
        getshowerror('')
                const RegistartionData = {email:email,password:password}
                axios.post('http://localhost:5050/users/login',RegistartionData).then((response)=>{
                    if(response.data.message =='wrong user'){
                        getshowerror('Either email or password is wrong')
                      }else{
                        localStorage.setItem('id',response.data.message._id)
                        localStorage.setItem('fullname',response.data.message.fullname)
                        localStorage.setItem('email',response.data.message.email)
                        navigate('/dashbord')
                      }
          
            })
        
      }
      else{
        const RegistrationData = {fullname:fullname,phoneno:phoneno,email:email,password:password}
        axios.post('http://localhost:5050/users/registration',RegistrationData).then((respone)=>{
          console.log(respone);
          navigate('/dashbord');
          
        })
      }

    }

  }
  
  useEffect(()=>{
    if(location.pathname == '/login'){
      getformname("Welcome");
      getBtnName("login");
      getfullname('vhvj');
      getphoneno('vhvj');
      getlinkname("Forgot Password?");
    }
  },[])


  return (
    <>
    
      <div className="formbody">
      <img class="wave" src="../../images/wave.png"/>
        <div class="container">
          <div class="img">
            <img src="../../images/bg.svg" />
          </div>
          <div class="login-content">
            <form action="index.html">
              <img src="../../images/avatar.svg" />
              <h2 class="title">{formname}</h2>

              <div className='error' style={{color: "red"}}>{showerror}</div>
              {BtnName !== 'login' && 
              <>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" placeholder="Full Name" value={fullname} onChange={fullnamehandler}/>
                </div>
              </div>
              <div class="input-div one">
                <div class="i">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" placeholder="Mobile No." value={phoneno} onChange={phonenohandler}/>
                </div>
              </div>
              </>}
              <div class="input-div one">
                <div class="i">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" placeholder="Email" value={email} onChange={emailhandler}/>
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input type="password" class="input" placeholder="Password" value={password} onChange={passwordhandler}/>
                </div>
              </div>
              <a id="link">{linkname}</a>
              <input type="button" class="btn" value={BtnName} onClick={submithandler} />
              {/* <button class="btn" onClick={submithandler}>{BtnName}</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
