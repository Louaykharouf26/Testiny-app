import { useEffect } from "react";
import { useRef } from "react";

function Login()
{const emailRef = useRef();
    const passwordRef = useRef();
    function log()
    {
        const requestOptions = {
            method: "POST",
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }),
          };
        fetch("http://localhost:3000/user/login",requestOptions)
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
    useEffect(()=>{log()});
    return(
        <div>
            <input className="my-2" ref={emailRef}></input>
        
        <input className="mt-2" type="password" ref={passwordRef}></input>
        <button onClick={log} type="button" className="btn btn-primary">
          Login
        </button>
        </div>
        
    )
}
export default Login;