import './Signup.css';
import { useRef ,useEffect } from 'react';
import {  redirect, useLocatiion ,useNavigate } from "react-router-dom";
function SignIn()
{const emailRef = useRef();
    const passwordRef = useRef();
    const roleRef=useRef();
    const navigate = useNavigate();
    //const rolelog = localStorage.getItem("role")
    
  function log(e)
  { e.preventDefault();
     
    const requestOptions = {
          method: "POST",
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role:roleRef.current.value,
          }),
        };
        //console.log(rolelog)
        if(roleRef.current.value==="1"){ fetch("http://localhost:5000/recruiter/login",requestOptions)
        .then((response)=>response.json())
        .then((data)=>{console.log(data);
          //window.location.href('profile/recruiter')
        //  window.history.back()
        //  
        window.location.assign("http://localhost:3001/profile/recruiter")
       localStorage.setItem("id",data.id); 
        
      })
  //    navigate('profile/recruiter');
    }
    if(roleRef.current.value==="2"){fetch("http://localhost:5000/user/login",requestOptions)
    .then((response)=>response.json())
    .then((data)=>{console.log(data);
      ///window.history.back()
      window.location.assign("http://localhost:3001/profile/developer")
     // navigate("profile/developer");
   localStorage.setItem("id",data.id);

  })
 
}
        console.log(roleRef
          .current.value)

  }
  async function countusers(){
    const requestOptions2 = {
      method: "GET",
      
     // withCredentials: true,
      //headers: { "Content-Type": "application/json" },
     //data: formData,
    }
    const response = await fetch('http://localhost:3000/user/count',requestOptions2)
      console.log(response);
  }

 // useEffect(()=>{log()});
    return(<div className="SignIn" id="intro">
        <p class="sign">Sign in to  <br/> 
   <span class="account">Your Account</span>
</p>
<p class="signdesc">Create an account and discover the potential of the services you use. Your account gives you more options by personalizing your experience and giving you easy access to your most important information.</p>
  
   <div class="container" id="signinbx">

    <p class="welcome">Welcome to <span class="Test">TESTINY</span></p> 
    <p class="Sin">Sign in</p>
    <p class="NA">No Account ?</p>
    <a href="/SignUp" class="signUp" >Sign up</a>
    <label for="staticEmail" class="form-label" id="label1" >Email address</label>
    <input type="email" class="form-control" id="staticEmail" aria-describedby="emailHelp" required placeholder='Enter Your Email' ref={emailRef} ></input>
    <label for="inputPassword" class="form-label" id="label2">Password</label>
    <input type="password" class="form-control" id="inputPassword"  required placeholder='Enter Password' ref={passwordRef}></input>
    <div class="mb-3 form-check remember">
    <select className="form-select" aria-label="Default select example" id="serviceprovider1" ref={roleRef}>
  <option selected>Sign In as </option>
  <option value="1">Recruiter</option>
  <option value="2">Developer</option>
</select>
  </div>

  <button onClick={log} type="submit" class="btn btn-primary log" id="signbtn">Login</button>
</div>
</div>);
}
export default SignIn ;