import './Signup.css';
import { useRef ,useEffect } from 'react';
import {  useLocatiion ,useNavigate } from "react-router-dom";

function Signup()
{  const usernameRef = useRef();
    const passwordRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const roleRef = useRef();
  const navigate = useNavigate();
    function Sign(){
        const requestOptions = {
            method: "POST",
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: usernameRef.current.value,
                lastname: lastnameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                roles:roleRef.current.value,
            }),
          };
          console.log(roleRef.current.value);
          if(roleRef.current.value==="2"){fetch("http://localhost:5000/user/register",requestOptions)
        .then((response)=>response.json())
      .then((data)=>{console.log(data);localStorage.setItem("id",data.id);
      localStorage.setItem("role",data.roles)
      
    })
      
      navigate("/SignIn");
      
    }
    if(roleRef.current.value==="1"){fetch("http://localhost:5000/recruiter/register",requestOptions)
        .then((response)=>response.json())
      .then((data)=>{console.log(data);localStorage.setItem("id",data.id);
    
    })
      
      navigate("/SignIn");
    }
    }
    return(<div className="SignUp" id="intro">
<p className="sign">Sign Up to <br/> 
   <span className="account">Our Website </span>
</p>
<p className="signdesc">Create an account and discover the potential of the services you use. Your account gives you more options by personalizing your experience and giving you easy access to your most important information.</p>
           <div className="container" id="signinbx">
 <p className="welcome">Welcome to <span className="Test">TESTINY</span></p> 
 <p className="Sup">Sign Up</p>
 <p className="NA1">Have an Account ?</p>
 <a href="/SignIn" className="signUp">Sign in</a>
 <label htmlFor="staticEmail1" className="form-label"  id="label1v0">Email address</label>
    <input type="email" className="form-control" id="staticEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' ref={emailRef}></input>
    <label htmlFor="name1" className="form-label" id="labelname">Enter Your Name </label>
    <input type="text" className="form-control" id="name1" aria-describedby="emailHelp1" placeholder='Enter Your Name' ref={usernameRef}></input>
    <label htmlFor="lastname" className="form-label" id="labellastname">Enter Your last Name</label>
    <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp1" placeholder='Enter Your Last Name' ref={lastnameRef}></input>
    <label htmlFor="inputPassword2" className="form-label" id="label2v0">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder='Enter Your Password' ref={passwordRef}></input>
    <label htmlFor="password-confirm" className="form-label" id="confirm">Confirm Password</label>
    <input type="password" className="form-control" id="password-confirm" placeholder='Confirm Your Password'></input>
    <select className="form-select" aria-label="Default select example" id="serviceprovider" ref={roleRef}>
  <option selected>Sign Up as </option>
  <option value="1">Recruiter</option>
  <option value="2">Developer</option>
</select>
<button onClick={Sign} type="submit" className="btn btn-primary log" id="signupbtn">Sign Up</button>
 </div>
</div>);
}
export default Signup ;